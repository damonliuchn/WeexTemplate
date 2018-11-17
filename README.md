## WeexTemplate

>一个Weex开发的极简模板工程，采用Vue v2.0、Webpack v3、Vue Loader v14,并默认配置了Vuex、VueRouter，没有多余依赖，适合作为初始工程进行扩展。所有依赖升级到最新版。
包含四种架构：webspa-nativempa、webspa-nativespa、nativempa、webspa，如果仅使用weex开发native则推荐nativempa模式。

## 一、webspa-nativempa
> web用VueRouter、native用weex提供的navigator做页面跳转，实现Web单页面应用，Native多页面应用

- 代码在master分支
- 与微信小程序开发模式类似，h5单页面，小程序多页面。工程参考[ithome-lite](https://github.com/F-loat/ithome-lite)

## 二、webspa-nativespa
> web和native都使用VueRouter做页面跳转，实现Web和Native单页面应用

- 代码在webspa-nativespa分支
## 三、nativempa
> 仅weex native工程，用weex提供的navigator做页面跳转，实现Native多页面应用

- 代码在nativempa分支

## 四、webspa
> 仅weex web工程，用VueRouter做页面跳转，实现Web单页面应用

- 代码在webspa分支


## 下载

```
git clone git@github.com:MasonLiuChn/WeexTemplate.git
```

## 运行

编译

```
npm run build
或
npm run build:h5
```
自动编译

```
npm run dev
或
npm run dev:h5
```
启动服务

```
npm run serve
```

## 注意

- Weex Web 在PC浏览器下click有问题，在WeexNative和手机浏览器下正常。在PC浏览器下可使用click.native

## Thanks
[heuuLZP/weex-vue-router](https://github.com/heuuLZP/weex-vue-router)

## License
[MIT](http://opensource.org/licenses/MIT)