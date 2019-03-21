import Vue from 'vue'
import App from './App.vue'
import '../public/style/homepage.scss'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

require('dotenv').config()

// Initialize Firebase

var config = {
  apiKey: "AIzaSyAnxalfNiEy-HJEs0fmLtCsp_InQwdJ67A",
  authDomain: "todolist-a321d.firebaseapp.com",
  databaseURL: "https://todolist-a321d.firebaseio.com",
  projectId: "todolist-a321d",
  storageBucket: "todolist-a321d.appspot.com",
  messagingSenderId: "423713761897"
};

firebase.initializeApp(config);
/*
var config = {
  apiKey: "AIzaSyAnxalfNiEy-HJEs0fmLtCsp_InQwdJ67A",
  authDomain: "todolist-a321d.firebaseapp.com",
  databaseURL: "https://todolist-a321d.firebaseio.com",
  projectId: "todolist-a321d",
  storageBucket: "todolist-a321d.appspot.com",
  messagingSenderId: "423713761897"

  apiKey: process.env.VUE_APP_apiKey,
  authDomain: process.env.VUE_APP_authDomain,
  databaseURL: process.env.VUE_APP_databaseURL,
  projectId: process.env.VUE_APP_projectId,
  storageBucket: process.env.VUE_APP_storageBucket,
  messagingSenderId: process.env.VUE_APP_messagingSenderId
};*/

new Vue({
  router,
  store,
  render: z => z(App)
}).$mount('#app')
