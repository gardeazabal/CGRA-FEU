
class MyEngine extends CGFobject{
	constructor(scene){
        super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
        this.speed = 0.0
        this.sphere = new MySphere(this.scene, 8, 4);
        this.cylinder = new MyCylinder(this.scene, 8);
        this.propeller = new MyPropeller(this.scene);
    }
    display(side){
        this.scene.pushMatrix();
        this.scene.scale(0.2, 0.2, 0.5);
        this.scene.translate(0, 0, 1.0);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(0.1,0.1,0.5);
        this.scene.translate(0, 0, 0);
        this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.4);
        if(side)
            this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
        else
            this.scene.rotate(-Math.PI * 45 / 180, 0, 0, 1);
        this.scene.scale(0.05,0.5,0.05);
        this.cylinder.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.scale(1.25,1.25,1.25);
        this.propeller.update(this.speed);
        this.propeller.display();
        this.scene.popMatrix();
    }
 }