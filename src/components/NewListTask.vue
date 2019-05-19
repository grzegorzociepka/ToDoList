<template>
  <div>
    <ModalLists/>
    <ModalTask/>
    <ModalSubTask/>
    <ModalEditTask/>
    <div class='buttonsWrapper'>
      <div class='addList add' @click='$modal.show("lists")'>
        <span>Add List</span>
      </div>
      <div class='addTask add' @click='$modal.show("task")'>
        <span>Add Task</span>
      </div>
      <div v-if="showDoneFlag == false" class='addTask add' @click='showDone()'>
        <span>Show done</span>
      </div>
      <div v-else class='addTask add toggled' @click='hideDone()'>
        <span>Hide done</span>
      </div>
      <div class='clear'></div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import VModal from 'vue-js-modal';
import ModalLists from './Modal_Lists.vue';
import ModalTask from './Modal_Task.vue';
import { EventBus } from './EventBus.js';
import ModalSubTask from './Modal_SubTask.vue';
import ModalEditTask from './Modal_EditTask.vue';

Vue.use(VModal);

export default {
  name: 'NewListTask',
  components: { ModalLists, ModalTask,ModalSubTask,ModalEditTask },
  data() {
    return {
      canBeShown: false,
      showDoneFlag: false
    };
  },
  methods:{
    showDone(){
      this.showDoneFlag = true
      EventBus.$emit('showDoneFlag', this.showDoneFlag);
      
    },
    hideDone(){
      this.showDoneFlag = false
      EventBus.$emit('showDoneFlag', this.showDoneFlag);
    }
  }
};
</script>

<style lang='scss' scoped>
.buttonsWrapper {
  margin: 20px auto;
  width: 96%;
  .toggled{
    background-color:#00d1b2;
    color:white!important;
  }
  .add {
    width: 31.5%;
    float: left;
    text-align: center;
    padding: 10px;
    color: #00d1b2;
    cursor: pointer;
    transition: 0.3s;
    box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
    &:hover {
      box-shadow: 0 1px 3px 0 #00d1b2, 0 0 0 1px #00d1b2;
    }
    &:nth-child(1n) {
      margin-left: 1.1%;
    }
  }
}
</style>
