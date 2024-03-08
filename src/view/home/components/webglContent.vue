<template>    
<div></div>
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
    created() {},
    watch() {},
    methods: {
      initThree() {
        const container = document.createElement("div");
        container.appendChild(renderer.domElement);
        document.body.appendChild(container);
  
        renderer.outputEncoding = THREE.sRGBEncoding;
  
        const objLoader = new GLTFLoader();
        const group = new THREE.Group();
  
        objLoader.load("/lib/model/gc.glb", function (gltf) {
          group.add(gltf.scene);
          gltf.scene.scale.set(9, 8, 10);
          gltf.scene.rotateY(-80);
        });
  
        scene.add(group);
        console.log(camera.position);
      },
    },
    mounted() {
      this.initThree();
    },
  };
  </script>
  
  <style>
 
  

  </style>
  