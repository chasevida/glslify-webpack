# glslify-loader



This workspace makes use of a pretty bare bones webpack setup (no babel) with the [glslify-loader](https://github.com/glslify/glslify-loader).



The compositions under test here are:

| No.  | Method                       | Command             | File                                     | Yes/No? |
| :--- | ---------------------------- | ------------------- | ---------------------------------------- | :-----: |
| 1    | glslify``                    | `yarn start:inline` | [./src/glsl-inline.js](src/glsl-inline.js) |    ✘    |
| 2    | glslify('./file.glsl')       | `yarn start:file`   | [./src/glsl-file.js](src/glsl-file.js)   |    ✘    |
| 3    | glslify(/* shader string */) | `yarn start:import` | [./src/glsl-import.js](src/glsl-import.js) |    ✔    |



## Issues

### 1. Inline

Calling ```glslify`` ```compiles with webpack but does not include and compile any required shader pragma imports. While compiling with webpack no errors are thrown but when viewed in the browser you can see that no additional shaders are transformed.

### 2 File

Calling `glslify('./glsl/basic.vert')` fails silently. While it compiles with webpack (without errors) you can see when running it in the browser that the file was not required/imported and transformed.