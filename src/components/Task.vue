<template>
  <div class="card">
    <div class="taskContent">
      <div class="title">
        <h2>Task 1</h2>
      </div>
      <div
        class="desc"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste illo veritatis architecto facere cumque. Architecto consequatur facilis, sapiente harum incidunt, rem modi placeat nemo officia sunt repudiandae porro cumque eum.</div>
      <div class="actions">
        <div class="statusOfTask">
          <div class="undone st">Undone</div>
          <div class="half st">Half</div>
          <div class="done st">Done</div>
        </div>
        <div class="actionsWrapper">
          <div class="actionIcon">
            <i class="fas fa-trash"></i>
          </div>
          <div class="actionIcon">
            <i class="fas fa-edit"></i>
          </div>
        </div>
        <div class="clear"></div>
      </div>
    </div>
    <div class="status">
      <span>Done</span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.card {
  margin: 10px auto;
  width: 95%;
  padding: 0.9em;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
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
          padding:5px;
          margin-right:5px;
          cursor:pointer;
        }
        .undone{
            color:white;
            background-color:red;
        }
        .half{
            background-color:yellow;
        }
        .done{
            background-color:#21ba45;
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
  }
}
</style>

