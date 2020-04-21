import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'
import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  apolloProvider: createProvider(),
  store, // 这样就能全局使用vuex了
  components: {
    App
  }
})
