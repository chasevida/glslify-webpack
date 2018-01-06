import glslify from 'glslify'


/*
// The below will error during compiling with Babel

const vertext = `
void main () {
  gl_Position = projectionMatrix *
                  modelViewMatrix *
                  vec4(position,1.0);
}
`

const vertexShader = glslify`${vertext}`
*/

const vertexShader = glslify`
void main () {
  gl_Position = projectionMatrix *
                  modelViewMatrix *
                  vec4(position,1.0);
}
`

const fragmentShader = glslify`
#pragma glslify: snoise2 = require('glsl-noise/simplex/2d')

void main () {
  gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
}
`

console.log('Vertex Shader')
console.log(vertexShader)

console.log('Fragment Shader')
console.log(fragmentShader)

const output = `
  <h1>Vertex Shader</h1>
  <pre><code class="glsl">${vertexShader}</code></pre>
  <br />
  <h1>Fragment Shader</h1>
  <pre><code class="glsl">${fragmentShader}</code></pre>
  <br />
`

document.body.innerHTML = output
hljs.initHighlightingOnLoad()
