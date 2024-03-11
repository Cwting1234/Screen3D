<template>
  <div id="webgl" class="webgl-content"></div>
</template>

<script>
import * as THREE from "three";
import { scene } from "../../ThreeBase/Scene";
import { renderer, camera } from "../../ThreeBase/Renderer";
import "../../ThreeBase/RendererLoop";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";

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
 
  },
  mounted() {
    this.initThree();
  },
};
</script>

<style lang="scss">
#webgl {
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 99;
}
</style>