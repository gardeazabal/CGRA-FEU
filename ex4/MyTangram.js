class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        //Initialize scene objects
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleSmall2 = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);
        this.triangleBig2 = new MyTriangleBig(scene);

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/tangram.png');
    }

    enableNormalViz(){
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }

    display() {
        
        this.material.apply();

        this.scene.pushMatrix();
        this.scene.translate(-3, 3, 0);
        this.scene.rotate(Math.PI * 40 / 180, 0, 0, 1);
        this.diamond.display();
        this.scene.popMatrix();

        this.material.apply();

        this.scene.pushMatrix();
        this.scene.translate(0.1, 0.1, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI * 90 / 180, 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.material.apply();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 1.5, 0);
        this.scene.rotate(Math.PI * 90 / 180, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.material.apply();

        this.scene.pushMatrix();
        this.scene.translate(2.65, 2.65, 0);
        this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.material.apply();
        this.scene.pushMatrix();
        this.triangleSmall2.updateTexCoords([0,0,0.25, 0.25, 0, 0.5]);
        this.scene.translate(-1.25, -3.2, 0);
        this.scene.rotate(Math.PI * 225 / 180, 0, 0, 1);
        this.triangleSmall2.display();
        this.scene.popMatrix();

        this.material.apply();

        this.scene.pushMatrix();
        this.scene.translate(-2.3, 2.3, 0);
        this.scene.rotate(Math.PI * 225 / 180, 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.material.apply();

        this.scene.pushMatrix();
        this.triangleBig2.updateTexCoords(        [
            0.0, 0.0,
            0.5, 0.5,
            1.0, 0.0
        ]);
        this.scene.translate(0.53, 0.5, 0);
        this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
        this.triangleBig2.display();
        this.scene.popMatrix();

    }

}
