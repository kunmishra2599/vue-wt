// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './components/firebase'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import {auth} from './components/firebase'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  created() {
    // configured routes for login
    auth.onAuthStateChanged((user) => {
      if(user) {
        this.$router.push('/success')

      } else {
        this.$router.push('/')
      }
     });
    },
  template: '<App/>',
  components: { App }
})
