#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord + vec2(0.0,0.0));
	
	gl_FragColor = color;
	
}