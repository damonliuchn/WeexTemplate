const pathTo = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const entry = './src/main.js';

const plugins = [
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.BannerPlugin({
        banner: '// { "framework": "Vue" } \n',
        raw: true
    }),
    new CopyPlugin([
        {from: pathTo.join(__dirname, './src/index.html'), to: pathTo.join(__dirname, './dist')}
    ]),
    new webpack.DefinePlugin({
        'IS_DEV': JSON.stringify(false),
    }),
];

const webConfig = {
    context: pathTo.join(__dirname),
    entry: entry,
    output: {
        path: pathTo.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        // webpack 2.0
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                    loader: 'babel-loader'
                }],
                exclude: /node_modules/
            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [

                    {
                        loader: 'vue-loader'
                    }]
            }
        ]
    },
    plugins: plugins
};

module.exports = [webConfig];
