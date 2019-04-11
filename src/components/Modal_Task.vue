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
        <button type="submit" @click="addTask()" class="btn">Add</button>
      </form>
      <ul>
        <li v-for="(list) in lists" v-bind:key="list._key">
            {{list.title}}
          </li>
      </ul>
      
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

      var ref = firebase
        .database()
        .ref("/users/" + this.uid)
        .child("todolists");
      
      ref.on("value", snap => {
        let data = snap.val();
        let dataWithKeys = Object.keys(data).map(key => {
          var obj = data[key];
          obj._key = key;
          this.lists.push(obj);
          
        });
      });
    },
    addTask() {
      this.uid = firebase.auth().currentUser.uid;

      var taskData = {
        title: this.title,
        desc: this.desc
      };
      var newTaskKey = firebase
        .database()
        .ref("users/" + this.uid + "/todolists")
        .push().key;
      var updates = {};
      updates["/todolists/" + newTaskKey] = taskData;
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
