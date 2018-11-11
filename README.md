## WeexTemplate

>一个Weex开发的极简模板工程，采用Vue v2.0、Webpack v3、Vue Loader v14,并默认配置了Vuex、VueRouter，没有多余依赖，适合作为初始工程进行扩展。所有依赖升级到最新版。
包含四种架构：webspa-nativempa、webspa-nativespa、nativempa、webspa

## 一、webspa-nativempa
> web用vuerouter、native用navigator
小程序类似 链接 ithome-lite

## 二、webspa-nativespa
>都用vuerouter

## 三、nativempa
navigator

## 四、webspa
vuerouter


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

## Thank
[heuuLZP/weex-vue-router](https://github.com/heuuLZP/weex-vue-router)

## License
[MIT](http://opensource.org/licenses/MIT)