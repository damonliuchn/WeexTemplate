const pathLib = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');
const entry = './src/main.js';

var bannerPlugin = new webpack.BannerPlugin({
    banner: '// { "framework": "Vue" } \n',
    raw: true
})

const weexConfig = {
    entry: entry,
    output: {
        path: pathLib.join(__dirname, 'dist'),
        filename: '[name].native.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                }],
                exclude: /node_modules/
            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [{
                    loader: 'weex-loader'
                }]
            }
        ]
    },
    plugins: [bannerPlugin],
};
module.exports = [weexConfig];
