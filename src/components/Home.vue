<template>
  <div  v-cloak class="home">
    <Navs />

    <div v-cloak class="container">
      <h1 class="title-dope title-text"> Welcome to WorkTeen </h1>
      <Search />
      <div class="row">

        <div v-cloack class="row results-row">
          <div class="col-md-offset-2 col-md-8 col-xs-8 col-xs-offset-2">
          <h4 class="title-text"> Featured Opportunities </h4>
        </div>
            <div  v-for="pos of positions" class="col-md-offset-2 col-md-8 col-xs-8 col-xs-offset-2">
              <md-card flex md-with-hover md-elevation="15" style="background-image: url('https://static.pexels.com/photos/29642/pexels-photo-29642.jpg');">
                  <md-card-header>
                    <div class="md-title">Work with {{pos.Organisation}}</div>
                    <div class="md-subhead">
                      Commitment: {{pos.Commitment}}<br>
                      Work in {{pos.City}} <br>
                    <md-chip  v-for="cat of pos.Category">
                      {{cat}}
                    </md-chip>
                    </div>
                    <div>
                    </div>
                  </md-card-header>

                  <md-card-expand>

                    <md-card-actions>
                      <md-button v-bind:href="pos.Form">Apply</md-button>
                      <md-button md-expand-trigger>
                        More Info
                      </md-button>
                      <span style="flex: 1"></span>

                    </md-card-actions>

                    <md-card-content>
                      <p>{{pos.Description}}</p>
                    </md-card-content>
                  </md-card-expand>
            </md-card>
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
import Vue from 'vue'
// import toastr from 'toastr'
//Imports db constant from src/components/firebase.js
import {db} from './firebase'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
Vue.use(VueMaterial)

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
    positions: {},
    tags: ['Teaching','Drawing']
  }),

  firebase: {
    positions: {
      source: db.ref('featured'),
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
[v-cloak] {
  display: none;
}
.nine{
  text-align: center;
}
.title-text{
  font-family: 'Alegreya Sans SC', sans-serif;
  color: white;
  text-align: center;
  font-size:3em;
  font-weight: lighter;
}
.title-dope{
  text-align: center;
  margin-top:15%;
  font-size: 4.5em;
  color: white;

}

.results-row{
  margin-top:25%;
  text-align: center;
}


.home{
  font-family: 'Lato', sans-serif;
}

h4{
  text-align: center;
  font-size:3em;
}

.md-card{
  /*background-image: url('https://static.pexels.com/photos/29642/pexels-photo-29642.jpg');*/
  margin-top:0.5%;
  margin-bottom: 1%;
  background-color: black;
  /*background-position: center center;*/
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  text-align: left;
  min-height: 200px;

}
.md-card-actions{
  background-color: rgba(255, 0, 0, 0.4);
  margin-bottom: 0px;
  color: black;
  padding:3px;
  padding-bottom: 0px;
  text-align: left;
}
.md-card-content{
  background-color: white;
  color: black;
  font-size: 20px;
}
.md-card-expand p{
  font-size: 1em;
}
.md-theme-default.md-card .md-card-expand .md-card-actions {
    background-color: transparent;
    margin-top:0px;
    color: white;
}
.md-chip{
  color: white;
  background-color: transparent;
  margin-top:1%;
  text-transform: uppercase;
}
</style>
