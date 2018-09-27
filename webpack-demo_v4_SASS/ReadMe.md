# Webpack step by step
A Beginner�s Guide to Webpack 4 and Module Bundling
https://www.sitepoint.com/beginners-guide-webpack-module-bundling/
src https://github.com/markbrown4/webpack-demo

v#0.1
Q05459@M005554MIS MINGW64 /c/IntelliJ_WS_tutorials
$ mkdir webpack-demo && cd webpack-demo
$ npm init -y
$ npm install --save-dev webpack webpack-cli
$ mkdir dist
$ mkdir src

add index.js and index.html as in article
add webpack.config.js as in article
add script section to package.json

$ npm run develop


## v#0.2 Modules
- import lodash-es to use groupBy
	- Lodash makes JavaScript easier by taking the hassle out of working with arrays, numbers, objects, strings, etc.
	- see: https://lodash.com/  and https://github.com/lodash/lodash/tree/es
- demo import/export modules

## v#0.3 Loaders
- add babel loader > npm install --save-dev "babel-loader@^8.0.0-beta" @babel/core @babel/preset-env
	- add babelrc config> prevents Babel from transpiling import and export statements into ES5
	- add babel loaders to webpack.config.js
- add babel plugin > npm install --save-dev babel-plugin-syntax-dynamic-import
- add Sass loader > npm install --save-dev style-loader css-loader sass-loader node-sass
	- add css loaders to webpack.config.js
	- These loaders are processed in reverse order:
		- sass-loader transforms Sass into CSS.
		- css-loader parses the CSS into JavaScript and resolves any dependencies.
		- style-loader outputs our CSS into a <style> tag in the document.
- add scss into src
- import './style.scss' in index.js
- run > webpack-demo>npm run develop
	- confirm style changes
	
## v#0.4 File Loaders
- add file loader > npm install --save-dev file-loader
- Download a test image with this command:
	>curl https://raw.githubusercontent.com/sitepoint-editors/webpack-demo/master/src/code.png --output src/code.png
- in index.js add > import './image-example'
- add image-example.js
- Background images in our CSS are also processed by file-loader
	- modify Background in style.scss
- run >npm run develop
	- confirm added image and change background
	
## Build CSS from SCSS
- use sass-loader in webpack.config.js -> produce javascript
- use node-sass in package.json as prebuild step
    - "prebuild": "node-sass --include-path scss ./src/sass/company-style.scss   dist/company-style.css",
    - see [compile your sass with npm](https://medium.com/@brianhan/watch-compile-your-sass-with-npm-9ba2b878415b)