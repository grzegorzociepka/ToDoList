<template>
  <modal
    name="subtask"
    transition="nice-modal-fade"
    :min-width="200"
    :min-height="200"
    :delay="100"
  >
    <div class="modal-content">
      <form id="task" @submit.prevent>
        <span class="formText">Title:</span>
        <input type="text" v-model="title" id="title" value="Title" name="listName">
         <span class="formText">Description:</span>
        <input type="text" v-model="desc" id="desc" value="Desc" name="listDesc">
        <button type="submit" @click="addTask(taskId)" class="btn">Add</button>
      </form>
    </div>
  </modal>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ModalSubTask",
  props: ["taskId"],
  data() {
    return {
      title: "",
      desc: "",
      status: 0,
      uid: "",
    };
  },

  methods: {
    addTask(taskId) {
      this.uid = firebase.auth().currentUser.uid;
      var taskData = {
        title: this.title,
        desc: this.desc,
        status: this.status
      };

      var newSubTaskKey = firebase
        .database()
        .ref("users/" + this.uid + "/todolists/" + this.selected + '/tasks/' + taskId)
        .push().key;

      var updates = {};
      updates["/todolists/" + this.selected +'/tasks/' + taskId + newSubTaskKey] = taskData;
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
