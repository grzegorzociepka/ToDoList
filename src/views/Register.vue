<template>
  <form>
    <input type="text" v-model="email">
    <input type="password" v-model="password">
    <button type="submit" @click="signUp"></button>
  </form>
</template>

<script>
import firebase from "firebase";

export default {
  name: "singUp",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signUp: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            alert("succes");
          },
          function(err) {
            alert("fail: " + err.message);
          }
        );
    }
  }
};
</script>
