import VueRouter from 'vue-router'

import HomeView from '../pages/HomeView.vue'
import AboutView from '../pages/AboutView.vue'

Vue.use(VueRouter)//添加全局属性或方法

export default new VueRouter({//返回一个实例
  routes: [
    { path: '/home',  component: HomeView  },
    { path: '/about', component: AboutView }
  ]
})
