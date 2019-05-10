<template>
  <modal
    name="userModal"
    transition="nice-modal-fade"
    :min-width="200"
    :min-height="350"
    :height="400"
    :delay="100"
  >
    <div class="modal-content">
      <form id="task" @submit.prevent>
             <span class="formText">Imię:</span>
        <input type="text" v-model="firstName" required> 
             <span class="formText">Nazwisko</span>
        <input type="text" v-model="secondName" required>
             <span class="formText">Miasto:</span>
        <input type="text" v-model="city" required>
             <span class="formText">Ulica:</span>
        <input type="text" v-model="street" required>
        <button type="submit" @click="updateUser()" class="btn">Update</button>
      </form>
    </div>
  </modal>
</template>

<script>
import firebase from "firebase";

export default {
  name: "ModalUser",
  data() {
    return {
      firstName: "",
      secondName: "",
      city: "",
      street: ""
    };
  },
  methods: {
    updateUser() {
      var uid = firebase.auth().currentUser.uid;
      var updates = {};
      var userData = {
        firstName: this.firstName,
        secondName: this.secondName,
        city: this.city,
        street: this.street
      };
      return firebase
        .database()
        .ref("users/" + uid + "/data")
        .update(userData);
    }
  }
};
</script>

<style lang="scss">
.v--modal-box .v--modal{
    background-color:red!important;
}
.modal-content {
  margin: 0 auto;
  text-align: center;
  padding:50px;
  .formText{
    padding:15px 0;

  }
  input {
    margin-bottom:10px;
    display: block;
    background: none;
    padding: 0.125rem 0.125rem 0.0625rem;
    font-size: 1rem;
    border-width: 1px;
    border-color: #00d1b2;
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
    text-align:center;
    &:placeholder {
      padding-left: 0.125rem;
      z-index: 1;
      color: #b3b3b3;
      font-size: 1rem;
      font-weight: 400;
      transition: 0.2s;
      text-align:center;
    }
  }
  select{
      width:100%;
      margin-bottom:15px;
      padding:0.5rem;
      background-color:transparent;
      box-shadow: 0 4px 9.6px 0.4px rgba(74, 227, 135, 0.5);
      outline:none;
      border-color:rgba(74, 227, 135, 0.5);
      text-align:center;
      option{
          outline:none;
          text-align:center;
      }
  }
  button {
      
      width:100%;
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
   
    outline: none;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      box-shadow: 0 -4px 10px 0.4px rgba(74, 227, 135, 0.5);
    }
  }
}
</style>


