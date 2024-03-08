<template>
  <header>智慧工厂</header>
</template>
   
<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
let scene;
export default {
  name: "ckPage",
  components: {},
  data() {
    return {};
  },
  created() {},
  methods: {
    initThree() {
     
      let width = window.innerWidth; //窗口宽
      let height = window.innerHeight;
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.renderer.setSize(width, height);

      scene = new THREE.Scene();

      this.camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
      this.camera.position.set(0, 0, 400);
      this.camera.lookAt(scene.position);
      let light = new THREE.HemisphereLight(0xbbbbff, 0x444422, 1.5);
      light.position.set(0, 50, 0);
      scene.add(light);
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.controls.enableDamping = true;
      //是否可以缩放
      this.controls.enableZoom = true;
      //是否自动旋转
      this.controls.autoRotate = true;
      //设置相机距离原点的最远距离
      this.controls.minDistance = 100;
      //设置相机距离原点的最远距离
      this.controls.maxDistance = 1600;
      //是否开启右键拖拽
      this.controls.enablePan = false;
      // this.controls.maxDistance=1700;
      this.controls.maxPolarAngle = Math.PI * 0.48;
      document.body.appendChild(this.renderer.domElement);

      let objLoader = new GLTFLoader();
      objLoader.load("/lib/model/yuanqu.glb", function (glb) {
        // glb.scene.position.set(-1000, -600,-1200);
        glb.scene.scale.set(9, 8, 10);
        glb.scene.rotateY(-80); //绕y轴旋转π/4
        scene.add(glb.scene);
      });

      //orbitControls.maxDistance = 1700;
      // orbitControls.maxPolarAngle = Math.PI * 0.48;
      // orbitControls.update();

      document.body.appendChild(this.renderer.domElement);
    },

    animate() {
      //this.controls.update();
      this.renderer.clear();
      requestAnimationFrame(this.animate);
      // orbitControls.update();

      this.renderer.render(scene, this.camera);
    },
  },
  mounted() {
    this.initThree();
    this.animate();
  },
  onUnmounted() {},
};
</script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background: url(../../assets/images/px.jpg) no-repeat;
}
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

header {
  background: url(../../assets/images/tb1.png) no-repeat center center;
  background-size: cover;
  text-align: center;
  color: white;
  font-size: 2rem;
  line-height: 3.5rem;
}
</style>
   