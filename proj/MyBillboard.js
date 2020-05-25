class MyBillboard extends CGFobject{
	constructor(scene) {
		super(scene);
		this.initBuffers();
    }
	initBuffers() {
		this.vertices = [];
		this.normals = [];
		this.texCoords = [];
        this.billboard = new MyPlane(this.scene, 20);
        this.trave = new MyPlane(this.scene, 2);

        this.mTrave = new CGFappearance(this.scene);
        this.mTrave.setAmbient(0.1, 0.1, 0.1, 1);
        this.mTrave.setDiffuse(0.5, 0.5, 0.5, 1);
        this.mTrave.setSpecular(0.1, 0.1, 0.1, 1);
        this.mTrave.setShininess(10.0);

        this.boardTex = new CGFappearance(this.scene);
        this.boardTex.setAmbient(0.1, 0.1, 0.1, 1);
        this.boardTex.setDiffuse(0.9, 0.9, 0.9, 1);
        this.boardTex.setSpecular(0.1, 0.1, 0.1, 1);
        this.boardTex.setShininess(10.0);

        this.tex = new CGFtexture(this.scene, 'shaders/supplies.png');

		this.primitiveType = this.scene.gl.TRIANGLES;
        
    }
    display(){
        
        this.mTrave.apply();
        this.scene.pushMatrix();
        this.scene.translate(-1.75, 0, 0);
        this.scene.scale(0.25, 2, 1);
        this.trave.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(1.75, 0, 0);
        this.scene.scale(0.25, 2, 1);
        this.trave.display();
        this.scene.popMatrix();

        this.boardTex.setTexture(this.tex);
        this.boardTex.apply();

        this.scene.pushMatrix();
        this.scene.setActiveShader(this.scene.shaders[2]);
        this.tex.bind(0);
        this.scene.translate(0, 2, 0);
        this.scene.scale(4, 2, 1);
        this.billboard.display();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.popMatrix();
    } 
}