<template>
    <md-toolbar class="md-transparent">
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>
      <!-- <h2 class="md-title" style="flex: 1">Vue Material</h2> -->
      <md-button class=""><router-link to="/"><p>Home</p></router-link></md-button>
    </md-toolbar>
</template>




<style scoped>

nav{
  background-color: transparent;
  color: white;
  border: 0px solid white;

}
.md-button, p{
  color: white;
  font-size: 1.1em;
}
body{
  font-family: 'Lato', Helvetica, Arial, sans-serif;
}
p:hover{
  color: white;
  text-decoration: none;
}
a:hover{
  text-decoration: none;
}
</style>
