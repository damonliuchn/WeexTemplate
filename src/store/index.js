//import Vue from "vue";  //weex native 无需引入vue，h5 在html里引入vue
import Vuex from "vuex";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0
    },
    getters:{
        getCount(state){
            return state.count;
        }
    },
    actions: {
        decrement({commit, state}){
            // 跟后台打交道
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
