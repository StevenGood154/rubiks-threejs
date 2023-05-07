import * as THREE from 'three';

const emptyColor = 0xaaaaaa;

export function CornerPiece(color1, color2, color3) {
    const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
    const material1 = new THREE.MeshBasicMaterial( {color: color1} );
    const material2 = new THREE.MeshBasicMaterial( {color: color2} );
    const material3 = new THREE.MeshBasicMaterial( {color: color3} );
    const material4 = new THREE.MeshBasicMaterial( {color: emptyColor} );

    const cube = new THREE.Mesh( geometry, [ material3, material4, material1, material4, material2, material4] ); 
    
    return cube;
}

export function EdgePiece (color1, color2) {
    return CornerPiece(color1, color2, 0xff0000);
}