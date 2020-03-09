/*
Crie um ficheiro MyUnitCube.js e defina nesse ficheiro a classe MyUnitCube como
subclasse da CGFobject (pode usar uma cópia do código do MyDiamond.js como
ponto de partida). Essa classe deve definir na função initBuffers os 8 vértices do cubo,
e a conectividade entre eles de forma a formar os triângulos que constituem as faces
quadradas do cubo. Recomenda-se que sejam inseridos comentários identificando os
vértices e as faces que estão a ser definidas.
2. Deve acrescentar no ficheiro main.js a inclusão do n

m cubo centrado na origem e de aresta unitária, ou
seja, com coordenadas entre (-0.5, -0.5, -0.5) e (0.5, 0.5, 0.5)


*/ 


class MyUnitCube extends CGFobject {

    constructor(scene){
        super(scene);
        this.initBuffers();
    }
	initBuffers() {
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

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

}