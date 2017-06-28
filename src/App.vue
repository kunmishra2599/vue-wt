<template>
  <div class="all">
  <div id="app">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

.intro{
  /*background-color: #F0F8FF;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;*/
  padding:18%;
  padding-top:12%;
  color: black;
}
.header{
  text-align: center;
}
body{
  background-color: transparent;
}
</style>
