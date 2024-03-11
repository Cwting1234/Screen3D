<template>
  <div id="webgl" class="webgl-content"></div>
</template>

<script>
import * as THREE from "three";
import { scene } from "../../ThreeBase/Scene";
import { renderer, camera } from "../../ThreeBase/Renderer";
import "../../ThreeBase/RendererLoop";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


export default {
  name: "webglContent",
  data() {
    return {};
  },
  created() { },
  watch() { },
  methods: {
    initThree() {
      const container = document.createElement("div");
      container.appendChild(renderer.domElement);
      document.getElementById('webgl').appendChild(container);
      camera.position.set(4, 28, 59);
      camera.lookAt(0, 0, 0);
   

      renderer.outputEncoding = THREE.sRGBEncoding;

      const objLoader = new GLTFLoader();
      const group = new THREE.Group();

      objLoader.load("/lib/model/yuanqu.glb", function (gltf) {
        group.add(gltf.scene);
        //gltf.scene.scale.set(9, 8, 10);
        gltf.scene.rotateY(-80);
      });

      scene.add(group);     
    },
 
    clearCache() {
     // cancelAnimationFrame(this.rafId);
      // 优化清除
      this.renderer.dispose();
      //this.renderer.forceContextLoss();
      this.renderer = null;
      this.scene.remove(group);
      this.scene.children.forEach((item) => {
        item.traverse((child) => {
          if (child.isMesh) {
            child.geometry.dispose();
            child.material.dispose();
          }
        });
        this.scene.remove(item);
      });
      this.scene.children = [];
      this.scene.dispose();
      THREE.Cache.clear();
      // this.scene = null;
      // this.camera = null;
      // this.css3DRenderer = null;
      // this.orbitControls.dispose();
      this.orbitControls = null;
    },
  },
  mounted() {
    this.initThree();

  },
  beforeDestroy() {   
    this.clearCache();
  },
};
</script>

<style lang="scss">

</style>