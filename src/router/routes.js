import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
const basePath = 'http://172.20.12.26:10004/dist';//替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)

export default [
    { path: '/home',  component: HomeView  },
    { path: '/about', component: AboutView , remoteBundle:"http://172.20.14.34:8083/dist/pages/AboutView.js"}
]