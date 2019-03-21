<template>
  <div class="home">
    <Login/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Login from '@/components/Login.vue'; // @ is an alias to /src
import Register from '@/components/Register.vue';
export default Vue.extend({
  name: 'home',
  components: {
    Login,
    Register
  },
});
</script>
