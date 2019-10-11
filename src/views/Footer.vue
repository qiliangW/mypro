<template>
    <div class="footerwarp">
    <ul>
      <li v-for="(item,index) in Foolist">
          <router-link :to="{path:item.path}">{{item.name}}</router-link>
          </li>  
    </ul>
    </div>
</template>
<script>
//const Foolist = [{path:"/",name:"my"},{path:"/moie",name:"影院"},{path:"/detail",name:"详情"}]
export default {
      data(){
          return{
              Foolist:[{path:"/",name:"my"},{path:"/about",name:"关于我们"},{path:"/list",name:"List"}]
          }
      }
}
</script>
<style scoped>
   ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* position: fixed; */
        padding:1rem;
        bottom:0;
        height:100%;

   }
   div{
       position: fixed;
       bottom:0;
       width:100%;
   }
   

   
</style>