<template>
  <div class="vue-expand-panel">
    <ul>
      <li v-for="(item, index) in expandList" :key="index">
        <expand-panel :title="item.title">
          <div class="section-content" v-for="(data, key) in item.dataList" :key="key">
            <div class="col-txt col-1">{{ data.col_1 }}</div>
            <div class="col-txt col-2">{{ data.col_2 }}</div>
            <div class="col-txt col-3">{{ data.col_3 }}</div>
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

export default Vue.extend({
  components: {
    expandPanel
  },
  data() {
    return {
      expandList: [
        {
          title: "First task",
          dataList: [
            {
              col_1: "Example Task",
              col_2: "buffer 2个",
              col_3: "难关 12道"
            },
            {
              col_1: "1.2 rick & morty",
              col_2: "buffer 2个",
              col_3: "难关 12道"
            },
            {
              col_1: "1.3 rick & morty",
              col_2: "buffer 2个",
              col_3: "难关 12道"
            },
            {
              col_1: "1.4 rick & morty",
              col_2: "buffer 2个",
              col_3: "难关 12道"
            }
          ]
        },
        {
          title: "Second task",
          dataList: [
            {
              col_1: "2.1 有趣",
              col_2: "buffer 2个",
              col_3: "难关 12道"
            },
            {
              col_1: "2.2 有道理",
              col_2: "buffer 2个",
              col_3: "难关 12道"
            },
            {
              col_1: "2.3 有精神",
              col_2: "buffer 2个",
              col_3: "难关 12道"
            },
            {
              col_1: "2.4 有气质",
              col_2: "buffer 2个",
              col_3: "难关 12道"
            }
          ]
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
