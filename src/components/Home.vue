<template>
  <div class="home">
    <Navs />

    <div class="container">
      <h1 class="title-dope title-text"> Welcome to WorkTeen </h1>
      <Search />
      <div class="row">

        <div class="row results-row">
          <h4 class="title-text"> Featured Opportunities </h4>
            <div  v-for="pos of positions" class="col s10 offset-s1">
              <div class="card">
                <!-- <div class="card-image">
                   <img src="https://static.pexels.com/photos/7075/people-office-group-team.jpg">

                </div> -->
                <div class="card-content">
                  <span class="card-title">{{pos.title}} at {{pos.organisation}}</span>
                  <p>Stipend: {{pos.stipend}}</p>
                  <p>Duration: {{pos.duration}}</p>
                  <p>Apply By: {{pos.apply_by}}</p>
                </div>
                <div class="card-action">
                  <a v-bind:href="pos.details_url" >Apply Now</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
</div>
</template>

<script>

//Imports important page elements
import Navs from './Navs'
import Search from './Search'
// import toastr from 'toastr'
//Imports db constant from src/components/firebase.js
import {db} from './firebase';

var mumbaiRef = db.ref('mumbai')
// var query = mumbaiRef.orderByKey()
//
//
// query.once("value")
//   .then(function(snapshot) {
//     snapshot.forEach(function(childSnapshot) {
//       // key will be "ada" the first time and "alan" the second time
//       // var key = childSnapshot.key;
//       // childData will be the actual contents of the child
//       var childData = childSnapshot.val();
//       // console.log(childData)
//       if(childData.skills === "Drawing"){
//         toastr.options = {
//           "closeButton": false,
//           "debug": false,
//           "newestOnTop": false,
//           "progressBar": false,
//           "positionClass": "toast-bottom-right",
//           "preventDuplicates": true,
//           "onclick": null,
//           "showDuration": "300",
//           "hideDuration": "1000",
//           "timeOut": "5000",
//           "extendedTimeOut": "1000",
//           "showEasing": "swing",
//           "hideEasing": "linear",
//           "showMethod": "fadeIn",
//           "hideMethod": "fadeOut"
//         }
//         toastr.success("New opportunity matching skill sets")
//       }
//   });
// });


export default {
  name: 'home',
  components :{
    Navs,
    Search
  },

  //defines empty thing really important
  data: () => ({
    positions: {}
  }),

  firebase: {
    positions: {
      source: db.ref('opportunities'),
      // Optional, allows you to handle any errors.
      cancelCallback(err) {
        console.error(err);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title-text{
  font-family: 'Alegreya Sans SC', sans-serif;
  color: white;
}
.title-dope{
  text-align: center;
  margin-top:19%;
  font-size: 4.5em;
  color: white;

}

.results-row{
  margin-top:25%;
}


.home{
  font-family: 'Lato', sans-serif;
}

h4{
  text-align: center;
  font-size:2.4em;
}

.card{
  background-image: url('https://static.pexels.com/photos/29642/pexels-photo-29642.jpg');
  margin-top:0px;
  background-color: rgba(0,0,0,0.5);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  max-height: 450px;
  color: white;
  text-align: left;

}
.card-action{
  background-color: transparent;
}

</style>
