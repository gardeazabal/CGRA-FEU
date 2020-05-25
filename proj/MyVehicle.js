
class MyVehicle extends CGFobject {
  constructor(scene) {
    super(scene);
    this.speed = 0.0;
    this.posX = 0;
    this.posY = 0;
    this.posZ = 0;
    this.orientation = 0;

    this.isAutomatic = false;
    this.startTime = 0;
    this.origin = [0, 0];
    this.originAngle = 0;

    this.initBuffers();
  }

  initBuffers() {
    this.sphere = new MySphere(this.scene, 32, 16);
    // Lemes horizontais
    this.lemeH1 = new MyLeme(this.scene);
    this.lemeH2 = new MyLeme(this.scene);
    // Lemes verticais
    this.lemeV1 = new MyLeme(this.scene);
    this.lemeV2 = new MyLeme(this.scene);

    this.cabin = new MyCabin(this.scene);
    this.triangle = new MyTriangleV(this.scene);

    this.engine = new MyEngine(this.scene);

    this.flag = new MyPlane(this.scene, 20);
    this.cabo = new MyCylinder(this.scene, 16, 1);

    this.material = new CGFappearance(this.scene);
    this.material.setAmbient(1.25, 1.20725, 1.20725, 1);
    this.material.setDiffuse(0.829, 0.829, 0.829, 1);
    this.material.setSpecular(1.0, 5.0, 5.0, 1);
    this.material.setShininess(10.0);
    this.material.setTextureWrap('REPEAT', 'REPEAT');

    this.airship_texture = new CGFtexture(this.scene, 'images/airship.jpg');
    this.metal_texture = new CGFtexture(this.scene, 'images/metal_plates.jpg');
    this.flag_texture = new CGFtexture(this.scene, 'images/flag_columbia.png');
  }
  update(t) {
    if (this.isAutomatic){
      this.originAngle = 2*Math.PI/5.0*(t-this.startTime)/1000.0 - 90.0;
      this.posX = this.origin[0] + 5.0*Math.sin(this.originAngle);
      this.posZ = this.origin[1] + 5.0*Math.cos(this.originAngle);
      this.orientation = (this.originAngle)*180.0/Math.PI + 90;
    }
    else {
      this.posX += this.speed * Math.sin(Math.PI * this.orientation / 180.0);
      this.posZ += this.speed * Math.cos(Math.PI * this.orientation / 180.0);
    }
  }
  automatic(t) {
    this.isAutomatic = true;
    this.startTime = t;
    this.originAngle = 0;
    this.origin[0] = this.posX + 5.0 * Math.sin(Math.PI * (90 + this.orientation) / 180);
    this.origin[1] = this.posZ + 5.0 * Math.cos(Math.PI * (90 + this.orientation) / 180);
  }

  turn(val) {
    this.orientation += val;
    if (val > 0) {
      this.lemeV1.turnLeft(val);
      this.lemeV2.turnRight(val);
    }
    else {
      this.lemeV1.turnRight(val);
      this.lemeV2.turnLeft(val);
    }
  }
  idle() {
    this.lemeV1.idle();
    this.lemeV2.idle();
  }
  accelerate(val) {
    if(this.speed < 0.3)
      this.speed += val;
    if (this.speed < 0)
      this.speed = 0;
  }
  reset() {
    this.speed = 0;
    this.posX = 0;
    this.posY = 0;
    this.posZ = 0;
    this.orientation = 0;
    this.isAutomatic = false;
  }
  getSpeed(){
    return this.speed;
  }
  display() {
    
    this.material.setTexture(this.airship_texture);
    this.material.apply();
    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180.0, 0, 1, 0);
    this.scene.scale(1, 1, 2);
    this.sphere.display();
    this.scene.popMatrix();

    this.material.setTexture(this.metal_texture);
    this.material.apply();

    //ENGINES
    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(1.0, -0.75, -1);
    this.engine.speed = this.speed;
    this.engine.display(1);
    this.scene.popMatrix();

    this.material.setTexture(this.metal_texture);
    this.material.apply();

    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(-1.0, -0.75, -1);
    this.engine.speed = this.speed;
    this.engine.display(0);
    this.scene.popMatrix();

    //CABIN
    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, -1.25, -0.25);
    this.scene.scale(0.5, 0.5, 0.5);
    this.cabin.display();
    this.scene.popMatrix();

    //LEMES
    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, 0.3, -2);
    this.scene.scale(0.4, 0.4, 0.4);
    this.scene.rotate(-Math.PI * 90 / 180, 0, 1, 0);
    this.lemeV1.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, -0.3, -2);
    this.scene.scale(0.4, 0.4, 0.4);
    this.scene.rotate(Math.PI * 180 / 180, 0, 0, 1);
    this.scene.rotate(-Math.PI * 90 / 180, 0, 1, 0);
    this.lemeV2.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(-0.1, 0, -2);
    this.scene.scale(0.4, 0.4, 0.4);
    this.scene.rotate(Math.PI * 90 / 180, 0, 0, 1);
    this.scene.rotate(-Math.PI * 90 / 180, 0, 1, 0);
    this.lemeH1.display();
    this.scene.popMatrix();

    this.scene.pushMatrix();
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0.1, 0, -2);
    this.scene.scale(0.4, 0.4, 0.4);
    this.scene.rotate(-Math.PI * 90 / 180, 0, 0, 1);
    this.scene.rotate(-Math.PI * 90 / 180, 0, 1, 0);
    this.lemeH2.display();
    this.scene.popMatrix();


    this.material.setTexture(this.flag_texture);
    this.material.apply();


    //FLAGS
    this.scene.pushMatrix();
    this.scene.setActiveShader(this.scene.shaders[1]);
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, 0, -3.5);
    this.scene.rotate(Math.PI * 90 / 180, 0, 1, 0);
    this.scene.scale(1.0, 0.7, 1.0);
    this.flag.display();
    this.scene.popMatrix();

    
    this.scene.pushMatrix();
    this.scene.setActiveShader(this.scene.shaders[1]);
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, 0, -3.5);
    this.scene.rotate(-Math.PI * 90 / 180, 0, 1, 0);
    this.scene.scale(1.0, 0.7, 1.0);
    this.flag.display();
    this.scene.popMatrix();
    this.scene.setActiveShader(this.scene.defaultShader);
    
   
    //CABO
    this.material.setTexture(this.metal_texture);
    this.material.apply();
    this.scene.pushMatrix();
    this.scene.setActiveShader(this.scene.shaders[1]);
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, 0.3, -3);
    this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
    this.scene.scale(0.01, 1.5, 0.01);
    this.cabo.display();
    this.scene.popMatrix();


    this.material.setTexture(this.metal_texture);
    this.material.apply();
    this.scene.pushMatrix();
    this.scene.setActiveShader(this.scene.shaders[1]);
    this.scene.translate(this.posX, this.posY, this.posZ);
    this.scene.rotate(Math.PI * this.orientation / 180, 0, 1, 0);
    this.scene.translate(0, -0.3, -3);
    this.scene.rotate(Math.PI * 90 / 180, 1, 0, 0);
    this.scene.scale(0.01, 1.5, 0.01);
    this.cabo.display();
    this.scene.popMatrix();
  }
}