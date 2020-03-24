/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
 
 class MyTriangle extends CGFobject{
	constructor(scene){
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			-1, -1, 0,
			1, -1, 0,
			-1, 1, 0,

			-1, -1, 0,
			1, -1, 0,
			-1, 1, 0
		];

		this.indices = [
			0, 1, 2,
			2, 1, 0,

			0, 1, 2,
			2, 1, 0
		];


		this.normals = [];
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);

		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);

		this.texCoords=[
			0.0, 0.5,
			0.0, 1.0,
			0.5, 1.0
		];

		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		//this.updateTexCoordsGLBuffers();
	}
	
 }