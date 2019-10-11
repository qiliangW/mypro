<template>
  <div id="app">
    <router-view />
    
<Footer></Footer>
     
11111
    
   

  </div> 

</template>
<script>
import Footer from "./views/Footer.vue"
export default {
     data(){
       return{
           ishow:true,
           index:0,
           str:""
       }
     },
     components:{
       Footer
     },
     methods:{
       fn1(){
          this.str = ""
       },
        fn(){
          this.ishow = false
          this.$router.push('/about')
          this.index++
          //console.log(this.index) 
        }
     },
     created(){
        //console.log(this.$router)
     }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
