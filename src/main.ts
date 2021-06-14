import { PerspectiveCamera, Scene, WebGLRenderer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import './style.css';

import { mesh } from './basics/01_plane';

const app = document.querySelector('#app');

const scene = new Scene();
const camera = new PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 10000);
const renderer = new WebGLRenderer({ antialias: true });
const controls = new OrbitControls(camera, renderer.domElement);

camera.position.set(0, 0, 5);
camera.lookAt(mesh.position);

renderer.setSize(innerWidth, innerHeight);
app?.appendChild(renderer.domElement);

scene.add(mesh);

function animate() {
  controls.update();
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
