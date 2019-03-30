import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import '../public/style/homepage.scss'
import router from './router'
import store from './store'
import './config/firebase.ts'

Vue.config.productionTip = false

require('dotenv').config()

let app

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: z => z(App)
    }).$mount('#app')
  }
})
