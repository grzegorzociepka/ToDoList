<template>
  <modal
    name="adaptive"
    transition="nice-modal-fade"
    :min-width="200"
    :min-height="200"
    :delay="100"
    @before-open="beforeOpen"
  >
    <div class="example-modal-content">
      {{uid}}
      <form>
        <input type="text" v-model="title" id="title" value="Title" name="listName">
        <input type="text" v-model="desc" id="desc" value="Desc" name="listDesc">
        <button type="submit" @click="addTask()" class="btn">Add</button>
      </form>
    </div>
  </modal>
</template>
<script>
import firebase from "firebase";

export default {
  name: "Modal_Adaptive",
  data() {
    return {
      subTaskList: [],
      title: "",
      desc: "",
      status: 0,
      uid: ""
    };
  },
  methods: {
    beforeOpen(event) {
      this.uid = firebase.auth().currentUser.uid;
    },
    addTask() {
      this.uid = firebase.auth().currentUser.uid;
      var path = 'users/' + this.uid;
      var newTask = firebase.firestore().collection('users').doc(this.uid)
      firebase.firestore().collection('users').doc(this.uid).collection('todolists').add({ string:title, desc, status })
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
