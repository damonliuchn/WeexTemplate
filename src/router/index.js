import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)//添加全局属性或方法

export default new VueRouter({//返回一个实例
  routes: routes
})
