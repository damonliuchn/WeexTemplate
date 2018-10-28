## weex-vue-router页面跳转


nativempa（navigator）
webspa（vuerouter）
webspa-nativempa（web用vuerouter、native用navigator） master
小程序类似 链接 ithome-lite
webspa-nativespa（都用vuerouter）




### 下载

```
git clone https://github.com/heuuLZP/weex-vue-router.git
```

### web端

编译

```
npm run build
```

启动服务

```
npm run serve
```

监听变化

```
npm run dev
```



### 注意

- 在chrome浏览器打开后，需要设置成mobile模式，否则按钮点击无效。(官方demo也有此问题，为止bug)
- 暂不考虑如何打包问题

### 文件目录

```
src
├── APP.vue               ## 根组件
├── main.js               ## 入口文件
├── page
│   ├── AboutView.vue     ## about页
│   └── HomeView.vue      ## home页
└── router.js             ## 路由
```



## demo 

home页

![home](/demo/home.jpeg)

about页

![about](/demo/about.jpeg)

主要是把 vue-router 的狀態放進 vuex 的 state 中，這樣就可以透過改變 state 來進行路由的一些操作，當然直接使用像是 $route.go 之類的也會影響到 state ，會同步的是這幾個屬性
store.state.route.path   // current path (string)
store.state.route.params // current params (object)
store.state.route.query  // current query (object)


https://segmentfault.com/a/1190000006670084
记录下webpack-dev-server的用法.

首先，我们来看看基本的webpack.config.js的写法

    module.exports = {
        entry: './src/js/index.js',
        output: {
            path: './dist/js',
            filename: 'bundle.js'
        }
    }
配置文件提供一个入口和一个出口，webpack根据这个来进行js的打包和编译工作。虽然webpack提供了webpack --watch的命令来动态监听文件的改变并实时打包，输出新bundle.js文件，这样文件多了之后打包速度会很慢，此外这样的打包的方式不能做到hot replace，即每次webpack编译之后，你还需要手动刷新浏览器。

webpack-dev-server其中部分功能就能克服上面的2个问题。webpack-dev-server主要是启动了一个使用express的Http服务器。它的作用主要是用来伺服资源文件。此外这个Http服务器和client使用了websocket通讯协议，原始文件作出改动后，webpack-dev-server会实时的编译，但是最后的编译的文件并没有输出到目标文件夹，即上面配置的:

    output: {
        path: './dist/js',
        filename: 'bundle.js'
    }
注意：你启动webpack-dev-server后，你在目标文件夹中是看不到编译后的文件的,实时编译后的文件都保存到了内存当中。因此很多同学使用webpack-dev-server进行开发的时候都看不到编译后的文件

webpack-dev-server =
dev（watch build）、serve、hot


vue use

插件通常会为 Vue 添加全局功能。插件的范围没有限制——一般有下面几种：

添加全局方法或者属性，如: vue-custom-element

添加全局资源：指令/过滤器/过渡等，如 vue-touch

通过全局 mixin 方法添加一些组件选项，如: vue-router

添加 Vue 实例方法，通过把它们添加到 Vue.prototype 上实现。

一个库，提供自己的 API，同时提供上面提到的一个或多个功能，如 vue-router




https://www.jianshu.com/p/9aff4b5f78e7
@click.native
点击事件失效
官方明确了一些不支持@click='function()'方式的标签

自定义的组件需要

<customComponent @click.native='customClick()'></customComponent>
https://segmentfault.com/q/1010000010269704

而app native 不识别 @click.native