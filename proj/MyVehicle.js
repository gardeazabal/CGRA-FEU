
class MyVehicle extends CGFobject {
  constructor(scene) {
    super(scene);
    this.speed = 0;
    this.posX = 0;
    this.posY = 0;
    this.posZ = 0;
    this.orientation = 0;

    this.initBuffers();
  }

  initBuffers() {
    this.triangle = new MyTriangleV(this.scene);
  }
  update(){
    this.posX += this.speed*Math.sin(Math.PI * this.orientation / 180);
    this.posZ += this.speed*Math.cos(Math.PI * this.orientation / 180);
  }
  turn(val){
    this.orientation += val;
  }
  accelerate(val){
    this.speed += val;
    if(this.speed < 0)
      this.speed = 0;
  }
  reset(){
    this.speed = 0;
    this.posX = 0;
    this.posY = 0;
    this.posZ = 0;
    this.orientation = 0;
  }
  display() {

    this.update();

    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, 0, -0.8);
    this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
    this.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, 0, -0.8);
    this.scene.rotate(Math.PI * 180 / 180, 0, 0, 1);
    this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
    this.triangle.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, 0, -0.8);
    this.scene.rotate(-Math.PI * 90 / 180, 0, 0, 1);
    this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
    this.triangle.display();
    this.scene.popMatrix();

  }

}