import App from './App.vue'
import store from './store'

App.el = '#root'
App.store = store

new Vue(App)