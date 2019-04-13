<template>
  <modal
    name="task"
    transition="nice-modal-fade"
    :min-width="200"
    :min-height="200"
    :delay="100"
    @before-open="beforeOpen"
  >
    <div class="example-modal-content">
      <form id="task" @submit.prevent>
        <input type="text" v-model="title" id="title" value="Title" name="listName">
        <input type="text" v-model="desc" id="desc" value="Desc" name="listDesc">
        <select v-model="selected">
          <option v-for="(list) in lists" v-bind:key="list._key" :value="list._key">{{list.title}}</option>

        </select>
        <button type="submit" @click="addTask()" class="btn">Add</button>
      </form>
    </div>
  </modal>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ModalTask",
  data() {
    return {
      title: "",
      desc: "",
      status: 0,
      uid: "",
      lists: []
    };
  },

  methods: {
    beforeOpen(event) {
      this.uid = firebase.auth().currentUser.uid;

      if (this.lists.length == 0) {
        var ref = firebase
          .database()
          .ref("/users/" + this.uid)
          .child("todolists");

        ref.once("value", snap => {
          this.expandList = [];
          let data = snap.val();
          let dataWithKeys = Object.keys(data).map(key => {
            var obj = data[key];
            obj._key = key;
            this.lists.push(obj);
          });
        });
      }
    },
    addTask() {
      this.uid = firebase.auth().currentUser.uid;
      var taskData = {
        title: this.title,
        desc: this.desc,
        status: this.status
      };

      var newTaskKey = firebase
        .database()
        .ref("users/" + this.uid + "/todolists/" + this.selected + '/tasks')
        .push().key;

      var updates = {};
      updates["/todolists/" + this.selected +'/tasks/' + newTaskKey] = taskData;
      return firebase
        .database()
        .ref("users/" + this.uid)
        .update(updates)
        .then(alert("success"));
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
