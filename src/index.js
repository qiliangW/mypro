import Vuex from "vuex"
import Vue from "vue"
Vue.use(Vuex)
 const store = new Vuex.Store({
     state:{
        n:10
     },
    actions:{
        handladd({commit},s){
           commit("handleadd",s)
          // console.log(s)
        }
    },
    mutations:{
         handleadd(state,m){
            state.n += m
            console.log(this.state.n)
         }
    }
})
export default store

