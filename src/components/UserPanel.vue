<template>
  <section class="userPanel">
    <div class="wrapper">
      <div class="wrapper first">
        <div class="leftSide">
          <div class="borderOfPhoto">
            <div class="photo" style="background-image:url(https://i.imgur.com/TeeyJZI.jpg)"></div>
          </div>
        </div>
        <div class="rightSide">
          <div class="title">Witaj xyz</div>
          <div class="dataBox">
            <div class="firstName dataLabel">Imię: Grzegorz</div>
            <div class="secondName dataLabel">Nazwisko: Ociepka</div>
            <div class="city dataLabel">Miasto Krakow</div>
            <div class="street dataLabel">Ulica Wielicka 99</div>
          </div>
          <div class="logout" @click="logout">Logout</div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
  </section>
  
</template>

<script>
import firebase from "firebase";

export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    }
  }
}
</script>

