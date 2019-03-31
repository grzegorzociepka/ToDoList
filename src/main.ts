import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import '../public/style/homepage.scss'
import router from './router'
import store from './store'
import firebaseConfig from './config/firebaseConfig'

Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firestore = firebaseApp.firestore();
firestore.settings({ timestampsInSnapshots: true })

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

export default firestore
