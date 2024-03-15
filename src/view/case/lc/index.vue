<template>
  <div class="home-bg">
    <div class="header-container">
      <div class="header-log">
        <div @click="gotoUrl()" class="logo-title">智慧粮仓大屏</div>
      </div>
    </div>
    <div id="webgl" class="webgl-content"></div>
  </div>
</template>
  
  <script>
import * as THREE from "three";
import { scene } from "../../ThreeBase/Scene";
import { renderer, camera } from "../../ThreeBase/Renderer";
import "../../ThreeBase/RendererLoop";
import { gltfLoader } from "../../../util/load";

export default {
  name: "lcContent",
  data() {
    return {
      group: null,
    };
  },
  created() {},
  watch() {},
  methods: {
    gotoUrl() {
      this.$router.push({ name: "case" });
    },
    initThree() {
      const container = document.createElement("div");
      container.appendChild(renderer.domElement);
      document.getElementById("webgl").appendChild(container);
      camera.position.set(4, 28, 59);
      camera.lookAt(0, 0, 0);

      renderer.outputEncoding = THREE.sRGBEncoding;

      const group = new THREE.Group();     
      gltfLoader("/lib/model/gcra.glb").then((gltf) =>{
        group.add(gltf.scene);
        
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
</style>