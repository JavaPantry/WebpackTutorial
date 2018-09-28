const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production'
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

            /*,{
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader'
                }, {
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            }*/

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
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
                /* same as above, use if less details required
                use: ['sass-loader']
                */
            }
        ]
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

    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: devMode ? '[name].css' : '[name].[hash].css'
            //chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ],

    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    /*{
                        loader: 'style-loader'
                    },*/
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
                /* same as above, use if less details required
                use: ['sass-loader']
                */
            }
        ]
    }
});

// Return Array of Configurations
module.exports = [
    bundleConfig, cssConfig
];

