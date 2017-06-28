<template>
  <div class="admin">
    <Navs />
    <div class="container">
      <div class="login-group center-align">
      <div class="row">
        <div class="col s12">
          <h4 class="title-text">Admin Login</h4>
        </div>
        <div class="input-field col s12">
          <input id="adminemail" type="email" placeholder="Email">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="adminpassword" type="password" placeholder="Password" class="validate">
        </div>

      <div class="col s12 btnCol center-align" > <button v-on:click="clicked" class="waves-effect waves-light btn" id="btnLogin">LogIn</button> </div>

      <!-- Class not needed <div class="col s3 btnCol" > <button v-on:click="signOut" class="waves-effect waves-light btn hide" id="btnSignOut">LogOut</button> </div> -->
</div>
    </div>
  </div>
</div>
</template>

<script>
import Navs from './Navs'
import {db} from './firebase'
import {auth} from './firebase'

export default {
  name: 'admin',
  components :{
    Navs
  },
  methods: {
    clicked: function (event) {

      const adminEmail = document.getElementById('adminemail')
      const adminPass = document.getElementById('adminpassword')
      const btnlogin = document.getElementById('btnLogin')

      const email = adminEmail.value
      const pass = adminPass.value


      const promise = auth.signInWithEmailAndPassword(email,pass)
      promise.catch(e => console.log(e.message))
    },
    signOut: function (event) {
      auth.signOut()
      location.reload();
    }

  }
}

auth.onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    console.log(firebaseUser)
    // btnSignOut.classList.remove('hide')

    // this.$router.go('/');
  } else {
    console.log('Not logged in')
  }
})

</script>

<style scoped>
.input-panel{
  text-align: center;
  color: white;
}
input{
  color: white;
}
.title-text{
  font-family: 'Alegreya Sans SC', sans-serif;
  font-size: 4em;
  color: white;
}
.btnCol{
  text-align: center;
}

.login-group{
  margin:20%;
  margin-top:10%;
  margin-left:30%;
  text-align: center;
  width:40%;
}

input{
  font-size: 1.4em;
  text-align: center;
}

</style>
