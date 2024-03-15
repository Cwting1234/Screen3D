<template>
  <div id="webgl" class="webgl-content"></div>
</template>

<script>
import * as THREE from "three";
import { scene } from "../../ThreeBase/Scene";
import { renderer, camera } from "../../ThreeBase/Renderer";
import "../../ThreeBase/RendererLoop";
import { gltfLoader } from "../../../util/load";

export default {
  name: "webglContent",
  data() {
    return {
      group: null,
    };
  },
  created() {},
  watch() {},
  methods: {
    initThree() {
     
      document.getElementById("webgl").appendChild(renderer.domElement);
      camera.position.set(4, 28, 59);
      camera.lookAt(0, 0, 0);

      renderer.outputEncoding = THREE.sRGBEncoding;
      
      const group = new THREE.Group();     
      gltfLoader("/lib/model/yuanqudra.glb").then((gltf) =>{
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
</style>