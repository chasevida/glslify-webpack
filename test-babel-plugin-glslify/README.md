# babel-plugin-glslify



This workspace makes use of a pretty bare bones webpack setup with babel and [babel-plugin-glslify](https://github.com/glslify/babel-plugin-glslify).



The compositions under test here are:

| No.  | Method                       | Command             | File                                     | Yes/No? |
| :--- | ---------------------------- | ------------------- | ---------------------------------------- | :-----: |
| 1    | glslify``                    | `yarn start:inline` | [./src/glsl-inline.js](src/glsl-inline.js) |  **½**  |
| 2    | glslify('./file.glsl')       | `yarn start:file`   | [./src/glsl-file.js](src/glsl-file.js)   |    ✔    |
| 3    | glslify(/* shader string */) | `yarn start:import` | [./src/glsl-import.js](src/glsl-import.js) |    ✘    |



## Issues

### 1. Inline with variable(s)

Currently when using a tagged template literal with a variable within it, the compiler will error. I'm still working through whether this is a babel tagged template expression issue or an issue with glslify.



### 3. Shader string

Importing both the `vertex` and `fragment` shaders in via `require|import` and then parsing those using `glslify()` method throws an error. I'm not sure if this is expected behaviour (i.e. it only expects a shader file path) or if the method is capable of parsing the shader string directly.



### Babel-plugin-glslify - `.toString(0)`

The [babel-plugin-glslify](https://github.com/glslify/babel-plugin-glslify) has a [glslify-sync-hack.js](https://github.com/glslify/babel-plugin-glslify/blob/master/lib/glslify-sync-hack.js#L31) file with a method that calls [`.toString(0)` on line 31](https://github.com/glslify/babel-plugin-glslify/blob/master/lib/glslify-sync-hack.js#L31) which is incompatible with later versions of Nodejs (at least 8.9+ which I've tested). Changing this method to call `.toString()` resolves the issue. As such there is a pre-start script that copies across a "fixed" version of this file into the local `node_modules` directory. There is [PR #6](https://github.com/glslify/babel-plugin-glslify/pull/9) with a fix but this has been open since June 2017 without much conversation as to why it's being delayed.