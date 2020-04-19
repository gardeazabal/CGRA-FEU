/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();
        this.initCubeMapMat();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);

        this.enableTextures(true);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 32, 16);
        this.cylinder = new MyCylinder(this, 24);
        this.cubeMap = new MyCubeMap(this);
        this.vehicle = new MyVehicle(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayCylinder = false;
        this.displaySphere = false;
        this.scaleFactor = 1.0;
        this.speedFactor = 1.0;
        this.selectedCubeMapMaterial = 0;

    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    initCubeMapMat() {
        this.earthMaterial = new CGFappearance(this);
        this.earthMaterial.setAmbient(0.25, 0.20725, 0.20725, 1);
        this.earthMaterial.setDiffuse(0.829, 0.829, 0.829, 1);
        this.earthMaterial.setSpecular(1.0, 10.0, 10.0, 1);
        this.earthMaterial.setShininess(10);
        this.earthMaterial.loadTexture('images/earth.jpg');
        this.earthMaterial.setTextureWrap('REPEAT', 'REPEAT');

        this.material1 = new CGFappearance(this);
        this.material1.setAmbient(10.0, 10.0, 10.0, 1);
        this.material1.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material1.setSpecular(0.0, 0.0, 0.0, 1);
        this.material1.setShininess(10.0);
        this.material1.loadTexture('images/cubemap.png');


        this.material2 = new CGFappearance(this);
        this.material2.setAmbient(10.0, 10.0, 10.0, 1);
        this.material2.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material2.setSpecular(0.0, 0.0, 0.0, 1);
        this.material2.setShininess(10.0);
        this.material2.loadTexture('images/cubemap2.png');

        this.material3 = new CGFappearance(this);
        this.material3.setAmbient(10.0, 10.0, 10.0, 1);
        this.material3.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material3.setSpecular(0.0, 0.0, 0.0, 1);
        this.material3.setShininess(10.0);
        this.material3.loadTexture('images/cubemap_nightsky.png');

        this.material4 = new CGFappearance(this);
        this.material4.setAmbient(10.0, 10.0, 10.0, 1);
        this.material4.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material4.setSpecular(0.0, 0.0, 0.0, 1);
        this.material4.setShininess(10.0);
        this.material4.loadTexture('images/daylight.png');

        this.material5 = new CGFappearance(this);
        this.material5.setAmbient(10.0, 10.0, 10.0, 1);
        this.material5.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material5.setSpecular(0.0, 0.0, 0.0, 1);
        this.material5.setShininess(10.0);
        this.material5.loadTexture('images/mountains.png');

        this.material6 = new CGFappearance(this);
        this.material6.setAmbient(10.0, 10.0, 10.0, 1);
        this.material6.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material6.setSpecular(0.0, 0.0, 0.0, 1);
        this.material6.setShininess(10.0);
        this.material6.loadTexture('images/stars1.png');

        this.material7 = new CGFappearance(this);
        this.material7.setAmbient(10.0, 10.0, 10.0, 1);
        this.material7.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material7.setSpecular(0.0, 0.0, 0.0, 1);
        this.material7.setShininess(10.0);
        this.material7.loadTexture('images/interstellar_large.jpg');

        this.material8 = new CGFappearance(this);
        this.material8.setAmbient(10.0, 10.0, 10.0, 1);
        this.material8.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material8.setSpecular(0.0, 0.0, 0.0, 1);
        this.material8.setShininess(10.0);
        this.material8.loadTexture('images/miramar_large.jpg');

        this.material9 = new CGFappearance(this);
        this.material9.setAmbient(10.0, 10.0, 10.0, 1);
        this.material9.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material9.setSpecular(0.0, 0.0, 0.0, 1);
        this.material9.setShininess(10.0);
        this.material9.loadTexture('images/violentdays_small.jpg');

        this.material10 = new CGFappearance(this);
        this.material10.setAmbient(10.0, 10.0, 10.0, 1);
        this.material10.setDiffuse(0.0, 0.0, 0.0, 1);
        this.material10.setSpecular(0.0, 0.0, 0.0, 1);
        this.material10.setShininess(10.0);
        this.material10.loadTexture('images/night_large.jpg');

        this.materials = [this.material1, this.material2, this.material3, this.material4, this.material5, this.material6,
        this.material7, this.material8, this.material9, this.material10];

        this.materialIDs = {
            'Sky 1': 0, 'Sky 2': 1, 'Night Sky': 2, 'Daylight': 3, 'Mountains': 4, 'Stars': 5,
            'Interstellar': 6, 'Miramar': 7, 'Sky 3': 8, 'Night': 9
        };
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys() {
        //var text="Keys pressed: ";
        //var keyspressed=false;

        if (this.gui.isKeyPressed("KeyW")) {
            this.vehicle.accelerate(0.01 * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            this.vehicle.turn(+5.0);
        }
        if (this.gui.isKeyPressed("KeyS")) {
            this.vehicle.accelerate(-0.01 * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyD")) {
            this.vehicle.turn(-5.0);
        }
        if (this.gui.isKeyPressed("KeyR")) {
            this.vehicle.reset();
        }
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t) {
        this.checkKeys();
        //To be done...
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();


        // Draw axis
        if (this.displayAxis)
            this.axis.display();



        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section
        this.pushMatrix();
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        this.vehicle.display();
        this.popMatrix();

        if (this.displayCylinder)
            this.cylinder.display();

        //This sphere does not have defined texture coordinates
        this.earthMaterial.apply();
        if (this.displaySphere)
            this.incompleteSphere.display();
        

        //this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR_MIPMAP_NEAREST);
        this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_CUBE_MAP, this.gl.TEXTURE_WRAP_R, this.gl.CLAMP_TO_EDGE);
        this.materials[this.selectedCubeMapMaterial].apply();
        this.cubeMap.display();
        // ---- END Primitive drawing section
    }
}