import Hello from '../pages/index'  //引入组件
import mesh from '../pages/loadMesh'
export default [
  {
    path: '/',
    name: '系统首页',
    component: Hello
  },
  {
    path: '/mesh',
    name: '加载mesh模型',
    component: mesh
  }
]
