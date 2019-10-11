<template>
    <div>
         商品列表
    <ul>
        <li v-for="(item,index) in goodsList">
         <router-link :to="{path:'/goods',query:{id:index,name:item}}">{{item}}</router-link>
        </li>
    </ul>
         <!-- <route-view></route-view> -->
    </div>
   
</template>
<script>
export default {
    data(){
        return{
            goodsList:['苹果','香蕉',"栗子"]
        }
    }
}
</script>
<style scoped>

</style>