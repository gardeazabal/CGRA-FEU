#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform float suppliesDelivered;

uniform sampler2D uSampler;

void main() {
    vec3 colorR = vec3(1.0, 0.0, 0.0);
    vec3 colorG = vec3(0.0, 1.0, 0.0);
    vec3 colorRG;
    vec4 color = texture2D(uSampler, vTextureCoord);
    colorRG = mix(colorR,colorG, vTextureCoord.x);

    // dimensoes 1.5 x 0.2
    if((vTextureCoord.y > 0.6 && vTextureCoord.y < 0.8) && (vTextureCoord.x > 0.1 && vTextureCoord.x < 0.85))
        if (vTextureCoord.x < 0.1 + 0.15*suppliesDelivered)
            color = vec4(colorRG, 1);
        else
            color = vec4(0.5, 0.5, 0.5, 1.0);
	gl_FragColor = color;
}