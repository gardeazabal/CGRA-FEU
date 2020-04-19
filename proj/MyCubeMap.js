class MyCubeMap extends CGFobject {
    constructor(scene) {
        super(scene);
        this.initBuffers();
    }

    initBuffers() {
        this.face1 = new MyQuad(this.scene);
        this.face2 = new MyQuad(this.scene);
        this.face3 = new MyQuad(this.scene);
        this.face4 = new MyQuad(this.scene);
        this.face5 = new MyQuad(this.scene);
        this.face6 = new MyQuad(this.scene);
    }

    display() {

        this.scene.pushMatrix();
        this.scene.translate(0, 0, 50);
        this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
        //texFront
        this.face1.updateTexCoords([
            0.25, 0.6665,
            0.499, 0.6665,
            0.25, 0.3334,
            0.499, 0.3334
        ]);
        this.face1.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 0, -50);
        //texBack
        this.face2.updateTexCoords([
            0.75, 0.665,
            0.999, 0.665,
            0.75, 0.334,
            0.999, 0.334
        ]);
        this.face2.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(50, 0, 0);
        this.scene.rotate(Math.PI * 90 / 180, 0, 1, 0);
        this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
        //texLeft
        this.face3.updateTexCoords([
            0.0, 0.666,
            0.25, 0.666,
            0.0, 0.3336,
            0.25, 0.3336
        ]);
        this.face3.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-50, 0, 0);
        this.scene.rotate(Math.PI * 90 / 180, 0, 1, 0);
        //texRight
        this.face4.updateTexCoords([
            0.499, 0.665,
            0.75, 0.665,
            0.499, 0.334,
            0.75, 0.334
        ]);
        this.face4.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, 50, 0);
        this.scene.rotate(-Math.PI * 90 / 180, 1, 0, 0);
        this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
        //texTop
        this.face5.updateTexCoords([
            0.251, 0.3332,
            0.499, 0.3332,
            0.251, 0.01,
            0.499, 0.01
        ]);
        this.face5.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0, -50, 0);
        this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
        this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
        //texBottom
        this.face6.updateTexCoords([
            0.2556, 3 / 3.0,
            0.499, 3 / 3.0,
            0.2556, 0.665,
            0.499, 0.665
        ]);

        this.face6.display();
        this.scene.popMatrix();
    }

} 