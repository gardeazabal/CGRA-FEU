/**
 * MyCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
				-0.5,0.5,0.5,	//0      CIMA ESQUERDO FRENTE
				-0.5,-0.5,0.5,		//1   BAIXO ESQUERDA FRENTE
				-0.5,-0.5,-0.5,		//2   BAIXO  ESQUERDA TRAS
				-0.5,0.5,-0.5,		//3   CIMA  ESQUERDA TRAS
				0.5,0.5,0.5,		//4      CIMA DIREITA FRENTE
				0.5,-0.5,0.5,		//5      BAIXO DIREITA FRENTE
				0.5,-0.5,-0.5,		//6    BAIXO DIREITA TRAS
				0.5,0.5,-0.5		//7     CIMA DIREITA   TRAS
		];


		//Counter-clockwise reference of vertices
		this.indices = [
		4,0,5, // frente
		0,1,5,
		2,7,6, // tras
		2,3,7,
		5,6,7,       //DIREITO
		5,7,4,
		0,3,1,        // ESQUERDO
		 3,2,1,
		5,1,6,       //BAIXO
1,2,6,
  7,3,0,   	//CIMA
	0,4,7	];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
