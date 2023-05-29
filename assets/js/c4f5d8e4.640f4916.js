"use strict";(self.webpackChunkknowledge_base=self.webpackChunkknowledge_base||[]).push([[195],{8472:(t,e,r)=>{r.r(e),r.d(e,{default:()=>u});var s=r(7294),i=r(6010),n=r(7961),a=r(9960),l=r(2263);const o={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"},h=r.p+"assets/images/ghoul-36de342dc7c9a66d63f9481085925def.jpg",c=r.p+"assets/images/noise-1934aa47770dd85847de43aeeab8063c.png";function g(){const{siteConfig:t}=(0,l.Z)();return(0,s.useEffect)((()=>{!async function(){const[t,e]=await Promise.all([d(h),d(c)]),r=new m(document.querySelector("canvas")),{gl:s}=r;r.init("\n      precision mediump float;\n\n      attribute vec2 aPosition;\n      attribute vec2 aUV;\n\n      varying vec2 vUV;\n      varying vec2 vPos;\n\n      void main() {\n          gl_Position = vec4(aPosition, 0.0, 1.0);\n          vUV = aUV;\n          vPos = aPosition;\n      }\n      ","\n      precision mediump float;\n\n      uniform sampler2D uTexture1;\n      uniform sampler2D uTexture2;\n\n      uniform float uVar;\n\n      varying vec2 vUV;\n      varying vec2 vPos;\n\n\n      float random (vec2 st) {\n          return fract(sin(dot(st.xy,vec2(12.9898,78.233)))* 43758.5453123);\n      }\n\n      void main() {\n          vec4 color1 = texture2D(uTexture1, vUV);\n          vec4 color2 = texture2D(uTexture2, vUV);\n          vec4 color3 = vec4(vec3(random(vUV)), 1.);\n\n          if (color2.r - uVar < 0.0) {\n              discard;\n          }\n\n          gl_FragColor = color1;\n      }\n     ").loadBuffer(new Float32Array([1,1,1,1,-1,1,0,1,-1,-1,0,0,-1,-1,0,0,1,-1,1,0,1,1,1,1])).setAttrib("aPosition",2,s.FLOAT,!1,16,0).setAttrib("aUV",2,s.FLOAT,!1,16,8).loadTexture(t).setUniform("uTexture1","uniform1i",0).loadTexture(e).setUniform("uTexture2","uniform1i",1);let i=0,n=!1;!function t(){const e=s.getUniformLocation(r.program,"uVar");s.uniform1f(e,n?i-=.01:i+=.01),i>=1&&(n=!0);i<=0&&(n=!1);r.draw(r.gl.TRIANGLES,6),requestAnimationFrame(t)}()}()}),[]),s.createElement("header",{className:(0,i.Z)(o.heroBanner)},s.createElement("div",{className:"container"},s.createElement("canvas",{width:"300",height:"300",style:{borderRadius:"10%"}}),s.createElement("h1",{className:"hero__title"},t.title),s.createElement("p",{className:"hero__subtitle"},t.tagline),s.createElement("div",{className:o.buttons},s.createElement(a.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Musings \u2192"))))}function u(){const{siteConfig:t}=(0,l.Z)();return s.createElement(n.Z,{title:"H_e_l_l_o",description:"Musings <head />"},s.createElement(g,null),s.createElement("main",null))}console.log(h);class m{gl;program;vs;fs;buffer;textures=[];constructor(t){if(t instanceof HTMLCanvasElement)return this.gl=t.getContext("webgl"),this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!0),this;throw new Error("please pass canvas element")}init(t,e){const r=this.vs=this.gl.createShader(this.gl.VERTEX_SHADER);this.gl.shaderSource(r,t),this.gl.compileShader(r);const s=this.fs=this.gl.createShader(this.gl.FRAGMENT_SHADER);this.gl.shaderSource(s,e),this.gl.compileShader(s);const i=this.program=this.gl.createProgram();return this.gl.attachShader(i,r),this.gl.attachShader(i,s),this.gl.linkProgram(i),this.gl.useProgram(i),this}loadBuffer(t){const e=this.buffer=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,e),this.gl.bufferData(this.gl.ARRAY_BUFFER,t,this.gl.STATIC_DRAW),this}loadTexture(t){const e=this.gl.createTexture();return this.gl.activeTexture(this.gl["TEXTURE"+this.textures.length]),this.gl.bindTexture(this.gl.TEXTURE_2D,e),this.gl.texImage2D(this.gl.TEXTURE_2D,0,this.gl.RGBA,this.gl.RGBA,this.gl.UNSIGNED_BYTE,t),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_MIN_FILTER,this.gl.LINEAR),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_S,this.gl.CLAMP_TO_EDGE),this.gl.texParameteri(this.gl.TEXTURE_2D,this.gl.TEXTURE_WRAP_T,this.gl.CLAMP_TO_EDGE),this.textures.push(e),this}setAttrib(t,e,r,s,i,n){const a=this.gl.getAttribLocation(this.program,t);return this.gl.vertexAttribPointer(a,e,r,s,i,n),this.gl.enableVertexAttribArray(a),this}setUniform(t,e,r){const s=this.gl.getUniformLocation(this.program,t);return this.gl[e](s,r),this}draw(t,e){this.gl.viewport(0,0,this.gl.canvas.width,this.gl.canvas.height),this.gl.clearColor(0,0,0,0),this.gl.clear(this.gl.COLOR_BUFFER_BIT),this.gl.drawArrays(t,0,e)}then(t){return t.call(this),this}}function d(t){return new Promise((e=>{const r=new Image;r.src=t,r.onload=function(){e(r)}}))}}}]);