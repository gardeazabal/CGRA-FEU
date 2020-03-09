/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
/*
        this.diamond = new MyDiamond(this);
	this.triangle = new MyTriangle(this);
	this.Parallelogram = new MyParallelogram(this);
	this.trianglebig = new MyTriangleBig(this);
	this.trianglesmall= new MyTriangleSmall(this);*/
  this.tangram = new MyTangram(this);
        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;
      this.displayTangram=true;
        /*this.displayTri=true;
        this.displayDiamond=true;
        this.displayParallelogram=true;*/

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    display() {
        /*// ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();



        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];

		this.multMatrix(sca);*/
/*
		var move = [1, 0.0, 0.0, 0.0,
					0.0, 1, 0.0, 0.0,
					0.0, 0.0, 1, 0.0,
					-2.0, 4.0, 0.0, 1.0];


*/
if(this.displayTangram)
  this.Tangram.display();

/*

		 // ---- BEGIN Primitive drawing section
		//tronco
		this.pushMatrix();
		this.translate(-2.1,4,0);
		this.rotate(-Math.PI*3/4,0,0,1);
		this.trianglebig.display();
		this.popMatrix();

		//cabeça
		this.pushMatrix();
		this.multMatrix(move);
    this.translate(0.5,0.5,0);
    this.rotate(Math.PI*5/36,0,0,1);
		if (this.displayDiamond)
		    this.diamond.display();
		this.popMatrix();
		//parte inferior tronco
		this.pushMatrix();
		this.translate(2.1,0.8,0);
		this.rotate(Math.PI*0.25,0,0,1);
		this.trianglebig.display();
		this.popMatrix();

       //LEGS1
	   this.pushMatrix();

	   this.scale(-1,1,1);
	   this.rotate(Math.PI/2,0,0,1);
	   this.translate(-1.9,0,0);
		if(this.displayParallelogram)
		    this.Parallelogram.display();
		this.popMatrix();

		//legs2
       this.pushMatrix();

	   this.translate(2.9,3,0);
	   this.rotate(Math.PI/2,0,0,1);

	  	if (this.displayTri)
		    this.triangle.display();
		this.popMatrix();


	//pes
		this.pushMatrix();
		this.translate(6,1.8,0);
		this.rotate(Math.PI/4,0,0,1);
	    this.trianglesmall.display();
		this.popMatrix();

		this.pushMatrix();
    this.translate(-2.3,.001,0);
    this.rotate(-0.75*Math.PI,0,0,1);


	    this.trianglesmall.display();
		this.popMatrix();

        // ---- END Primitive drawing section
    }*/
}

}
