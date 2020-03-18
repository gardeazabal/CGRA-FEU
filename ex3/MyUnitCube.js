class MyUnitCube extends CGFobject {

    constructor(scene){
        super(scene);
        this.initBuffers();
    }
	initBuffers() {

		/*
		this.vertices = [
			-0.5, 0.5, 0.5,	//0
			-0.5, -0.5, 0.5,	//1
			0.5, 0.5, 0.5,	//2
            0.5, -0.5, 0.5,	//3
            -0.5, 0.5, -0.5,	//4
			-0.5, -0.5, -0.5,	//5
			0.5, 0.5, -0.5,	//6
			0.5, -0.5, -0.5	//7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2,
            1, 3, 2, 
            4, 0, 6,
            0, 2, 6,
            1, 5, 7,
            7, 3, 1,
            2, 3, 6,
            3, 7, 6,
            5, 1, 0,
            5, 0, 4,
            6, 7, 5,
            6, 5, 4 
		];
		*/
		this.vertices = [];
		this.indices = [];
		this.normals = [];

		this.vertices.push(-0.5, 0.5, 0.5);//0
		this.vertices.push(-0.5, -0.5, 0.5);//1
		this.vertices.push(0.5, 0.5, 0.5);//2
		this.vertices.push(0.5, -0.5, 0.5);//3

		this.indices.push(0, 1, 2);
		this.indices.push(1, 3, 2);

		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);
		this.normals.push(0, 0, 1);


		this.vertices.push(0.5, 0.5, 0.5);//4
		this.vertices.push(0.5, -0.5, 0.5);//5
		this.vertices.push(0.5, 0.5, -0.5);//6
		this.vertices.push(0.5, -0.5, -0.5);//7

		this.indices.push(2, 3, 6);
		this.indices.push(3, 7, 6);

		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);
		this.normals.push(1, 0, 0);

		this.vertices.push(-0.5, 0.5, -0.5);//8
		this.vertices.push(-0.5, 0.5, 0.5);//9
		this.vertices.push(0.5, 0.5, -0.5);//10
		this.vertices.push(0.5, 0.5, 0.5);//11

		this.indices.push(8, 9, 10);
		this.indices.push(9, 11, 10);

		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);
		this.normals.push(0, 1, 0);

		this.vertices.push(-0.5, 0.5, -0.5);//12
		this.vertices.push(-0.5, -0.5, -0.5);//13
		this.vertices.push(0.5, 0.5, -0.5);//14
		this.vertices.push(0.5, -0.5, -0.5);//15

		this.indices.push(14, 13, 12);
		this.indices.push(13, 14, 15);

		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);
		this.normals.push(0, 0, -1);


		this.vertices.push(-0.5, -0.5, -0.5);//16
		this.vertices.push(-0.5, -0.5, 0.5);//17
		this.vertices.push(0.5, -0.5, -0.5);//18
		this.vertices.push(0.5, -0.5, 0.5);//19

		this.indices.push(18, 17, 16);
		this.indices.push(19, 17, 18);

		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);
		this.normals.push(0, -1, 0);


		this.vertices.push(-0.5, 0.5, 0.5);//20
		this.vertices.push(-0.5, -0.5, 0.5);//21
		this.vertices.push(-0.5, 0.5, -0.5);//22
		this.vertices.push(-0.5, -0.5, -0.5);//23

		this.indices.push(22, 21, 20);
		this.indices.push(21, 22, 23);

		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);
		this.normals.push(-1, 0, 0);

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

}