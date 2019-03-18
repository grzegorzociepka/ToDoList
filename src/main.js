import Vue from 'vue'
import App from './App.vue'
import '../public/style/homepage.scss'
Vue.config.productionTip = false

new Vue({
  render: z => z(App)
}).$mount('#app')
