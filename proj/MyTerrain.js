
class MyTerrain extends CGFobject{
	constructor(scene) {
		super(scene);
		// nrDivs = 1 if not provided
        this.plane = new MyPlane(scene, 20);
		this.initBuffers();
    }
    display(){
        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI * 90 / 180, 1, 0, 0);
        this.scene.scale(100, 100, 1);
        this.plane.display();
        this.scene.popMatrix();
    }
	initBuffers() {
		this.vertices = [];
		this.normals = [];
		this.texCoords = [];

		this.primitiveType = this.scene.gl.TRIANGLES;
		//this.initGLBuffers();
    } 
}


