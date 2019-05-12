<template>
  <div class="subTask"  v-bind:class="[status == 0 ? 'new' : status == 1 ? 'halfDone' : status==2 ? 'done': 'undone']">
    <div class="title">
      <h3>{{title}}</h3>
    </div>
    <div class="desc">{{desc}}</div>
    <div class="statusOfTask">
      <div class="undone st" @click="updateStatus(taskId,3,listId,parentId)">Undone</div>
      <div class="half st" @click="updateStatus(taskId,1,listId,parentId)">Half</div>
      <div class="done st" @click="updateStatus(taskId,2,listId,parentId)">Done</div>
    </div>
    <div class="status">
      <span v-if="status == 0">New</span>
      <span v-if="status == 1">Half-Done</span>
      <span v-if="status == 2" class="spanDone">Done</span>
      <span v-if="status == 3">Undone</span>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  props: ["title", "desc", "status", "taskId", "listId", "parentId"],
  methods: {
      updateStatus(taskId, status, listId, parentId) {
      var uid = firebase.auth().currentUser.uid;
      var updates = {};
      updates["/todolists/" + listId + "/tasks/" + parentId + "/subTasksList/" + taskId + "/status"] = status;

      return firebase
        .database()
        .ref("users/" + uid)
        .update(updates);
    }
  }
};
</script>

<style lang="scss" scoped>
.done {
  box-shadow: 0 4px 9.6px 0.4px #d4d4d5!important;
  background-color: #efefef;
}
.undone {
  box-shadow: 0 4px 9.6px 0.4px red!important;
}
.halfDone {
  box-shadow: 0 4px 9.6px 0.4px yellow!important;
}
.new {
  box-shadow: 0 4px 9.6px 0.4px #21ba45!important;
}
.subTask {
 
  margin: 25px;
  padding: 10px;
  .desc {
    padding: 5px 10px;
  }
  .statusOfTask {
    padding: 10px 10px;
    .st {
      width: 31%;
      display: inline-block;
      padding: 5px;
      margin-right: 10px;
      cursor: pointer;
    }
    .undone{
      box-shadow: 0 1px 3px 0 red, 0 0 0 1px red!important;
    }
  }
}
</style>

