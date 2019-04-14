<template>
  <div
    class="card"
    v-bind:class="[status == 0 ? 'new' : status == 1 ? 'halfDone' : status==2 ? 'done': 'undone']"
  >
    <div class="taskContent">
      <div class="title">
        <h2>{{title}}</h2>
      </div>
      <div class="desc">{{desc}}</div>
      <div class="actions">
        <div class="statusOfTask">
          <div class="undone st" @click="updateStatus(taskId,3,listId)">Undone</div>
          <div class="half st" @click="updateStatus(taskId,1,listId)">Half</div>
          <div class="done st" @click="updateStatus(taskId,2,listId)">Done</div>
        </div>
        <div class="actionsWrapper">
          <div class="actionIcon">
            <i class="fas fa-trash"></i>
          </div>
          <div class="actionIcon">
            <i class="fas fa-edit"></i>
          </div>
          <div class="actionIcon">  
            <i class="fas fa-plus" @click="addSubtask()"></i>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="status" v-bind:class="[status == 2 ? 'statusDone':'']">
      <span v-if="status == 0">New</span>
      <span v-if="status == 1">Half-Done</span>
      <span v-if="status == 2" class="spanDone">Done</span>
      <span v-if="status == 3">Undone</span>
    </div>
    <div class="subTasksWrapper">
      <div class="subTask">
        <div class="title">
          <h3>subtask title</h3>
        </div>
        <div class="desc">2</div>
        <div class="statusOfTask">
          <div class="undone st" @click="updateStatus(taskId,3,listId)">Undone</div>
          <div class="half st" @click="updateStatus(taskId,1,listId)">Half</div>
          <div class="done st" @click="updateStatus(taskId,2,listId)">Done</div>
        </div>
        <div class="status">3</div>
      </div>
      <div class="subTask">
        <div class="title">1</div>
        <div class="desc">2</div>
        <div class="statusOfTask">
          <div class="undone st" @click="updateStatus(taskId,3,listId)">Undone</div>
          <div class="half st" @click="updateStatus(taskId,1,listId)">Half</div>
          <div class="done st" @click="updateStatus(taskId,2,listId)">Done</div>
        </div>
        <div class="status">3</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";

export default {
  props: ["title", "desc", "status", "taskId", "listId"],
  methods: {
    updateStatus(taskId, status, listId) {
      var uid = firebase.auth().currentUser.uid;

      var updates = {};
      updates["/todolists/" + listId + "/tasks/" + taskId + "/status"] = status;

      return firebase
        .database()
        .ref("users/" + uid)
        .update(updates);
    },
    addSubtask(){
      
    }
  }
};
</script>

<style lang="scss" scoped>
.done {
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  background-color: #efefef;
}
.undone {
  box-shadow: 0 1px 3px 0 red, 0 0 0 1px red;
}
.halfDone {
  box-shadow: 0 1px 3px 0 yellow, 0 0 0 1px yellow;
}
.new {
  box-shadow: 0 1px 3px 0 #21ba45, 0 0 0 1px #21ba45;
}
.card {
  margin: 10px auto;
  width: 95%;
  padding: 0.9em;

  .taskContent {
    .title {
      h2 {
        font-size: 1.3em;
        line-height: 0.2em;
      }
    }
    .desc {
      font-size: 0.9em;
      padding-bottom: 10px;
    }
    .actions {
      display: block;
      .statusOfTask {
        float: left;
        .st {
          display: inline-block;
          padding: 5px;
          margin-right: 10px;
          cursor: pointer;
        }
        .undone {
          color: white;
          background-color: red;
          box-shadow: 0 1px 3px 0 red, 0 0 0 1px red;
        }
        .half {
          background-color: yellow;
          box-shadow: 0 1px 3px 0 yellow, 0 0 0 1px yellow;
        }
        .done {
          background-color: #21ba45;
          box-shadow: 0 1px 3px 0 #21ba45, 0 0 0 1px #21ba45;
        }
      }
      .actionsWrapper {
        float: right;
        .actionIcon {
          padding: 0 0.7em;
          display: inline-block;
          cursor: pointer;
        }
      }
    }
  }
  .status {
    display: block;
    box-shadow: 0 0 0 1px #21ba45 inset !important;
    color: #21ba45 !important;
    text-align: center;
    padding: 5px 0;
    margin-top: 10px;
    .spanDone {
      color: #000;
    }
  }
  .statusDone {
    box-shadow: 0 0 0 1px #000 inset !important;
  }
  .subTasksWrapper {
    margin-top: 20px;
    box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
    position: relative;
    padding: 10px;
    .subTask {
      box-shadow: 0 4px 9.6px 0.4px red;
      margin: 10px;
      padding: 5px;
      .desc {
        padding: 5px 10px;
      }
      .statusOfTask {
        padding: 0 10px;
        .st {
          width: 31%;
          display: inline-block;
          padding: 5px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>

