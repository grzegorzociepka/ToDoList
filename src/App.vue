<template>
  <div id="app">
    <user-panel></user-panel>
  </div>
</template>

<script>
import UserPanel from './components/UserPanel.vue'
export default {
  name: 'app',
  components: {
    UserPanel
  }
}
</script>
