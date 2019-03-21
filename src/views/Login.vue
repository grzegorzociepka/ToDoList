<template>
  <div class="login">
    <h3>Sign In</h3>
    <form>
      <form-group>
        <input-group>
          <input type="text" id="email" required="required">
          <label for="email" class="control-label">Email</label>
          <i class="bar"></i>
        </input-group>
      </form-group>
      <form-group>
        <input-group>
          <input type="password" id="password" required="required">
          <label for="password" class="control-label">Password</label>
          <i class="bar"></i>
        </input-group>
      </form-group>
      <div class="buttonsBox">
        <button type="submit" class="btn">Login</button>
        <a href="#/signup" class="singup">Create account</a>
        <div class="clear"></div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.login {
  width: 550px;
  margin: 15% auto;
}
h3 {
  text-align: center;
}
.buttonsBox {
  padding: 0 1.5rem;
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
    transition:0.2s;
    cursor:pointer;
    &:hover{
        box-shadow: 0 10px 10px 0.4px rgba(74, 227, 135, 0.5);
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
form-group {
  position: relative;
  display: flex;
  min-height: 2.25rem;
  margin-top: 0.2rem;
  margin: 2.25rem;
  input-group {
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
