const pathTo = require('path');
//const fs = require('fs-extra');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
//const VueLoaderPlugin = require('vue-loader/lib/plugin')
const entry = './src/main.js';

const plugins = [
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    // new webpack.BannerPlugin({
    //     banner: '// { "framework": "Vue" } \n',
    //     raw: true
    // }),
    new CopyPlugin([
        {from: pathTo.join(__dirname, './src/index.html'), to: pathTo.join(__dirname, './dist')}
    ])
];

const webConfig = {
    context: pathTo.join(__dirname),
    entry: entry,
    output: {
        path: pathTo.join(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.vue(\?[^?]+)?$/,
                use: [
                    {
                        loader: 'vue-loader'
                        //weex-vue-render 如果要升级到 1.x 需要配置如下信息
                        // "weex-vue-precompiler": "^0.1.18",
                        // "autoprefixer": "^7.2.3",
                        // "postcss-plugin-px2rem": "^0.7.0",
                        // "postcss-plugin-weex": "^0.1.6",
                        // options:{
                        //     optimizeSSR: false,
                        //     postcss: [
                        //         require('autoprefixer')({
                        //             browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12']
                        //         }),
                        //         require('postcss-plugin-px2rem')({ rootValue: 75, minPixelValue: 1.01 }),
                        //         require('postcss-plugin-weex')()
                        //     ],
                        //     compilerModules: [
                        //         {
                        //             postTransformNode: el => {
                        //                 require('weex-vue-precompiler')()(el)
                        //             }
                        //         }
                        //     ]
                        // }
                    }
                ]
            }
        ]
    },
    plugins: plugins
};

module.exports = [webConfig];
