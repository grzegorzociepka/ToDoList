<template>
  <div class="vue-expand-panel">
    <ul>
      <li v-for="(item, index) in expandList" :key="index">
        <expand-panel :title="item.title">
          <div class="section-content">
            <li v-for="(item2) in item" :key="item2.uid">
              {{item2}}
              <Task v-if="isObject(item2)" v-bind:status='item2.status' v-bind:title='item2.title' v-bind:desc='item2.desc'/>
            </li>
          </div>
        </expand-panel>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import firebase from "firebase";
import { expandPanel } from "vue-expand-panel";
import "vue-expand-panel/dist/vue-expand-panel.css";
import Task from './Task.vue'

export default {
  components: {
    expandPanel,
    Task
  },
  data() {
    return {
      expandList: [],
      uid: ""
    };
  },
  methods:{
    getLists() { 

      this.uid = firebase.auth().currentUser.uid;

      
        var ref = firebase
          .database()
          .ref("/users/" + this.uid)
          .child("todolists");

        ref.on("value", snap => {
          this.expandList = [];
          let data = snap.val();
          let dataWithKeys = Object.keys(data).map(key => {
            var obj = data[key];
            obj._key = key;
            this.expandList.push(obj);

          });
        });
      
    },
    isObject(o){
      return typeof o == "object"
    }
  },
  beforeMount(){
    this.getLists();
  }
};
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
