<template>
  <nav>
    <div class="nav-wrapper">
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul class="left hide-on-med-and-down">
        <li><router-link to="/">Home</router-link></li>
      </ul>
      <ul class="right hide-on-med-and-down">
        <li  id="adminLink"><router-link to="admin">Admin Login</router-link></li>
      </ul>
      <ul class="side-nav" id="mobile-demo">
        <li><router-link to="admin">Admin</router-link></li>
      </ul>
    </div>
  </nav>
</template>




<style>

nav{
  background-color: transparent;
  color: white;
  border: 0px solid white;

}
nav ul a{
  color: white;
  font-size: 1.1em;
}
body{
  font-family: 'Lato', Helvetica, Arial, sans-serif;
}

</style>
