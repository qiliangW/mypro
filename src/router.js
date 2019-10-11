import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
//import about from "./views/About.v"
import Goods from "./views/pingguo.vue"

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:"/",
      redirect:"/Home"
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path:"/list",
      name:"list",
      component:function(){
        return import("./views/Detail.vue")
      }
     
    },
    {
      path:"/goods",
      name:"goods",
      component:Goods
    }
  
  ]
})
