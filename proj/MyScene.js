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
        this.initMaterials();

        this.nSuppliesDelivered = 0;

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);

        this.enableTextures(true);

        this.terrainMaterial = new CGFappearance(this);
        this.terrainMaterial.setAmbient(0.3, 0.3, 0.3, 1);
        this.terrainMaterial.setDiffuse(0.7, 0.7, 0.7, 1);
        this.terrainMaterial.setSpecular(0.0, 0.0, 1.0, 1);
        this.terrainMaterial.setShininess(50);
        //this.terrainMaterial.loadTexture("shaders/terrainText.jpg");
        this.textureTerrain = new CGFtexture(this, "shaders/terrain.jpg");
        this.textureTerrainMap = new CGFtexture(this, "shaders/heightmap.jpg");


        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.incompleteSphere = new MySphere(this, 32, 16);
        this.cylinder = new MyCylinder(this, 24);
        this.cubeMap = new MyCubeMap(this);
        this.vehicle = new MyVehicle(this);
        this.terrain = new MyTerrain(this);
        this.billboard = new MyBillboard(this);
        this.supplies = [new MySupply(this),
        new MySupply(this),
        new MySupply(this),
        new MySupply(this),
        new MySupply(this)];

        this.shaders = [
            new CGFshader(this.gl, "shaders/terrain.vert", "shaders/terrain.frag"),
            new CGFshader(this.gl, "shaders/flag.vert", "shaders/flag.frag"),
            new CGFshader(this.gl, "shaders/billboard.vert", "shaders/billboard.frag")
        ];

        this.shaders[0].setUniformsValues({ uSampler2: 1 });
        this.shaders[1].setUniformsValues({ uSampler2: 1, speed: this.vehicle.getSpeed(), timeFactor: 0 });
        this.shaders[2].setUniformsValues({ uSampler: 0, suppliesDelivered: this.nSuppliesDelivered });

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayCylinder = false;
        this.displaySphere = false;
        this.displayVehicle = true;
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
        //this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
        this.camera = new CGFcamera(1.6, 1.6, 800, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    initMaterials() {
        this.earthMaterial = new CGFappearance(this);
        this.earthMaterial.setAmbient(0.25, 0.20725, 0.20725, 1);
        this.earthMaterial.setDiffuse(0.829, 0.829, 0.829, 1);
        this.earthMaterial.setSpecular(1.0, 10.0, 10.0, 1);
        this.earthMaterial.setShininess(10);
        this.earthMaterial.loadTexture('images/earth.jpg');
        this.earthMaterial.setTextureWrap('REPEAT', 'REPEAT');


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

        this.materials = [this.material8, this.material2,
        this.material9, this.material3, this.material10, this.material7];

        this.materialIDs = {
            'Sky 1': 0, 'Sky 2': 1, 'Sky 3': 2,  'Night Sky 1': 3, 'Night Sky 2': 4, 'Interstellar': 5
        };
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    checkKeys(t) {
        if (this.gui.isKeyPressed("KeyW")) {
            this.vehicle.accelerate(0.01 * this.speedFactor);
        }
        if (this.gui.isKeyPressed("KeyA")) {
            this.vehicle.turn(5.0);
        }
        else if (this.gui.isKeyPressed("KeyD")) {
            this.vehicle.turn(-5.0);
        }
        else {
            this.vehicle.idle();
        }
        if (this.gui.isKeyPressed("KeyS")) {
            this.vehicle.accelerate(-0.01 * this.speedFactor);
        }

        if (this.gui.isKeyPressed("KeyR")) {
            this.vehicle.reset();
        }
        if (this.gui.isKeyPressed("KeyP")) {
            this.vehicle.automatic(t);
        }
        if (this.gui.isKeyPressed("KeyL")) {
            if (this.nSuppliesDelivered < 5) {
                this.dropSupply(t);
                this.nSuppliesDelivered++;
            }
        }
    }

    dropSupply(t) {
        this.supplies[this.nSuppliesDelivered].drop([this.vehicle.posX, 0, this.vehicle.posZ], t);
    }

    // called periodically (as per setUpdatePeriod() in init())
    update(t) {
        this.checkKeys(t);

        this.vehicle.update(t);

        for (var i = 0; i < 5; i++)
            this.supplies[i].update(t);
        this.shaders[1].setUniformsValues({ uSampler2: 1, Speed: this.vehicle.getSpeed(), timeFactor: t / 100 % 1000 });
        this.shaders[2].setUniformsValues({ uSampler: 0, suppliesDelivered: this.nSuppliesDelivered });
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
        this.translate(0, 10, 0);
        this.scale(this.scaleFactor, this.scaleFactor, this.scaleFactor);
        if (this.displayVehicle)
            this.vehicle.display();
        this.popMatrix();

        this.setActiveShader(this.shaders[0]);
        this.textureTerrainMap.bind(1);
        this.terrainMaterial.setTexture(this.textureTerrain);
        this.terrainMaterial.apply();
        this.translate(0, -1.0, 0);
        this.terrain.display();
        this.setActiveShader(this.defaultShader);

        this.pushMatrix();
        this.translate(-16, 8, -20);
        this.rotate(Math.PI * 45 / 180, 0, 1, 0);
        this.scale(3.0, 3.0, 3.0)
        this.billboard.display();
        this.popMatrix();

        if (this.displayCylinder)
            this.cylinder.display();

        //This sphere does not have defined texture coordinates
        this.earthMaterial.apply();
        if (this.displaySphere)
            this.incompleteSphere.display();

        this.pushMatrix();
        for (var i = 0; i < 5; i++)
            this.supplies[i].display();
        this.popMatrix();

        this.materials[this.selectedCubeMapMaterial].apply();
        this.cubeMap.display();
        // ---- END Primitive drawing section


    }
}