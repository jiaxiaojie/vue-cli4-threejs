import * as Three from 'three'
import Stats from '../dmeohtml/js/Stats'
const initThree = (container, renderer, width, height) => {
  const obj = {
    container: container,
    renderer: renderer,
    width: width,
    height: height
  }
  obj.container = document.getElementById(container)
  obj.width = document.getElementById(container).clientWidth
  obj.height = document.getElementById(container).clientHeight
  obj.renderer = new Three.WebGLRenderer()
  obj.renderer.setSize(obj.width, obj.height)
  obj.container.appendChild(obj.renderer.domElement)
  obj.renderer.setClearColor(0xFFFFFF, 1.0)

  const stats = new Stats()
  stats.domElement.style.position = 'absolute'
  stats.domElement.style.left = '0px'
  stats.domElement.style.top = '0px'
  document.getElementById(container).appendChild(stats.domElement)

  return obj
}
const initScene = () => {
  return new Three.Scene()
}

const onWindowResize = (camera, renderer) => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
export default {
  initThree: initThree,
  initScene: initScene,
  onWindowResize: onWindowResize
}
