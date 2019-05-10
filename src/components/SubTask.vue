<template>
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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.subTask {
      box-shadow: 0 4px 9.6px 0.4px red;
      margin: 25px;
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
</style>

