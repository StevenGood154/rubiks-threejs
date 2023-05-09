import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import { RubixCube } from './RubixCube'

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

// Build Rubix Cube
// const size = 0.8
// const geometry = new THREE.BoxGeometry( size, size, size ); 
// const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
// const cubeComponents = Array.from({length: 26}, () => new THREE.Mesh( geometry, material ));

// cubeComponents.forEach( (box) => scene.add(box));

// cubeComponents[0].position.set (-1, -1,  0);
// cubeComponents[1].position.set ( 1, -1,  0);
// cubeComponents[2].position.set ( 0, -1, -1);
// cubeComponents[3].position.set ( 0, -1,  1);
// cubeComponents[4].position.set (-1, -1, -1);
// cubeComponents[5].position.set ( 1, -1,  1);
// cubeComponents[6].position.set (-1, -1,  1);
// cubeComponents[7].position.set ( 1, -1, -1);
// cubeComponents[8].position.set ( 0,  0,  0);

// cubeComponents[9].position.set (-1,  1,  0);
// cubeComponents[10].position.set ( 1,  1,  0);
// cubeComponents[11].position.set ( 0,  1, -1);
// cubeComponents[12].position.set ( 0,  1,  1);
// cubeComponents[13].position.set (-1,  1, -1);
// cubeComponents[14].position.set ( 1,  1,  1);
// cubeComponents[15].position.set (-1,  1,  1);
// cubeComponents[16].position.set ( 1,  1, -1);
// cubeComponents[17].position.set ( 0,  0,  0);

// cubeComponents[18].position.set (-1,  0,  0);
// cubeComponents[19].position.set ( 1,  0,  0);
// cubeComponents[20].position.set ( 0,  0, -1);
// cubeComponents[21].position.set ( 0,  0,  1);
// cubeComponents[22].position.set (-1,  0, -1);
// cubeComponents[23].position.set ( 1,  0,  1);
// cubeComponents[24].position.set (-1,  0,  1);
// cubeComponents[25].position.set ( 1,  0, -1);

// const center = CenterPiece( 0xff8800 );
// const e = EdgePiece( 0xff8800, 0xffff00);
// const c = CornerPiece( 0xff8800, 0xffff00, 0x22ccff);
// scene.add( c, e, center );

// e.position.set(2, 0, 0)
// center.position.set(4, 0, 0)

const cube = new RubixCube();
scene.add( cube );

// Helpers
const gridHelper = new THREE.GridHelper(200, 50);
scene.add( gridHelper )

camera.position.set(0, 10, 0);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);


function animate() {
  requestAnimationFrame(animate);

  controls.update();

  renderer.render(scene, camera);
}

animate();

