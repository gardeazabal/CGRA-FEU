class MyTangram extends CGFobject {
    constructor(scene) {
        super(scene);
        //Initialize scene objects
        this.diamond = new MyDiamond(scene);
        this.triangle = new MyTriangle(scene);
        this.parallelogram = new MyParallelogram(scene);
        this.triangleSmall = new MyTriangleSmall(scene);
        this.triangleBig = new MyTriangleBig(scene);


        this.materialA = new CGFappearance(this.scene);
        this.materialA.setAmbient(0, 1, 0, 1.0);
        this.materialA.setDiffuse(0, 0, 0, 1.0);
        this.materialA.setSpecular(0, 1, 0, 1.0);
        this.materialA.setShininess(10.0);

        this.materialB = new CGFappearance(this.scene);
        this.materialB.setAmbient(1, 1, 0, 1.0);
        this.materialB.setDiffuse(0, 0, 0, 1.0);
        this.materialB.setSpecular(1, 1, 0, 1.0);
        this.materialB.setShininess(10.0);

        this.materialC = new CGFappearance(this.scene);
        this.materialC.setAmbient(1, 1, 1, 1.0);
        this.materialC.setDiffuse(1, 0, 0, 1.0);
        this.materialC.setSpecular(1, 0, 0, 1.0);
        this.materialC.setShininess(10.0);

        this.materialD = new CGFappearance(this.scene);
        this.materialD.setAmbient(1, 0, 0, 1.0);
        this.materialD.setDiffuse(0, 0, 0, 1.0);
        this.materialD.setSpecular(1, 0, 0, 1.0);
        this.materialD.setShininess(10.0);

        this.materialE = new CGFappearance(this.scene);
        this.materialE.setAmbient(1, 0, 1, 1.0);
        this.materialE.setDiffuse(0, 0, 0, 1.0);
        this.materialE.setSpecular(1, 0, 1, 1.0);
        this.materialE.setShininess(10.0);

        this.materialF = new CGFappearance(this.scene);
        this.materialF.setAmbient(1, 0.5, 0, 1.0);
        this.materialF.setDiffuse(0.5, 0, 0, 1.0);
        this.materialF.setSpecular(1.0, 0.5, 0, 1.0);
        this.materialF.setShininess(10.0);

        this.materialG = new CGFappearance(this.scene);
        this.materialG.setAmbient(0, 0, 1, 1.0);
        this.materialG.setDiffuse(0, 0, 0, 1.0);
        this.materialG.setSpecular(0, 0, 1, 1.0);
        this.materialG.setShininess(10.0);

        //duvida como fazer normal do tangram
    }

    enableNormalViz(){
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.triangleBig.enableNormalViz();
        this.triangleSmall.enableNormalViz();
        this.parallelogram.enableNormalViz();
    }

    display() {
        
        this.scene.materials[4].apply();

        this.scene.pushMatrix();
        this.scene.translate(-3, 3, 0);
        this.scene.rotate(Math.PI * 40 / 180, 0, 0, 1);

        //this.multMatrix(m);

        this.diamond.display();
        this.scene.popMatrix();
        //this.multMatrix(sca);

        this.materialB.apply();

        this.scene.pushMatrix();
        this.scene.translate(0.1, 0.1, 0);
        this.scene.scale(-1, 1, 1);
        this.scene.rotate(-Math.PI * 90 / 180, 0, 0, 1);
        this.parallelogram.display();
        this.scene.popMatrix();

        this.materialC.apply();

        this.scene.pushMatrix();
        this.scene.translate(1.5, 1.5, 0);
        this.scene.rotate(Math.PI * 90 / 180, 0, 0, 1);
        this.triangle.display();
        this.scene.popMatrix();

        this.materialD.apply();

        this.scene.pushMatrix();
        this.scene.translate(2.65, 2.65, 0);
        this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.materialE.apply();

        this.scene.pushMatrix();
        this.scene.translate(-1.25, -3.2, 0);
        this.scene.rotate(Math.PI * 225 / 180, 0, 0, 1);
        this.triangleSmall.display();
        this.scene.popMatrix();

        this.materialF.apply();

        this.scene.pushMatrix();
        this.scene.translate(-2.3, 2.3, 0);
        this.scene.rotate(Math.PI * 225 / 180, 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

        this.materialG.apply();

        this.scene.pushMatrix();
        this.scene.translate(0.53, 0.5, 0);
        this.scene.rotate(Math.PI * 45 / 180, 0, 0, 1);
        this.triangleBig.display();
        this.scene.popMatrix();

    }

}
