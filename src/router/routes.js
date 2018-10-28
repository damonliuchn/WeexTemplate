import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'
const host = 'http://192.168.30.12:8083';//替换成你电脑的IP，并保证手机能访问到电脑(连同一个wifi就好啦)

export default [
    { path: '/home',  component: HomeView  },
    { path: '/about', component: AboutView , remoteBundle: host +"/dist/pages/AboutView.js"}
]