<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
  import * as Three from 'three'
  import clock from '../utils/clock'
  import init from '../utils/init'

  export default {
    name: 'ThreeTest',
    data() {
      return {
        renderer: null,
        cube: null,
        scene: null,
        camera: null,
        width: '',
        height: '',
        initObj:{}
      }
    },
    created () {
      this.canvas = clock.clock()
      this.$nextTick(() => {
        this.threeStart()
      })
    },
    methods: {
      initCamera () {
        this.camera = new Three.PerspectiveCamera(70, this.initObj.width / this.initObj.height, 1, 10000);
        this.camera.position.z = 400
      },
      initObject() {
        let geometry = new Three.CubeGeometry(150, 150, 150);
        this.texture = new Three.Texture(this.canvas);
        var material = new Three.MeshBasicMaterial({map:this.texture});
        this.texture.needsUpdate = true;
        this.mesh = new Three.Mesh( geometry,material );
        this.scene.add( this.mesh );
        window.addEventListener( 'resize', init.onWindowResize(this.camera,this.initObj.renderer), false );
      },
      animation () {
        // this.renderer.clear();
        this.texture.needsUpdate = true;
        this.mesh.rotation.y -= 0.01;
        this.mesh.rotation.x -= 0.01;
        window.requestAnimationFrame(this.animation);
        this.initObj.renderer.render(this.scene, this.camera);
      },
      threeStart () {
        this.initObj = init.initThree('container',this.renderer,this.width,this.height);
        this.initCamera();
        this.scene = init.initScene();
        this.initObject();
        this.animation();
      }
    }
  }
</script>

<style scoped>
  body { margin: 0; }
  #container{
    width: 100%;
    height: 600px;
    background-color: darkgrey;
  }
  canvas {
    width: 100%;
    height: 100%;
  }
</style>