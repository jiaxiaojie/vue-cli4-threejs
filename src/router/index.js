import Vue from 'vue'
import Router from 'vue-router'
import routes from './config'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes
})

export default router
