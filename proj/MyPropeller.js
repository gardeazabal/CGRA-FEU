
class MyPropeller extends CGFobject{
	constructor(scene){
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
        this.propeller = new MySphere(this.scene, 8, 4);
        this.orientation = 0;
        
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(1.25, 1.20725, 1.20725, 1);
        this.material.setDiffuse(0.829, 0.829, 0.829, 1);
        this.material.setSpecular(1.0, 5.0, 5.0, 1);
        this.material.setShininess(10.0);
        this.material.setTextureWrap('REPEAT', 'REPEAT');
    
        this.texture = new CGFtexture(this.scene, 'images/prop_text.jpg');
        this.material.setTexture(this.texture);
    }
    update(speed){
        this.orientation += 50 * speed;
    }
    display(){
       
        this.material.apply();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI * this.orientation / 180, 0, 0, 1);
        this.scene.scale(0.05,0.3, 0.01);
        this.propeller.display();
        this.scene.popMatrix();
    }
 }