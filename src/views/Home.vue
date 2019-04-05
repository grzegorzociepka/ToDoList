<template>
  <div class="home">
    <UserPanel/>
    <div class="listContainer">
      <NewListTask/>
      <List/>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import firebase from "firebase";
import UserPanel from "../components/UserPanel.vue";
import List from "../components/List.vue";
import NewListTask from "../components/NewListTask.vue";

export default Vue.extend({
  components: { UserPanel, List, NewListTask },
  name: "home",
});
</script>

<style lang='scss'>
.listContainer {
  width: 50%;
  height: auto;
  margin: 25px auto;
}
@media only screen and (max-width: 1200px) {
  .listContainer {
    width: 75%;
  }
}
@media only screen and (max-width: 768px) {
  .listContainer {
    width: 95%;
  }
}
</style>
