<template>
  <modal
    name="subtask"
    transition="nice-modal-fade"
    :min-width="200"
    :min-height="200"
    :delay="100"
    @before-open="beforeOpen"
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
  data() {
    return {
      title: "",
      desc: "",
      status: 0,
      uid: "",
      taskId: "",
      listId: ""
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
        .ref(
          "users/" +
            this.uid +
            "/todolists/" +
            this.listId +
            "/tasks/" +
            taskId +
            "/subTasksList"
        )
        .push().key;
      var updates = {};
      updates[
        "/todolists/" + this.listId + "/tasks/" + taskId + "/subTasksList/" + newSubTaskKey
      ] = taskData;
      return firebase
        .database()
        .ref("users/" + this.uid)
        .update(updates)
        .then(alert("success"));
    },
    beforeOpen(event) {
      this.taskId = event.params.taskId;
      this.listId = event.params.listId;
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
