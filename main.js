import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { RubiksCube } from './RubiksCube'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

const cube = new RubiksCube();
scene.add( cube );

// Helpers
const gridHelper = new THREE.GridHelper(200, 50);
scene.add( gridHelper )

camera.position.set(0, 10, 0);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);

// listen for the "keydown" event
window.addEventListener("keydown", (event) => {
  // console.log(event.key)
  if (event.key === "w") {
    cube.rotateTopFaceClockwise();
  } else if (event.key === "W") {
    cube.rotateTopFaceCounterClockwise();
  }
  if (event.key === "s") {
    cube.rotateBottomFaceClockwise();
  } else if (event.key === "S") {
    cube.rotateBottomFaceCounterClockwise();
  }
  if (event.key === "d") {
    cube.rotateFrontFaceClockwise();
  } else if (event.key === "D") {
    cube.rotateFrontFaceCounterClockwise();
  }
  if (event.key === "q") {
    cube.rotateBackFaceClockwise();
  } else if (event.key === "Q") {
    cube.rotateBackFaceCounterClockwise();
  }
  if (event.key === "e") {
    cube.rotateRightFaceClockwise();
  } else if (event.key === "E") {
    cube.rotateRightFaceCounterClockwise();
  }
  if (event.key === "a") {
    cube.rotateLeftFaceClockwise();
  } else if (event.key === "A") {
    cube.rotateLeftFaceCounterClockwise();
  }
});

function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();

