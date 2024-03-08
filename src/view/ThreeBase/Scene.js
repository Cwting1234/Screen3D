import * as THREE from 'three'
//创建三维场景
const scene=new THREE.Scene();
//平行光
// const directionLight=new THREE.DirectionalLight(0xFFFFFF,0.9);
// directionLight.position.set(0, 50, 0);
const light = new THREE.HemisphereLight(0xbbbbff, 0x444422, 1.5)
light.position.set(0, 50, 0)
scene.add(light);

//环境光
const ambient=new THREE.AmbientLight(0xFFFFFF,1);
scene.add(ambient);
export{
    scene
}


