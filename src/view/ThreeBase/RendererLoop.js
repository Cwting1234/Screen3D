import { scene } from "./Scene";
import { renderer,camera } from "./Renderer";

function render(){   
    renderer.render(scene,camera);
   
    requestAnimationFrame(render);
    // console.log(camera.position);
}
render();