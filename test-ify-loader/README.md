# ify-loader



This workspace makes use of a pretty bare bones webpack setup (no babel) with the [ify-loader](https://github.com/browserify/ify-loader).



The compositions under test here are:

| No.  | Method                       | Command             | File                                     | Yes/No? |
| :--- | ---------------------------- | ------------------- | ---------------------------------------- | :-----: |
| 1    | glslify``                    | `yarn start:inline` | [./src/glsl-inline.js](src/glsl-inline.js) |    ✔    |
| 2    | glslify('./file.glsl')       | `yarn start:file`   | [./src/glsl-file.js](src/glsl-file.js)   |    ✔    |
| 3    | glslify(/* shader string */) | `yarn start:import` | [./src/glsl-import.js](src/glsl-import.js) |    ✘    |



## Issues

### 3. Shader string

Importing both the `vertex` and `fragment` shaders in via `require` and then parsing those using `glslify()` method throws an error. I'm not sure if this is expected behaviour (i.e. it only expects a shader file path) or if the method is capable of parsing the shader string directly.

