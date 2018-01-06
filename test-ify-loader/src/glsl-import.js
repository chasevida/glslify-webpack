const glslify = require('glslify')
const fragment = require('./glsl/basic.frag')
const vertex = require('./glsl/basic.vert')


console.log(`Vertex Shader`)
console.log(vertex)

console.log(`Fragment Shader`)
console.log(fragment)

const vertexShader = glslify(vertex)
const fragmentShader = glslify(fragment)

console.log(`Vertex Shader`)
console.log(vertexShader)

console.log(`Fragment Shader`)
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
