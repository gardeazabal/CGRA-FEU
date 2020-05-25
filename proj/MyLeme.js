
class MyLeme extends CGFobject{
	constructor(scene){
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
        this.triangle = new MyTriangleV(this.scene);
        this.square = new MySquare(this.scene);
        this.orientation = 0;
    }

    turnRight(val){
        this.orientation = 45;
    }

    turnLeft(val){
        this.orientation = -45;
    }

    idle(){
        this.orientation = 0;
    }

    display(){
        this.scene.pushMatrix();
        this.triangle.display();
        this.scene.popMatrix();
        
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
        this.scene.scale(0.6,1.0,1.0);
        this.scene.translate(-1.0,1.0,0);
        this.square.display();
        this.scene.popMatrix();
    }
	
 }