import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
// 首先声明一个需要全局维护的状态state
const state = {
  resturantName: 'FLora home'
}
const store = new Vuex.Store({
  state, // 共同维护的一个状态
  getters, // 获取数据并渲染
  actions, // 数据的异步操作
  mutations // 处理数据的唯一途径,state的改变或赋值只能在这里
})
export default store // 导出store并在main.js中引用注册
