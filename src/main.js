import App from './App.vue'
import router from './router'
import store from './store'

App.el = '#root'
App.router = router
App.store = store

new Vue(App)