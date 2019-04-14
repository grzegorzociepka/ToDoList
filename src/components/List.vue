<template>
  <div class="vue-expand-panel">
    <ul>
      <li v-for="(item, index) in expandList" :key="index">
        <expand-panel :title="item.title">
          <div class="section-content">
            <li v-for="(item2) in item" :key="item2.uid">
              <div v-for="(item3, key3) in item2" :key="key3">
                <Task v-if="isObject(item3) && item3.status!=2" v-bind:listId='item._key' v-bind:taskId='key3' v-bind:status='item3.status' v-bind:title='item3.title' v-bind:desc='item3.desc'/>
                <Task v-if="isObject(item3) && item3.status==2 && showDone==true" v-bind:listId='item._key' v-bind:taskId='key3' v-bind:status='item3.status' v-bind:title='item3.title' v-bind:desc='item3.desc'/>
              </div>
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
import { EventBus } from './EventBus.js';
import Task from './Task.vue'

export default {
  components: {
    expandPanel,
    Task,
    EventBus
  },
  data() {
    return {
      expandList: [],
      uid: "",
      showDone: false
    };
  },
  
  methods:{
    updateStatus(){
      EventBus.$on('showDoneFlag', showDoneFlag => {
       this.showDone = showDoneFlag 
      });
    },
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
    this.updateStatus();
    this.getLists();
  }
};
</script>

<style lang="scss">
.vue-expand-panel .catalog {
    margin: 0 20px
}
.vue-expand-panel .catalog .item-container {
    margin-bottom: 12px
}
.vue-expand-panel {
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
}
.vue-expand-panel .catalog .item-container .index-bar-border-radius {
    border-radius: 0 !important
}
.vue-expand-panel .catalog .item-container .index-bar {
    width: 100%;
    height: auto;
    padding:10px 0;
    line-height: 32px;
    border: 2px solid #00d1b2;
    background-color: transparent;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row;
    flex-flow: row;
    -ms-flex-pack: justify;
    justify-content: space-between;
    transition: border-radius .3s ease-in-out;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}
.vue-expand-panel .catalog .item-container .index-bar .left-index {
    color: #4f4f4f;
    font-size: 14px;
    font-weight: 700;
    margin-left: 16px
}
.vue-expand-panel .catalog .item-container .index-bar .right-arrow div.arrow:after {
    display: inline-block;
    content: " ";
    height: 6px;
    width: 6px;
    border-width: 0 2px 2px 0;
    border-color: #00d1b2;
    border-style: solid;
    transform: matrix(.71, .71, -.71, .71, 0, 0);
    transform-origin: center;
    transition: transform .3s
}

.vue-expand-panel .catalog .item-container .content-height {
    max-height: 2000px !important;
    border-left: 2px solid #00d1b2 !important;
    border-right: 2px solid #00d1b2 !important;
    border-bottom: 2px solid #00d1b2 !important;
    padding:10px 0!important;
    transition:0.3s;
}

.vue-expand-panel .catalog .item-container .content {
    width: 100%;
    max-height: 0;
    overflow: hidden;
    padding:2px 0;
    background-color: transparent;
    transition: all .3s ease-in-out;
    
    border-bottom: 2px solid #00d1b2
}
.vue-expand-panel .catalog .item-container .index-bar .right-arrow div.arrow:after {
    display: inline-block;
    content: " ";
    height: 6px;
    width: 6px;
    border-width: 0 2px 2px 0;
    border-color: #4f4f4f;
    border-style: solid;
    transform: matrix(.71, .71, -.71, .71, 0, 0);
    transform-origin: center;
    transition: transform .3s
}
.vue-expand-panel .catalog .item-container .index-bar .left-index {
    color: #4f4f4f;
    font-size: 14px;
    font-weight: 700;
    margin-left: 16px
}

.vue-expand-panel .catalog .item-container .index-bar .right-arrow {
    height: 100%;
    width: 24px;
    margin-right: 8px
}

.vue-expand-panel .catalog .item-container .index-bar .right-arrow div.rolling-in-the-deep {
    transform: rotate(-180deg)
}

.vue-expand-panel .catalog .item-container .index-bar .right-arrow div.arrow {
    transition: transform .3s ease-out;
    display: inline-block;
    position: relative;
    height: 100%;
    width: 100%
}
</style>
