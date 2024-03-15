import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
export const gltfLoader = path =>{
    return new Promise((resolve, reject) => {
        const gltfLoader = new GLTFLoader()
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath("/lib/draco/");
        dracoLoader.preload()
        gltfLoader.setDRACOLoader(dracoLoader)
    
        gltfLoader.load(path, gltf => {
          resolve(gltf)
          dracoLoader.dispose()
          gltf.scene.traverse(model => {
            if (model.isMesh) {
              model.geometry.dispose()
              model.material.dispose()
            }
          })
        })
      })


}