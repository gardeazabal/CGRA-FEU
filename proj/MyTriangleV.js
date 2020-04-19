
class MyTriangleV extends CGFobject{
	constructor(scene){
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
		this.vertices = [
			0, 0, 0,
			0.8, 0, 0,
			0, 2.0, 0,

			0, 0, 0,
			0.8, 0, 0,
			0, 2.0, 0
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


		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
	
 }