<template>
  <div class="login">
    <tabs>
      <tab title="Login" active="true">
        <form id="loginForm">
          <div class="form-group">
            <div class="input-group">
              <input
                type="text"
                v-model="email"
                id="email"
                required="required"
                placeholder="E-mail"
              >
              <i class="bar"></i>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <input
                type="password"
                v-model="password"
                id="password"
                required="required"
                placeholder="Password"
              >

              <i class="bar"></i>
            </div>
          </div>
          <div class="buttonsBox">
            <button type="submit" @click="signIn" class="btn">Login</button>
            <div class="clear"></div>
          </div>
        </form>
      </tab>
      <tab title="SignUp">
        <form id="singupForm">
          <div class="form-group">
            <div class="input-group">
              <input
                type="text"
                v-model="email"
                id="email"
                required="required"
                placeholder="E-mail"
              >
              <i class="bar"></i>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <input
                type="password"
                v-model="password"
                id="password"
                required="required"
                placeholder="Password"
              >
              <i class="bar"></i>
            </div>
          </div>
          <div class="buttonsBox">
            <button type="submit" @click="signUp" class="btn">Register</button>
            <div class="clear"></div>
          </div>
        </form>
      </tab>
    </tabs>
  </div>
</template>

<script>
import firebase from "firebase";
import { Tabs, Tab } from "vue-simple-tabs";

export default {
  components: { Tabs, Tab },
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            this.$router.replace("home");
          },
          err => {
            alert("Oops: " + err.message);
          }
        );
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            var userUid = user.user.uid
            var account = {
              useruid: userUid,
              todolists: []
            }
            firebase
              .firestore()
              .collection('users')
              .doc(userUid)
              .set(account);
            this.$router.replace('login')
          },
          err => {
            alert('fail: ' + err.message)
          }
        )
    }
  }
}
</script>

<style lang="scss">
.login {
  width: 550px;
  margin: 15% auto;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li {
      display: inline-block;
      width: 50%;
      padding: 0.7em;
      text-align: center;
      cursor: pointer;
      text-transform: uppercase;
      letter-spacing: 3px;
      transition: 0.2s;
    }
    .active {
      background-color: #4ae387;
      box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
      color: white;
    }
  }
}

h3 {
  text-align: center;
}

.buttonsBox {
  .btn {
    background-color: #4ae387;
    color: white;
    border: none;
    box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
    letter-spacing: 3px;
    text-transform: uppercase;
    text-align: center;
    vertical-align: middle;
    padding: 1.1rem 3.9rem;
    font-size: 1rem;
    line-height: 1.25;
    border-radius: 1.875rem;
    float: left;
    outline: none;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 -4px 10px 0.4px rgba(74, 227, 135, 0.5);
    }
  }
  .singup {
    color: #4ae387;
    background-color: transparent;
    text-align: center;
    font-size: 1rem;
    line-height: 1.5;
    text-decoration: none;
    float: right;
    vertical-align: middle;
    padding: 1.1rem 0.9rem;
  }
}
.form-group {
  position: relative;
  display: flex;
  min-height: 2.25rem;
  margin-top: 0.2rem;
  margin: 2.25rem 0;
  .input-group {
    position: relative;
    display: block;
    width: 100%;
    input {
      display: block;
      background: none;
      padding: 0.125rem 0.125rem 0.0625rem;
      font-size: 1rem;
      border-width: 0;
      border-color: transparent;
      line-height: 1.9;
      width: 100%;
      box-shadow: none;
      transition: 0.2s;
      height: 1.9rem;
      overflow: visible;
      outline: none;
      padding-left: 0.125rem;
      z-index: 1;
      color: #b3b3b3;
      font-size: 1rem;
      font-weight: 400;
      transition: 0.2s;
      &:placeholder {
        padding-left: 0.125rem;
        z-index: 1;
        color: #b3b3b3;
        font-size: 1rem;
        font-weight: 400;
        transition: 0.2s;
      }
    }
    label {
      position: absolute;
      top: 0.25rem;
      left: 0;
      max-width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      pointer-events: none;
      padding-left: 0.125rem;
      z-index: 1;
      color: #b3b3b3;
      font-size: 1rem;
      font-weight: 400;
      transition: 0.2s;
    }
    .bar {
      position: relative;
      border-bottom: 0.0625rem solid #999;
      display: block;
      &:before {
        content: "";
        height: 0%;
        width: 0%;
        left: 50%;
        bottom: -0.0625rem;
        position: absolute;
        background: #555;
        transition: 0.2s;
        z-index: 2;
      }
    }
  }
}
</style>
