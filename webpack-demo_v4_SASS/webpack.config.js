const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')

var config = {
    // common Configuration
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }

            ,{
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }

            ,{
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }

};

var bundleConfig = merge( config, {
    name: "js-bundle",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
});


// need to install node-sass >webpack-demo_v4>npm install node-sass --save-dev
var cssConfig = merge( config,{
    name: "css-bundle",
    entry: "./src/sass/company-style.scss",
    output: {
        filename: "company-style.js",
        path: path.resolve(__dirname, 'dist')
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                /*use: [{
                    loader: 'sass-loader'
                }]*/
                use: ['sass-loader']
            }
        ]
    }
});

// Return Array of Configurations
module.exports = [
    bundleConfig, cssConfig
];

