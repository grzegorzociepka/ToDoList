<template>
  <div class="home">
     <UserPanel/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from 'firebase'
import UserPanel from '../components/UserPanel.vue'

export default Vue.extend({
  components: { UserPanel },
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
