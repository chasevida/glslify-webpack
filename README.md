# GLSLify w/ Webpack



Ok, so this was slightly confusing. Setting up [glslify](https://github.com/glslify/glslify) with [webpack](https://webpack.js.org/) can be a little tricky and depending on your setup there can be some unexpected quirks - at least there was for me. While trying to get glslify to play nicely with my webpack config I ran into several issues and depending on your setup they seem to flip around. So, to get a handle on how to get this all working correctly I stripped everything right back to a bare bones setup and tried a couple of suggested webpack loaders and babel plugins, some of which appear to be out of date and awaiting [fixes](https://github.com/glslify/babel-plugin-glslify/pull/9.). Overall the process hasn't been exactly smooth or encouraging so hopefully this repo helps out the next person who finds themselves struggling.



## Approaches x3

This repo covers three somewhat basic approaches to incorporating glslify with a webpack setup. They cover the following:



1. [babel-plugin-glslify](https://github.com/glslify/babel-plugin-glslify) - uses babel
2. [glslify-loader](https://github.com/glslify/glslify-loader) - an older webpack loader which doesn't seem to be recommended anymore
3. [ify-loader](https://github.com/browserify/ify-loader) - a newer browserify based loader for webpack



Each of the above approaches are explored in a seperate workspace:



1. [test-babel-plugin-glslify](test-babel-plugin-glslify)
2. [test-glslify-loader](test-glslify-loader)
3. [test-ify-loader](test-ify-loader)



### Summary of Approaches

Below is a summary table outlining at a high-level what works with which setup. Jump into each workspace and run the respective commands to view the output in a browser as well as any compiler errors.



| Workspace                                | Method                         | File                                     | Works? |
| ---------------------------------------- | ------------------------------ | ---------------------------------------- | :----: |
| [test-babel-plugin-glslify](test-babel-plugin-glslify) | `glslify`` `                   | [glsl-inline.js](test-babel-plugin-glslify/src/glsl-inline.js) | **½**  |
| [test-babel-plugin-glslify](test-babel-plugin-glslify) | `glslify('./file.glsl')`       | [glsl-file.js](test-babel-plugin-glslify/src/glsl-file.js) |   ✔    |
| [test-babel-plugin-glslify](test-babel-plugin-glslify) | `glslify(/* shader string */)` | [glsl-import.js](test-babel-plugin-glslify/src/glsl-import.js) |   ✘    |
| [test-glslify-loader](test-glslify-loader) | `glslify`` `                   | [glsl-inline.js](test-glslify-loader/src/glsl-inline.js) |   ✘    |
| [test-glslify-loader](test-glslify-loader) | `glslify('./file.glsl')`       | [glsl-file.js](test-glslify-loader/src/glsl-file.js) |   ✘    |
| [test-glslify-loader](test-glslify-loader) | `glslify(/* shader string */)` | [glsl-import.js](test-glslify-loader/src/glsl-import.js) |   ✔    |
| [test-ify-loader](test-ify-loader)       | `glslify`` `                   | [glsl-inline.js](test-ify-loader/src/glsl-inline.js) |   ✔    |
| [test-ify-loader](test-ify-loader)       | `glslify('./file.glsl')`       | [glsl-file.js](test-ify-loader/src/glsl-file.js) |   ✔    |
| [test-ify-loader](test-ify-loader)       | `glslify(/* shader string */)` | [glsl-import.js](test-ify-loader/src/glsl-import.js) |   ✘    |



In summary the `ify-loader` is definitely the best choice. However, if you are using babel then you will want to use the `babel-plugin-glslify` babel plugin but you will need to be careful not to use tagged template literals that contain variables (I'm still working out why Babel is concatinating these and if that's the exact issue here).



##  Install & Run

If you have [Nodejs](https://nodejs.org/en/) > 8.9 and [Yarn](https://yarnpkg.com/en/) installed you can use the following:

 

```
git clone git@github.com:chasevida/glslify-webpack.git
cd glslify-webpack

yarn install
```



To run examples in any of the three workspaces change directory into one and then run one of the following three commands:



```
cd <workspace>

yarn start:babel-glslify
yarn start:glslify-loader
yarn start:ify-loader
```

