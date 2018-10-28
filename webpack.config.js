const pathLib = require('path');
const fs = require('fs-extra');
const webpack = require('webpack');
const entry = {};
const tempFullPath = pathLib.join(__dirname , 'temp');
const entryFileTempletePath = pathLib.join(__dirname,'src','main.js');

//搜集入口文件并生产对应的入口js文件，实现MPA
function walk(root,path) {
    var fullPath = pathLib.join(root, path);
    fs.readdirSync(pathLib.join(root, path))
        .forEach(function (childName) {
            var childFullPath = pathLib.join(fullPath, childName);
            var stat = fs.statSync(childFullPath);
            if (stat.isFile() && pathLib.extname(childFullPath) === '.vue') {
                var pathAndName = pathLib.join(path, pathLib.basename(childFullPath, '.vue'));
                //path.basename(childFullDir, '.vue') 是获取index 去掉后缀的文件名
                //pathAndName is like pages/xxx
                const entryFullPath = pathLib.join(tempFullPath, pathAndName + '.js');
                fs.outputFileSync(entryFullPath, getEntryFileContent(entryFullPath, childFullPath));
                entry[pathAndName] = entryFullPath + '?entry=true'
            } else if (stat.isDirectory()) {
                walk(root,pathLib.join(path, childName))
            }
        })
}
function getEntryFileContent(entryFullPath, vueFullPath) {
    var entryInDir = pathLib.join(entryFullPath, '../')//获取文件所在文件夹
    let relativePath = pathLib.relative(entryInDir, vueFullPath);//表示在entryInDir下的文件 如果找到 vueFullPath
    let relativeSrcPath = pathLib.relative(entryInDir, pathLib.join(__dirname,'src'));
    relativePath = relativePath.replace(/\\/g, '\/');//防止windows下分隔符问题
    relativeSrcPath = relativeSrcPath.replace(/\\/g, '\/');//防止windows下分隔符问题

    var template = fs.readFileSync(entryFileTempletePath, 'utf8');
    template = template.replace(/\.\//g,relativeSrcPath+'/')//将./ 变化相对src的路径

    let contents = '';
    template.split('\n').forEach(function(v, i) {
        if(v.indexOf('App.vue')>=0){
            contents += 'var App = require(\'' + relativePath + '\')\n';
        }else{
            contents += v + '\n';
        }
    })
    return contents;
}

walk(pathLib.join(__dirname, 'src'),'pages');

const weexConfig = {
    entry: entry,
    output: {
        path: pathLib.join(__dirname, 'dist'),
        filename: '[name].js',
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
    //plugins: plugins,
};
module.exports = [weexConfig];
