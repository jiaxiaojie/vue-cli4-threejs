<template>
  <div>
    <div id="container"></div>
  </div>
</template>

<script>
  import clock from '../utils/clock'
  import * as Three from 'three'
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
      }
    },
    created () {
      this.canvas = clock.clock()
      // eslint-disable-next-line no-console
      console.log(clock.clock())
      // eslint-disable-next-line no-console

      this.$nextTick(() => {
        this.threeStart()
      })
    },
    methods: {
      initThree () {
        let container = document.getElementById('container');
        this.width = document.getElementById('container').clientWidth;
        this.height = document.getElementById('container').clientHeight;
        this.renderer = new Three.WebGLRenderer();
        this.renderer.setSize(this.width, this.height);
        container.appendChild(this.renderer.domElement);
      },
      initCamera () {
        this.camera = new Three.PerspectiveCamera(70, this.width / this.height, 1, 10000);
        this.camera.position.z = 400
      },
      initScene() {
        this.scene = new Three.Scene();
      },
      initObject() {
        let geometry = new Three.CubeGeometry(150, 150, 150);
        this.texture = new Three.Texture(this.canvas);
        var material = new Three.MeshBasicMaterial({map:this.texture});
        this.texture.needsUpdate = true;
        this.mesh = new Three.Mesh( geometry,material );
        this.scene.add( this.mesh );

        window.addEventListener( 'resize', this.onWindowResize, false );
      },
      onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize( window.innerWidth, window.innerHeight );
      },
      animation () {
        // this.renderer.clear();
        this.texture.needsUpdate = true;
        this.mesh.rotation.y -= 0.01;
        this.mesh.rotation.x -= 0.01;
        window.requestAnimationFrame(this.animation);
        this.renderer.render(this.scene, this.camera);
      },
      threeStart () {
        this.initThree();
        this.initCamera();
        this.initScene();
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