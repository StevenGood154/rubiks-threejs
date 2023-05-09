import * as THREE from 'three';

function degreesToRadians (degrees) {
  return degrees * (Math.PI / 180);
};

const emptyColor = 0xaaaaaa;

const orange = 0xff8800;
const red = 0xff0000;
const yellow = 0xffff00;
const blue = 0x22ccff;
const green = 0x00ff00;
const white = 0xffffff;

const size = 0.8;


class RubiksCube extends THREE.Object3D {
  constructor() {
    super();

    this.pieces = [
      new CornerPiece(red, white, blue),
      new EdgePiece(red, white),
      new CornerPiece(red, green, white),
      new EdgePiece(red, blue),
      new CenterPiece(red),
      new EdgePiece(red, green),
      new CornerPiece(red, blue, yellow),
      new EdgePiece(red, yellow),
      new CornerPiece(red, yellow, green),

      new EdgePiece(white, blue),
      new CenterPiece(white),
      new EdgePiece(green, white),
      new CenterPiece(blue),

      new CenterPiece(green),
      new EdgePiece(yellow, blue),
      new CenterPiece(yellow),
      new EdgePiece(green, yellow),

      new CornerPiece(orange, blue, white),
      new EdgePiece(orange, white),
      new CornerPiece(orange, white, green),
      new EdgePiece(orange, blue),
      new CenterPiece(orange),
      new EdgePiece(orange, green),
      new CornerPiece(orange, yellow, blue),
      new EdgePiece(orange, yellow),
      new CornerPiece(orange, green, yellow),
    ];

    this.pieces[ 0].position.set(-1,  1, -1);
    this.pieces[ 1].position.set( 0,  1, -1);
    this.pieces[ 2].position.set( 1,  1, -1);
    this.pieces[ 3].position.set(-1,  1,  0);
    this.pieces[ 4].position.set( 0,  1,  0);
    this.pieces[ 5].position.set( 1,  1,  0);
    this.pieces[ 6].position.set(-1,  1,  1);
    this.pieces[ 7].position.set( 0,  1,  1);
    this.pieces[ 8].position.set( 1,  1,  1);
  
    this.pieces[ 9].position.set(-1,  0, -1);
    this.pieces[10].position.set( 0,  0, -1);
    this.pieces[11].position.set( 1,  0, -1);
    this.pieces[12].position.set(-1,  0,  0);

    this.pieces[13].position.set( 1,  0,  0);
    this.pieces[14].position.set(-1,  0,  1);
    this.pieces[15].position.set( 0,  0,  1);
    this.pieces[16].position.set( 1,  0,  1);

    this.pieces[17].position.set(-1, -1, -1);
    this.pieces[18].position.set( 0, -1, -1);
    this.pieces[19].position.set( 1, -1, -1);
    this.pieces[20].position.set(-1, -1,  0);
    this.pieces[21].position.set( 0, -1,  0);
    this.pieces[22].position.set( 1, -1,  0);
    this.pieces[23].position.set(-1, -1,  1);
    this.pieces[24].position.set( 0, -1,  1);
    this.pieces[25].position.set( 1, -1,  1);


    this.pieces[ 0].rotateY(degreesToRadians(180));
    this.pieces[ 1].rotateY(degreesToRadians(180));
    this.pieces[ 2].rotateY(degreesToRadians(90));
    this.pieces[ 3].rotateY(degreesToRadians(270));

    this.pieces[ 5].rotateY(degreesToRadians(90));
    this.pieces[ 6].rotateY(degreesToRadians(270));

    this.pieces[ 9].rotateZ(degreesToRadians(90));
    this.pieces[ 9].rotateX(degreesToRadians(270));
    this.pieces[10].rotateX(degreesToRadians(270));
    this.pieces[11].rotateZ(degreesToRadians(90));
    this.pieces[11].rotateX(degreesToRadians(180));
    this.pieces[12].rotateX(degreesToRadians(90));
    this.pieces[12].rotateZ(degreesToRadians(90));

    this.pieces[13].rotateX(degreesToRadians(90));
    this.pieces[13].rotateZ(degreesToRadians(270));
    this.pieces[14].rotateX(degreesToRadians(90));
    this.pieces[14].rotateY(degreesToRadians(270));
    this.pieces[15].rotateX(degreesToRadians(90));
    this.pieces[16].rotateZ(degreesToRadians(270));

    this.pieces[17].rotateY(degreesToRadians(90));
    this.pieces[17].rotateX(degreesToRadians(180));
    this.pieces[18].rotateX(degreesToRadians(180));
    this.pieces[19].rotateX(degreesToRadians(180));
    this.pieces[20].rotateX(degreesToRadians(180));
    this.pieces[20].rotateY(degreesToRadians(270));
    this.pieces[21].rotateX(degreesToRadians(180));
    this.pieces[22].rotateX(degreesToRadians(180));
    this.pieces[22].rotateY(degreesToRadians(90));
    this.pieces[23].rotateZ(degreesToRadians(180));
    this.pieces[24].rotateX(degreesToRadians(180));
    this.pieces[24].rotateY(degreesToRadians(180));
    this.pieces[25].rotateY(degreesToRadians(270));
    this.pieces[25].rotateX(degreesToRadians(180));



    this.add(...this.pieces); 
  }

  
}

class CornerPiece extends THREE.Mesh {
  constructor(color1, color2, color3) {
    super();

    this.geometry = new THREE.BoxGeometry( size, size, size ); 
    const material1 = new THREE.MeshBasicMaterial( {color: color1} );
    const material2 = new THREE.MeshBasicMaterial( {color: color2} );
    const material3 = new THREE.MeshBasicMaterial( {color: color3} );
    const material4 = new THREE.MeshBasicMaterial( {color: emptyColor} );

    this.material = [ material3, material4, material1, material4, material2, material4]; 

  }
  
}

class EdgePiece extends CornerPiece {
  constructor(color1, color2) {
    super(color1, color2, emptyColor);
  }
}

class CenterPiece extends CornerPiece {
  constructor(color1) {
    super(color1, emptyColor, emptyColor);
  }
}

export { RubiksCube };