<template>
  <div class="formcomponent">
  <form class="adding-block" id="form" v-on:submit.prevent="addOpp">
        <h4 class="heading-text"> Add Listing </h4>
        <div class="col s12 ">
          <input id="companyName" v-model="newOpp.companyName" placeholder="Company Name" class="validate input-field">
        </div>
        <div class="col s12 input-field">
          <input id="role" v-model="newOpp.role" placeholder="Role" class="validate input-field">
        </div>
        <div class="col s12 input-field">
          <input id="duration" v-model="newOpp.duration" placeholder="Duration" class="validate input-field">
        </div>
        <div class="col s12 input-field">
          <input id="stipend" v-model="newOpp.stipend" placeholder="Stipend" class="validate input-field">
        </div>
        <div class="col s12 input-field">
          <textarea id="description" v-model="newOpp.description" placeholder="Description" class="validate input-field"></textarea>
        </div>
        <div class="col s12 input-field">
          <textarea id="skills" v-model="newOpp.skills" placeholder="Skills" class="validate input-field"></textarea>
        </div>
        <div class="col s12 btnCol" ><button class="waves-effect waves-light btn" id="btnAdd">Add</button> </div>
</form>
</div>
</template>
<script>
import {db} from './firebase'
import {auth} from './firebase'
import toastr from 'toastr'

let mumbaiRef = db.ref('mumbai')



export default {
  name: 'formcomponent',

  methods: {
    addOpp: function () {
        mumbaiRef.push(this.newOpp)
        this.newOpp.companyName= ''
        this.newOpp.role= ''
        this.newOpp.stipend= ''
        this.newOpp.description= ''
        this.newOpp.skills= ''
        this.newOpp.duration= ''
        console.log('Added New Opportunity')
        toastr.success("Opportunity Added")
    }
  },
  firebase: {
    mumbaiRef: {
      source: db.ref('mumbai')
      // Optional, allows you to handle any errors.
      // cancelCallback(err) {
      //   console.error(err);
      // }
    }
  },
  data () {
    return{
      newOpp: {
        companyName: '',
        role: '',
        duration: '',
        stipend: '',
        description: '',
        skills: ''
      }
    }
  }
}


</script>

<style scoped>

<style scoped>
.input-field{
  width:50%;
}
.heading-text{
  font-family: 'Alegreya Sans SC', sans-serif;
  font-size: 3em;
  color: white;
}
input, textarea{
  font-size: 1.4em;
  text-align: center;
  width:65%;
  border-top:none;
  border-left:none;
  border-right:none;
}
textarea{
  border-top:none;
  border-left:none;
  border-right:none;
  min-height:150px;
}
.adding-block{
  margin-top:15%;
}
.title-text{
  font-family: 'Alegreya Sans SC', sans-serif;
  font-size: 4em;
  color: white;
}
</style>
