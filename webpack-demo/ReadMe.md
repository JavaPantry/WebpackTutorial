# Webpack step by step
A Beginner’s Guide to Webpack 4 and Module Bundling
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

## v#0.5 Code Splitting
- add demo chat module which loaded @ run-time by button click

## v#0.6 Plugins for diferent env

Rename webpack.config.js to webpack.common.js and add a config file for development and production.

- |- webpack.config.js
	|
	V
+ |- webpack.common.js
+ |- webpack.dev.js
+ |- webpack.prod.js

We’ll use webpack-merge to combine our common config with the environment-specific config:

> npm install --save-dev webpack-merge

### Split CSS

> npm install --save-dev extract-text-webpack-plugin@4.0.0-beta.0
> npm install --save-dev extract-text-webpack-plugin
- move scss rules from webpack.common.js to webpack.dev.js

### Generating HTML

Whenever our outputs have changed, we’ve had to keep updating index.html to reference the new file paths
We may as well add clean-webpack-plugin at the same time to clear out our /dist directory before each build
> npm install --save-dev html-webpack-plugin clean-webpack-plugin

compare index.html after
>npm run develop
and 
>npm run build

Dev build will merge css into app.bundle.js
Prod build will write separate styles.css and generate index.html to inlude it

## v#0.7 Webpack dev-server
The webpack-dev-server provides you with a simple web server and gives you live reloading, so you don’t need to manually refresh the page to see changes.

> npm install --save-dev webpack-dev-server

- update package.json to use dev-server

  {
    ...
    "scripts": {
-     "develop": "webpack --watch --config webpack.dev.js",
+     "develop": "webpack-dev-server --config webpack.dev.js",
    }
    ...
  }
> npm run develop
> Project is running at http://localhost:8080/
> webpack output is served from /

Note: \dist folder is removed and hosted under dev-server

## v#0.8 HotModuleReplacement
- add `require('webpack')` to webpack.dev.js
- and devServer with webpack.HotModuleReplacementPlugin plugin

Read more about HTTP/2 
[Read more about this over at Webpack & HTTP/2.](https://medium.com/webpack/webpack-http-2-7083ec3f3ce6)