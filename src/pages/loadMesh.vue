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
        this.camera = new Three.PerspectiveCamera(45, this.initObj.width / this.initObj.height, 1, 10000);
        this.camera.position.x = 100
        this.camera.position.y = 300
        this.camera.position.z = 600
        this.camera.up.set(0,1,0);
        this.camera.lookAt(0,0,0);
      },
      initLight() {
        let light = new Three.AmbientLight(0xFF0000);
        light.position.set(100, 100, 200);
        this.scene.add(light);

      },
      initObject() {
        let geometry = new Three.BoxGeometry(100, 100, 100);
        for ( var i = 0; i < geometry.faces.length; i += 2 ) {

          var hex = Math.random() * 0xffffff;
          geometry.faces[ i ].color.setHex( hex );
          geometry.faces[ i + 1 ].color.setHex( hex );

        }
        var material = new Three.MeshBasicMaterial( { vertexColors: Three.FaceColors} );
        this.mesh = new Three.Mesh( geometry,material );
        // eslint-disable-next-line no-console
        console.log(this.mesh.position)
        this.scene.add( this.mesh );
      },
      initGrid(){
        var helper = new Three.GridHelper( 500, 50,0xff00ff, 0x80ff80 );
        this.scene.add( helper );
      },
      animation () {
        this.mesh.rotateX(0.01);
        window.requestAnimationFrame(this.animation);
        this.initObj.renderer.render(this.scene, this.camera);
      },
      threeStart () {
        this.initObj = init.initThree('container',this.renderer,this.width,this.height);
        this.initCamera();
        this.scene = init.initScene();
        this.initLight();
        this.initObject();
        this.initGrid();
        this.animation();
      }
    }
  }
</script>

<style scoped>
  body { margin: 0; }
  #container{
    border: none;
    cursor: pointer;
    width: 100%;
    height: 600px;
    background-color: #EEEEEE;
  }
  canvas {
    width: 100%;
    height: 100%;
  }
</style>