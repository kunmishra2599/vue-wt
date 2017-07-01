<template>
  <div class="row">
      <div class="col-md-offset-1 col-md-10 col-xs-10 col-xs-offset-1">
           <!-- <input placeholder="Search for stuff here. Literally anything. We use Elastic now."  type="text" class="validate"> -->
           <md-input-container>
            <md-input id="search" placeholder="Search for stuff here. Literally anything. We use Elastic now."></md-input>
          </md-input-container>
      </div>
      <div class="col-md-12 col-xs-12"><md-button>SEARCH</md-button></div>
</div>

</template>
<script>

</script>

<style scoped>
.md-input-focused:active{
  border-bottom: none;
}
#search{
  text-align: center;
  color: black;
  font-size: 20px;
  border: 1px solid white;
  background-color: white;
  border-radius: 3px;
  height:50px;
}
.col-md-12,.col-xs-12{
  text-align: center;
}
.md-button, .md-input{
  text-align: center;
  color: white;
}
.md-button{
  width:30%;
  background-color: transparent;
  border: 1px transparent solid;
  color: white;
  font-size: 1.2em;
}
/* label focus color */

/* label underline focus color */
.s12{
  text-align: center;
}
.search-btn{
text-align: center;
}
::-webkit-input-placeholder { /* WebKit browsers */
    color: grey;
    opacity: 1 !important;
    font-size: 2em;
}
.search-btn:hover{
  background-color: rgba(0,0,0,0.2);
  color:white;
}



</style>
