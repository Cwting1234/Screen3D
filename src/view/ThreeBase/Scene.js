import * as THREE from 'three'
//创建三维场景
const scene=new THREE.Scene();
//平行光
const directionLight=new THREE.DirectionalLight(0xFFFFFF,0.9);
directionLight.position.set(150, 150, 0);
scene.add(directionLight);
//平行光
const directionLight2=new THREE.DirectionalLight(0xFFFFFF,0.9);
directionLight2.position.set(0, 150, 150);
scene.add(directionLight2);
// const light = new THREE.HemisphereLight(0xbbbbff, 0xFFFFFF, 1.5)
// light.position.set(0, 50, 0)
// scene.add(light);
// const light2 = new THREE.HemisphereLight(0xbbbbff, 0xFFFFFF, 1.5)
// light.position.set(5, 45, 51)
// scene.add(light2);


//环境光
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); // 光颜色和强度
scene.add(ambientLight); // 将环境光添加到场景中
const texture = new THREE.TextureLoader().load("/lib/images/全景图4096.jpg");
const geometry = new THREE.SphereGeometry(800, 50, 50);
// const geometry = new THREE.CylinderGeometry( 200, 200, 200, 32 );
const material = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.BackSide, //默认前面可见，设置为背面可见即可
});
const mesh = new THREE.Mesh(geometry, material);
// mesh.rotateY(Math.PI);
scene.add(mesh);

//设置纹理贴图编码方式和WebGL渲染器或composer后期伽马修正一致
material.map.encoding = THREE.sRGBEncoding;


//scene.fog = new THREE.Fog(0x73a5c8,0.2); //根据天空盒天空的颜色雾化
// 加载环境贴图
const textureCube = new THREE.CubeTextureLoader()
    .setPath('/lib/images/环境贴图/环境贴图1/')
    .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);

textureCube.encoding = THREE.sRGBEncoding; //改变默认编码方式
// console.log('textureCube.encoding',textureCube.encoding);
scene.environment =textureCube;


export{
    scene
}


