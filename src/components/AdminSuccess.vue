<template>
  <div class="success">
    <Navs />
    <div class="container">
      <div class="login-group">
      <div class="row">
      <!-- <div class="col s3 btnCol" > <button v-on:click="clicked" class="waves-effect waves-light btn" id="btnLogin">LogIn</button> </div> -->
      <h2 class="title-text">You better be an Admin. </h2>
      <div class="col s12 btnCol" ><button v-on:click="signOut" class="waves-effect waves-light btn" id="btnSignOut">LogOut</button> </div>
      <AddForm />
  </div>
  </div>
  </div>
</div>
</template>

<script>
import Navs from './Navs'
import AddForm from './AddForm'
import {db} from './firebase'
import {auth} from './firebase'



export default {
  name: 'success',
  components :{
    Navs, AddForm
  },

  methods: {
    signOut: function (event) {
      auth.signOut()
      location.reload()
    }
  }
}

auth.onAuthStateChanged(firebaseUser =>{
  if(firebaseUser){
    adminLink.classList.add('hide')
  } else {
    // console.log('Not logged in')
  }
})
</script>

<style scoped>
.input-field{
  width:65%;
}
input, textarea{
  font-size: 1.4em;
  text-align: center;
}
.adding-block{
  margin-top:15%;
}
.title-text{
  font-family: 'Alegreya Sans SC', sans-serif;
  font-size: 4em;
}
.heading-text{
  font-family: 'Alegreya Sans SC', sans-serif;
  font-size: 3em;
}

.btnCol{
  text-align: center;
}
.login-group{
  margin-top:10%;
  text-align: center;
  width:100%;
}

</style>
