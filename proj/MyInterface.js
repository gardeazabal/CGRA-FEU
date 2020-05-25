/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');
        this.gui.add(this.scene, 'displayCylinder').name('Display Cylinder');
        this.gui.add(this.scene, 'displaySphere').name('Display Sphere');
        this.gui.add(this.scene, 'displayVehicle').name('Display Vehicle');

        this.gui.add(this.scene, 'scaleFactor', 0.5, 3.0).name('Scale');
        this.gui.add(this.scene, 'speedFactor', 0.1, 3.0).name('Speed');

        this.gui.add(this.scene, 'selectedCubeMapMaterial', this.scene.materialIDs).name('Cubemap Texture');

        this.initKeys(); 
        return true;
    }
    initKeys(){
        this.scene.gui = this;
        this.processKeyboard=function(){};
        this.activeKeys={};
    }
    processKeyDown(event){
        this.activeKeys[event.code]=true;
    }
    processKeyUp(event){
        this.activeKeys[event.code]=false;
    }
    isKeyPressed(keyCode){
        return this.activeKeys[keyCode] || false;
    }
}