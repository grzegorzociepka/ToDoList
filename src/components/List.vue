<template>
  <div class="vue-expand-panel">
    <ul>
      <li v-for="(item, index) in expandList" :key="index">
        <expand-panel :title="item.title">
          <div class="section-content">
            <Task/>
            <Task/>
          </div>
        </expand-panel>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { expandPanel } from "vue-expand-panel";
import "vue-expand-panel/dist/vue-expand-panel.css";
import Task from './Task.vue'

export default Vue.extend({
  components: {
    expandPanel,
    Task
  },
  data() {
    return {
      expandList: [
        {
          title: "First task"
        },
        {
          title: "Second task"
        }
      ]
    };
  }
});
</script>

<style lang="scss">
.vue-expand-panel {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
</style>
