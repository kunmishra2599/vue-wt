<template>
  <div class="row">
  <div class="search-panel">
      <div class="col s12">
           <input placeholder="Search for stuff here. Literally anything. We use Elastic now." id="search" type="text" class="validate">
      </div>
      <div class="col s12"> <a class="waves-effect waves-light btn search-btn z-depth-1">Search</a> </div>
    </div>
</div>

</template>


<style scoped>

#search{
  text-align: center;
  color: black;
  font-size: 20px;
  border: 1px solid white;
  background-color: white;
  border-radius: 5px;
}
input{
  box-shadow: 0px 10px 10px rgba(0,0,0,0.5);
}
.search-panel{
  text-align: center;
  color: white;
}
/* label focus color */
  .input-field input[type=text]:focus + label {
    color: white;
}
/* label underline focus color */
  .input-field input[type=text]:focus {
    border-bottom: 1px solid white;
    box-shadow: 0 1px 0 0 white;
  }
.search-btn{
  width:30%;
  background-color: transparent;
  border: 1px transparent solid;
  color: white;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color: grey;
    opacity: 1 !important;
}
.search-btn:hover{
  background-color: rgba(0,0,0,0.2);
  color:white;
}

#search:active{
  border-bottom: 1px solid white;
}

</style>
