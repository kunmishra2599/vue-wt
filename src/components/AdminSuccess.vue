<template>
  <div class="success">
    <Navs />
    <div class="container">
      <div class="login-group">
      <div class="row">
      <!-- <div class="col s3 btnCol" > <button v-on:click="clicked" class="waves-effect waves-light btn" id="btnLogin">LogIn</button> </div> -->
      <h2>You're logged in </h2>
      <div class="col s12 btnCol" ><button v-on:click="signOut" class="waves-effect waves-light btn" id="btnSignOut">LogOut</button> </div>
</div>
    </div>
  </div>
</div>
</template>

<script>
import Navs from './Navs'
import {db} from './firebase'
import {auth} from './firebase'
// import Router from 'vue-router'
//
// if (btnlogin){
//   btnlogin.addEventListener('click', e =>{
//     const email = adminEmail.value
//     const pass = adminPass.value
//     const auth = db.auth()
//
//     const promise = auth.signInWithEmailAndPassword(email,pass)
//     promise.catch(e => console.log(e.message
//   })
// }
export default {
  name: 'success',
  components :{
    Navs
  },
  methods: {

    signOut: function (event) {
      auth.signOut()
      location.reload()
    }
  }
}

// auth.onAuthStateChanged(firebaseUser =>{
//   if(firebaseUser){
//     btnSignOut.classList.remove('hide')
//   } else {
//     // console.log('Not logged in')
//   }
// })
</script>

<style scoped>

.btnCol{
  text-align: center;
}
.login-group{
  margin:20%;
  margin-top:10%;
  margin-left:25%;
  text-align: center;
  width:50%;
}

</style>
