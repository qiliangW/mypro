<template>
    <div>
        <input type = "button" value="返回上一页" @click="$router.back()"/>
      {{this.$route.query.name}}
       {{this.$route.query.id}}
       {{count}}
       <input @click="handleadd(2)" type="button" value="增加"/>
       <el-input v-model="input" placeholder="请输入内容"></el-input>
 
    </div>
</template>
<script>
import Vuex from "vuex"
import "./pg.css"
export default {
    data(){
      return{
           input:""
      }
    },
    created(){
        // console.log(this.$route)
        // console.log(this.$router)
    // console.log(this.input)
    },
    computed:Vuex.mapState({
        count:(state)=>{
            return state.n
        }
    })
      
    ,
    methods:{...Vuex.mapMutations({
        handleadd:"handleadd"
    })}
    // fn(m){
    //      this.$store.dispatch({
    //          type:"handladd",
    //          num:m
    //      })
    // }
    ,
    mounted(){
        console.log(this.$store)
    },
    beforeRouteEnter(to,from,next){
        //console.log(to)
      //  console.log(this)
        document.title = to.name
        next()
        
    }
    
}
</script>
<style scoped>

</style>