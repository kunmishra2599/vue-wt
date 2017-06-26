<template>
  <div class="home">
    <Navs />

    <div class="container">
      <h1 class="title-dope title-text"> Welcome to WorkTeen </h1>
      <Search />
      <div class="row">

        <div class="row results-row">
          <h4 class="title-text"> Featured Opportunities </h4>
            <div  v-for="pos of positions" class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src="https://static.pexels.com/photos/7075/people-office-group-team.jpg">
                  <span class="card-title">{{pos.title}} at {{pos.organisation}}</span>
                </div>
                <div class="card-content">
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

//Imports db constant from src/components/firebase.js
import {db} from './firebase';


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
}
.title-dope{
  text-align: center;
  margin-top:19%;
  font-size: 4.5em;
  
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

</style>
