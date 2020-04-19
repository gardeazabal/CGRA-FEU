class MyCylinder extends CGFobject {
  /**
   * @method constructor
   * @param  {CGFscene} scene - MyScene object
   * @param  {integer} slices - number of slices around Y axis
   */
  constructor(scene, slices) {
    super(scene);
    this.faces = slices;
    this.initBuffers();
  }

  /**
   * @method initBuffers
   */
  initBuffers() {
    this.vertices = [];
    this.indices = [];
    this.normals = [];
    this.texCoords = [];


    var idx = 0;

    for (var h = 0; h < 10; h += 1) {
      var theta = (2 * Math.PI) / this.faces;

      for (var face = 0; face < this.faces; face++) {
        var x = Math.cos(theta * face);
        var z = Math.sin(theta * face);
        var y = h * 0.1;


        this.vertices.push(x, y, z);

        if (h < 9) {
          if (face == this.faces-1) {
            this.indices.push(face + h * this.faces, face + h * this.faces + 1, (face + 1) * h );
            this.indices.push(face + h*this.faces,  face + this.faces + h*this.faces, face + h*this.faces + 1);
          }
          else {
            this.indices.push(face + h * this.faces, face + h * this.faces + this.faces + 1, face + 1 + h * this.faces);
            this.indices.push(face + h*this.faces,  face + this.faces + h*this.faces, face + h*this.faces + this.faces + 1);
          }
        }
        this.normals.push(x, y, z);
      }

      theta += theta;
    }

    this.primitiveType = this.scene.gl.TRIANGLES;
    this.initGLBuffers();

  }

}
