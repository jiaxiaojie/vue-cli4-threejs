import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  apolloProvider: createProvider(),

  components: {
    App
  }
})
