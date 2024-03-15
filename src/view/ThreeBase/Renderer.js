import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const width=window.innerWidth;
const height=window.innerHeight;

//透视投影 视椎体角度 视椎体宽高比 近端面 远端面
const camera=new THREE.PerspectiveCamera(40,width/height,1,3000);

//创建渲染器
const renderer=new THREE.WebGLRenderer({
    antialias:true,//开启抗锯齿
    alpha: true,
});
//设置像素比率,防止画布模糊
renderer.setPixelRatio(window.devicePixelRatio);
//设置像素尺寸
renderer.setSize(width,height);
//设置渲染器的背景颜色深蓝色，透明度
//renderer.setClearColor(0x532D01,0.6);
const controls=new OrbitControls(camera,renderer.domElement);

//controls.minAzimuthAngle = -Math.PI/4; // 最小角度为 -180 度，即不允许翻转到底部
//controls.maxAzimuthAngle = Math.PI/2; // 最大角度为 180 度，完整的水平旋转范围
controls.maxPolarAngle = Math.PI * 0.48;
export{
    renderer,camera
}
