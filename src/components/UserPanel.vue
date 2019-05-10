<template>
  <section class="userPanel">
    <UserModal/>
    <div class="wrapper">
      <div class="wrapper first">
        <div class="leftSide">
          <div class="borderOfPhoto">
            <div class="photo" style="background-image:url(https://i.imgur.com/TeeyJZI.jpg)"></div>
          </div>
        </div>
        <div class="rightSide">
          <div class="title">Witaj {{this.userData[1]}}</div>
          <div class="dataBox">
            <div
              class="firstName dataLabel" @click='$modal.show("userModal")'>Imię: {{userData[1]}}</div>
            <div class="secondName dataLabel" @click='$modal.show("userModal")'>Nazwisko: {{userData[2]}}</div>
            <div class="city dataLabel" @click='$modal.show("userModal")'>Miasto: {{userData[0]}}</div>
            <div
              class="street dataLabel" @click='$modal.show("userModal")'>Ulica: {{userData[3]}}</div>
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
import UserModal from "./UserModal.vue";

export default {
  components: { UserModal },
  data() {
    return {
      canBeShown: false,
      userData: []
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/");
        });
    },
    getUserData() {
      var uid = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref("users/" + uid).child("data");
      ref.once("value", snap => {
          this.userData = [];
          let data = snap.val();

          let dataWithKeys = Object.keys(data).map(key => {
            var obj = data[key];
            this.userData.push(obj);
          });
        });
    }
  },
  beforeMount() {
    this.getUserData();
  }
};
</script>

<style lang="scss">
.userPanel {
    padding: 30px 0;
    background-color: #00d1b2;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);

    .leftSide {
        float: left;
        width: 10%;

        .borderOfPhoto {
            border-radius: 25px;
            display: inline-block;
            width: 100%;
            margin: 0 auto;

            .photo {
                margin: 0 auto;
                width: 150px;
                height: 150px;
                background-repeat: no-repeat;
                background-position: 50%;
                background-size: contain;
                box-shadow: 0px 0px 5px 5px #006859;

            }
        }
    }

    .rightSide {
        display: inline-block;
        //float: left;
        width: 80%;
        padding-left: 3%;
        .logout{
          background-color:white;
          padding:0.5rem 1rem;
          display:inline-block;
          margin-top:10px;
          box-shadow:0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
        }
        .title {
            font-size: 2.2em;
            line-height: 1.8em;
            color: white;
        }

        .dataBox {
            color: white;

            .dataLabel {
                transition: 0.2s;
                font-size: 0.9em;
                cursor: pointer;

                &:hover {
                    color: #363636;
                }
            }
        }
    }
}
</style>
