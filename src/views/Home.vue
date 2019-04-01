<template>
  <div class='home'>
     <UserPanel/>
     <div class='listContainer'>
       <List/>
     </div>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import firebase from 'firebase'
import UserPanel from '../components/UserPanel.vue'
import List from '../components/List.vue'

export default Vue.extend({
  components: { UserPanel, List },
  name: 'home',
  methods: {
    logout () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  }
})
</script>

<style lang='scss'>
  .listContainer{

    width:50%;
    height:auto;
    margin:25px auto;
  }
</style>
