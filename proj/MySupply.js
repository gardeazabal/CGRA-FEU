const SupplyStates = {
    INACTIVE: 0,
    FALLING: 1,
    LANDED: 2
};
class MySupply extends CGFobject {

    constructor(scene) {
        super(scene);
        this.initBuffers();

        this.fallingStarted;
        this.state = SupplyStates.INACTIVE;
        this.dropPosition = [0, 0, 0];
    }

    initBuffers() {
        this.face1 = new MyQuad2(this.scene);
        this.face2 = new MyQuad2(this.scene);
        this.face3 = new MyQuad2(this.scene);
        this.face4 = new MyQuad2(this.scene);
        this.face5 = new MyQuad2(this.scene);
        this.face6 = new MyQuad2(this.scene);

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);

        this.texture = new CGFtexture(this.scene, 'images/box_texture.jpg');
    }
    update(t) {
        if (this.state == SupplyStates.FALLING) {
            this.dropPosition[1] = 10 - 10/3.0 * ((t - this.fallingStarted)/1000);
            if (this.dropPosition[1] <= 2) {
                this.land();
            }
        }
    }

    drop(dropPosition, t) {
        this.fallingStarted = t;
        this.dropPosition = dropPosition;
        this.state = SupplyStates.FALLING;
    }

    land() {
        this.state = SupplyStates.LANDED;
    }

    display() {
        if (this.state == SupplyStates.INACTIVE)
            return;

        this.material.setTexture(this.texture);
        this.material.apply();

        if (this.state == SupplyStates.LANDED) {
            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(0, -0.5, 1.0);
            this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
            this.face1.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(0, -0.5, -1.0);
            this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
            this.face2.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(1.0, -0.5, 0);
            this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
            this.face3.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(-1.0, -0.5, 0);
            this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
            this.face4.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(0, -0.5, 0);
            this.scene.rotate(Math.PI * 270 / 180, 1, 0, 0);
            this.face6.display();
            this.scene.popMatrix();
        }
        else {
            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(0, 0, 0.5);
            this.face1.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(0, 0, -0.5);
            this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
            this.face2.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(0.5, 0, 0);
            this.scene.rotate(Math.PI * 90 / 180, 0, 1, 0);
            this.face3.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(Math.PI * 90 / 180, 0, 1, 0);
            this.scene.rotate(Math.PI * 180 / 180, 0, 1, 0);
            this.face4.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(0, 0.5, 0);
            this.scene.rotate(-Math.PI * 90 / 180, 1, 0, 0);
            this.face5.display();
            this.scene.popMatrix();

            this.scene.pushMatrix();
            this.scene.translate(this.dropPosition[0], this.dropPosition[1], this.dropPosition[2]);
            this.scene.translate(0, -0.5, 0);
            this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
            this.face6.display();
            this.scene.popMatrix();
        }
    }

} 