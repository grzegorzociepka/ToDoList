<template>
  <modal
    name="lists"
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
        <button type="submit" @click="addList()" class="btn">Add</button>
      </form>
    </div>
  </modal>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Modal_Adaptive",
  data() {
    return {
      title: "",
      desc: "",
      tasks: []
    };
  },
  methods: {
    beforeOpen(event) {
      this.uid = firebase.auth().currentUser.uid;
    },
    addList() {
      this.uid = firebase.auth().currentUser.uid;

      var taskData = {
        title: this.title,
        desc: this.desc,
        tasks : this.tasks
      };
      var newTaskKey = firebase.database().ref('users/'+this.uid+'/todolists').push().key;
      var updates = {};
      updates['/todolists/'+newTaskKey] = taskData;
      return firebase.database().ref('users/'+this.uid).update(updates).then(alert('success'));
    }
  }
};

</script>
<style lang="scss" scoped>
</style>
