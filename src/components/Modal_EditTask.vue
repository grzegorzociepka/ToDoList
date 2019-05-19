<template>
  <modal
    name="editTask"
    transition="nice-modal-fade"
    :min-height="250"
    :delay="100"
    @before-open="beforeOpen"
  >
    <div class="modal-content">
      <form id="task" @submit.prevent>
        <span class="formText">Title:</span>
        <input type="text" v-model="title" id="title" value="Title" name="listName">
         <span class="formText">Description:</span>
        <input type="text" v-model="desc" id="desc" value="Desc" name="listDesc">
        <button type="submit" @click="updateTask()" class="btn">Add</button>
      </form>
    </div>
  </modal>
</template>

<script>
import firebase from "firebase";

export default {
  name: "EditModalTask",
  data() {
    return {
      title: "",
      desc: "",
      listId: String,
      taskId: String,
      subTasksList: Array
    };
  },

  methods: {
    updateTask() {
      this.uid = firebase.auth().currentUser.uid;
      var taskData = {
        title: this.title,
        desc: this.desc,
        status: this.status,
        subTasksList: this.subTasksList
      };
      var taskKey = firebase
        .database()
        .ref("users/" + this.uid + "/todolists/" + this.listId + '/tasks/' + this.taskId);

      var updates = {};
      updates["/todolists/" + this.listId +'/tasks/' + this.taskId] = taskData;
      
      return firebase
        .database()
        .ref("users/" + this.uid)
        .update(updates)
    },
    beforeOpen(event) {
      this.taskId = event.params.taskId;
      this.listId = event.params.listId;
      this.status = event.params.status;
      this.subTasksList = event.params.subTasksList;
    }
  }
};
</script>
<style lang='scss'>
.v--modal{
    @media only screen and(max-width: 650px){
      max-width:450px!important;
      margin:0 auto;
    }
    @media only screen and(max-width: 460px){
      max-width:350px!important;
      margin:0 auto;
    }
}
</style>
