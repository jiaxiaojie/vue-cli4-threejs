import * as Three from 'three'
let initThree = (container,renderer,width,height) =>{
  let obj = {
    container:container,
    renderer:renderer,
    width:width,
    height:height
  }
  obj.container = document.getElementById(container);
  obj.width = document.getElementById(container).clientWidth;
  obj.height = document.getElementById(container).clientHeight;
  obj.renderer = new Three.WebGLRenderer();
  obj.renderer.setSize(obj.width, obj.height);
  obj.container.appendChild(obj.renderer.domElement);
  // eslint-disable-next-line no-console
  console.log(obj)
  return obj
}
let initScene = () =>{
  return new Three.Scene();
}

let onWindowResize = (camera,renderer) =>{
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}
export default{
  initThree:initThree,
  initScene:initScene,
  onWindowResize:onWindowResize,
}
