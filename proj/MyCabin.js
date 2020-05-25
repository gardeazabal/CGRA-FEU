class MyCabin extends CGFobject{
	constructor(scene){
		super(scene);
		this.initBuffers();
	}
	
	initBuffers() {
        this.sphere = new MySphere(this.scene,16,8);
        this.cylinder = new MyCylinder(this.scene, 16);
        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(1.25, 1.20725, 1.20725, 1);
        this.material.setDiffuse(0.829, 0.829, 0.829, 1);
        this.material.setSpecular(1.0, 5.0, 5.0, 1);
        this.material.setShininess(10.0);
        this.material.setTextureWrap('REPEAT', 'REPEAT');
    
        this.texture = new CGFtexture(this.scene, 'images/metal_plates.jpg');
        this.material.setTexture(this.texture);
    }
    display(){
        this.material.apply();

        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0, 1.25);
        this.scene.scale(0.5,0.5,0.5);
        this.sphere.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
        this.scene.scale(0.5,1.35,0.5);
        this.cylinder.display();
        this.scene.popMatrix();
    }
 }