<template>
  <div>
    <DemoAdaptiveModal/>
    <div class="buttonsWrapper">
      <div class="addList add" @click="$modal.show('adaptive')">
        <span>Add List</span>
      </div>
      <div class="addTask add">
        <span>Add Task</span>
      </div>
      <div class="clear"></div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VModal from "vue-js-modal";
import DemoAdaptiveModal from "./Modal_Adaptive.vue";

Vue.use(VModal);

export default {
  name: "NewListTask",
  components: { DemoAdaptiveModal },
  data() {
    return {
      canBeShown: false
    };
  }
};
</script>

<style lang='scss' scoped>
.buttonsWrapper {
  margin: 20px auto;
  width: 96%;

  .add {
    width: 49%;
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
    &:nth-child(2n) {
      margin-left: 2%;
    }
  }
}
</style>
