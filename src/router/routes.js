const host = 'https://gitee.com/masonliu/MockData/raw/master';//替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)

export default [
    { path: '/home'  },
    { path: '/about', remoteBundle: host +"/WeexAboutView.js"}
]