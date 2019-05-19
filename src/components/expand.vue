<template>
  <div class="vue-expand-panel">
    <div class="catalog">
      <div class="item-container">
        <div
          class="index-bar"
          @click="clickBar()"
          :class="{ 'index-bar-border-radius': openBar === true }"
        >
          <div class="left-index">{{ title }}</div>
          <div class="desc-index" v-if="desc.length > 0 ">Description: {{ desc }}</div>
          <div class="deleteIcon">
            <i class="fas fa-trash" @click="deleteList(listId)"></i>
          </div>
          <div class="right-arrow">
            <div class="arrow" :class="{ 'rolling-in-the-deep': openBar === true }"></div>
          </div>
        </div>
        <div class="content" :class="{ 'content-height': openBar === true }">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "vue-expand-panel",
  props: {
    title: String,
    desc: String,
    listId: String
  },
  data() {
    return {
      openBar: false
    };
  },
  methods: {
    clickBar() {
      const currentOpenBar = this.openBar;
      this.openBar = !currentOpenBar;
    },
    deleteList() {
      //method used just in my project, you can remove it or add your own.

      this.uid = firebase.auth().currentUser.uid;
      var ref = firebase
        .database()
        .ref(
          "users/" +
            this.uid +
            "/todolists/" +
            this.listId 
        )

       ref.on('value', snap => {
        var a = snap.val();
        var b = Object.keys(a)[0];
        ref.child(b).remove();
      })
    }
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
  .catalog {
    margin: 0 20px;
    .item-container {
      margin-bottom: 12px;
      .index-bar-border-radius {
        border-radius: 0 !important;
      }
      .index-bar {
        width: 100%;
        height: auto;
        padding: 10px 0;
        line-height: 32px;
        border: 2px solid #00d1b2;
        background-color: transparent;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-flow: row;
        flex-flow: row;
        -ms-flex-pack: justify;
        justify-content: space-between;
        transition: border-radius 0.3s ease-in-out;
        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
          0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
          z-index:5;
        .left-index {
          color: #4f4f4f;
          font-size: 14px;
          font-weight: bold;
          margin-left: 16px;
        }
        .desc-index {
          float: left;
          font-size: 14px;
          font-weight: 400;
          margin-left: 25px;
          margin-right: auto;
        }
        .deleteIcon{
          margin-right:auto;
          font-size:14px;
          z-index:9;
          position:absolute;
          right:35%;
        }
        .right-arrow {
          height: 100%;
          width: 24px;
          margin-right: 8px;
          div.rolling-in-the-deep {
            transform: rotate(-180deg);
          }
          div.arrow {
            transition: transform 0.3s ease-out;
            display: inline-block;
            position: relative;
            height: 100%;
            width: 100%;
          }
          div.arrow::after {
            display: inline-block;
            content: " ";
            height: 6px;
            width: 6px;
            border-width: 0 2px 2px 0;
            border-color: #00d1b2;
            border-style: solid;
            transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
            transform-origin: center;
            transition: transform 0.3s;
          }
        }
      }
      .content-height {
        max-height: 2000px !important;
        border-left: 2px solid #00d1b2 !important;
        border-right: 2px solid #00d1b2 !important;
        border-bottom: 2px solid #00d1b2 !important;
        padding: 10px 0 !important;
        transition: 0.3s;
      }
      .content {
        width: 100%;
        max-height: 0;
        overflow: hidden;
        padding: 2px 0;
        background-color: transparent;
        transition: all 0.3s ease-in-out;
        border-bottom: 2px solid #00d1b2;
      }
    }
  }
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
