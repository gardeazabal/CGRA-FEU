/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		scene.diamond = new MyDiamond(scene);
scene.triangle = new MyTriangle(scene);
scene.Parallelogram = new MyParallelogram(scene);
scene.trianglebig = new MyTriangleBig(scene);
scene.trianglesmall= new MyTriangleSmall(scene);


	}
	display() {

/*
			var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
									0.0, this.scaleFactor, 0.0, 0.0,
									0.0, 0.0, this.scaleFactor, 0.0,
									0.0, 0.0, 0.0, 1.0];

	this.scene.multMatrix(sca);*/

	var move = [1, 0.0, 0.0, 0.0,
				0.0, 1, 0.0, 0.0,
				0.0, 0.0, 1, 0.0,
				-2.0, 4.0, 0.0, 1.0];




	 // ---- BEGIN Primitive drawing section
	//tronco
	this.scene.pushMatrix();
	this.scene.translate(-2.1,4,0);
	this.scene.rotate(-Math.PI*3/4,0,0,1);
	this.scene.trianglebig.display();
	this.scene.popMatrix();

	//cabeça
	this.scene.pushMatrix();
	this.scene.multMatrix(move);
	this.scene.translate(0.5,0.5,0);
	this.scene.rotate(Math.PI*5/36,0,0,1);

			this.scene.diamond.display();
	this.scene.popMatrix();
	//parte inferior tronco
	this.scene.pushMatrix();
	this.scene.translate(2.1,0.8,0);
	this.scene.rotate(Math.PI*0.25,0,0,1);
	this.scene.trianglebig.display();
	this.scene.popMatrix();

		 //LEGS1
	 this.scene.pushMatrix();

	 this.scene.scale(-1,1,1);
	 this.scene.rotate(Math.PI/2,0,0,1);
	 this.scene.translate(-1.9,0,0);

	this.scene.Parallelogram.display();
	this.scene.popMatrix();

	//legs2
		 this.scene.pushMatrix();

	 this.scene.translate(2.9,3,0);
	 this.scene.rotate(Math.PI/2,0,0,1);
	this.scene.triangle.display();
	this.scene.popMatrix();


//pes
	this.scene.pushMatrix();
	this.scene.translate(6,1.8,0);
	this.scene.rotate(Math.PI/4,0,0,1);
		this.scene.trianglesmall.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
	this.scene.translate(-2.3,.001,0);
	this.scene.rotate(-0.75*Math.PI,0,0,1);
		this.scene.trianglesmall.display();
	this.scene.popMatrix();

			// ---- END Primitive drawing section
	}


}
