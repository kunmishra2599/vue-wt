<template>
  <div class="row">
  <div class="search-panel">
      <div class="col s12">
           <input placeholder="Search for stuff here. Literally anything. We use Elastic now." id="search" type="text" class="validate">
      </div>
      <div class="col s12"> <a class="waves-effect waves-light btn search-btn">Search</a> </div>
    </div>
</div>

</template>


<style scoped>

#search{
  text-align: center;
  color: black;
  font-size: 20px;
  border-bottom: 1px solid black;
}
.search-panel{
  text-align: center;
  color: black;
}

.search-btn{
  width:30%;
  background-color: transparent;
  border: 1px black solid;
  color: black;
}

.search-btn:hover{
  background-color: rgba(0,0,0,0.5);
  color:white;
}

#search:active{
  border-bottom: 1px solid black;
}

</style>
