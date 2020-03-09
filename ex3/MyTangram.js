class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        //Initialize scene objects
        scene.axis = new CGFaxis(scene);
        scene.diamond = new MyDiamond(scene);
        scene.triangle = new MyTriangle(scene);
        scene.parallelogram = new MyParallelogram(scene);
        scene.triangleSmall = new MyTriangleSmall(scene);
        scene.triangleBig = new MyTriangleBig(scene);
    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(-3, 3, 0);
        this.scene.rotate(Math.PI * 40 / 180, 0, 0, 1);

        //this.multMatrix(m);

        this.scene.diamond.display();
        this.scene.popMatrix();
        //this.multMatrix(sca);


        this.scene.pushMatrix();
        this.scene.translate(0.1, 0.1, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI * 90 / 180, 0, 0, 1);
        this.scene.parallelogram.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(1.5, 1.5, 0);
        this.scene.rotate(Math.PI * 90 / 180, 0, 0, 1);
        this.scene.triangle.display();
        this.scene.popMatrix();


        this.scene.pushMatrix();
        this.scene.translate(2.65, 2.65, 0);
        this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
        this.scene.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-1.25, -3.2, 0);
        this.scene.rotate(Math.PI * 225 / 180, 0, 0, 1);
        this.scene.triangleSmall.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.3, 2.3, 0);
        this.scene.rotate(Math.PI * 225 / 180, 0, 0, 1);
        this.scene.triangleBig.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.53, 0.5, 0);
        this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
        this.scene.triangleBig.display();
        this.scene.popMatrix();

    }

}

/*
        var m = [   1.0,  0.0, 0.0,   0,
                    0.0,  1.0, 0.0,   0,
                    0.0,  0.0, 1.0, 0.0,
                    -3.0, 3.0, 0.0, 1.0];
        
        if(this.displayDiamond){
            this.pushMatrix();
            this.translate(-3, 3, 0);
            this.rotate(Math.PI*45/180, 0, 0, 1);
            
            //this.multMatrix(m);
            
            this.diamond.display();
            this.popMatrix();
            //this.multMatrix(sca);
        }
		
		if(this.displayParallelogram){
            this.pushMatrix();
            this.translate(0.1, 0.1, 0);
            this.scale(-1, 1, 1);
            this.rotate(-Math.PI*90/180, 0, 0, 1);
            this.parallelogram.display();
            this.popMatrix();
        }
		
		if(this.displayTriangle){
            this.pushMatrix();
            this.translate(1.5, 1.5, 0);
            this.rotate(Math.PI*90/180, 0, 0, 1);
            this.triangle.display();
            this.popMatrix();
        }
		
		if(this.displayTriangleSmall){
            this.pushMatrix();
            this.translate(2.65, 2.65, 0);
            this.rotate(Math.PI*45/180, 0, 0, 1);
            this.triangleSmall.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(-1.25, -3.2, 0);
            this.rotate(Math.PI*225/180, 0, 0, 1);
            this.triangleSmall.display();
            this.popMatrix();
        }
        // pi - 180
        // x  - 90
		if(this.displayTriangleBig){
            this.pushMatrix();
            this.translate(-2.3, 2.3, 0);
            //this.multMatrix(m);
            this.rotate(Math.PI*225/180, 0, 0, 1);
            this.triangleBig.display();
            this.popMatrix();

            this.pushMatrix();
            this.translate(0.53, 0.5, 0);
            //this.multMatrix(m);
            this.rotate(Math.PI*45/180, 0, 0, 1);
            this.triangleBig.display();
            this.popMatrix();
        }
*/