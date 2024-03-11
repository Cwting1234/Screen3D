<template>
  <div class="home-bg">
    <div class="header-container">
      <div class="header-log">
        <div @click="gotoUrl()" class="logo-title">智慧仓库大屏</div>
      </div>
      <div id="webgl" class="webgl-content"></div>
    </div>
  </div>
 
</template>

<script>
let scene, camera, renderer;
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
export default {
  name: "ckPage",
  components: {},
  data() {
    return {};
  },
  created() { },
  methods: {
    gotoUrl() {
      this.$router.push({ name: "case" });
    },
    initThree() {
      // 创建场景
      scene = new THREE.Scene();

      // 创建相机
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(-3.25, 2.68, 22.81);
      camera.lookAt(0, 0, 0);

      // 创建渲染器
      renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('webgl').appendChild(renderer.domElement);

      // 添加光源
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);
      const controls = new OrbitControls(camera, renderer.domElement);

      //controls.minAzimuthAngle = -Math.PI/4; // 最小角度为 -180 度，即不允许翻转到底部
      //controls.maxAzimuthAngle = Math.PI/2; // 最大角度为 180 度，完整的水平旋转范围
      controls.maxPolarAngle = Math.PI * 0.48;

      // 使用GLTFLoader加载模型
      const loader = new GLTFLoader();
      loader.load('/lib/model/ckone.glb', (gltf) => {
        scene.add(gltf.scene);
      });

    },
    animate() {
      requestAnimationFrame(this.animate);
      renderer.render(scene, camera);
    }

  },
  mounted() {
    this.initThree();
    this.animate();

  },
  onUnmounted() { },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// body {
//   width: 100%;
//   height: 100%;
//   margin: 0;
//   padding: 0;
//   overflow: hidden;
//   background: url(../../assets/images/px.jpg) no-repeat;
// }

.home-bg1 {
  display: flex;
  flex-direction: column;

}
.header-container1 {
  position: relative;
  height: 7.13vh;
  background: url(../../assets/images/tbg.png) no-repeat center;
  background-size: auto 100%;
  z-index: 100;
 
}

#webgl1 {

  width: 100vw;
  height: 100vh;
  z-index: 99;
}
</style>