// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
//import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters:{
        // 参数列表state指的是state数据
        getCount(state){
            return state.count;
        }
    },
    actions: {
        decrement({commit, state}){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("increment");
        }
    },
    mutations: {
        increment: (state) => {
            const obj = state
            obj.count += 1
        },
        decrement: (state) => {
            const obj = state
            obj.count -= 1
        }
    }
})

export default store
