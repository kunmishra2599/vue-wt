<template>
  <div class="admin">
    <Navs />
    <div class="container">
      <div class="login-group">
      <div class="row">
        <div class="input-field col s12">
          <input id="email" type="email" placeholder="Email" class="validate">

        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" placeholder="Password" class="validate">
        </div>
      </div>
      <div class="col s12 btnCol" id="btnLogin"> <a class="waves-effect waves-light btn">LogIn</a> </div>
    </div>
  </div>
</div>
</template>

<script>
import Navs from './Navs'

export default {
  name: 'admin',
  components :{
    Navs
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.btnCol{
  text-align: left
}
.login-group{
  margin:20%;
  text-align: center;
  width:60%;
}

input{
  font-size: 1.4em;
}

</style>
