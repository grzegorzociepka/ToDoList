import Vue from 'vue'
import App from './App.vue'
import '../public/style/homepage.scss'
import router from './router'
import store from './store'
import firebase from 'firebase'
require('dotenv').config()
Vue.config.productionTip = false

// Initialize Firebase
var config = {
  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId
};

firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: z => z(App)
}).$mount('#app')
