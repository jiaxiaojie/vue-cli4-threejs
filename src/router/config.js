import Hello from '../pages/index' // 引入组件
import mesh from '../pages/loadMesh'
import multiple from '../pages/multiple'
import componentsA from '../pages/componentsA'
import componentsB from '../pages/componentsB'
import test from '../pages/test'
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
  },
  {
    path: '/multiple',
    name: '多摄像机',
    component: multiple
  },
  {
    path: '/componentsA',
    name: '组件A',
    component: componentsA
  },
  {
    path: '/componentsB',
    name: '组件B',
    component: componentsB
  },
  {
    path: '/test',
    name: 'test',
    component: test
  }
]
