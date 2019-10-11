<template>
   <div>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <button  @click="fb">11111111111</button>
   </div>
</template>
<script>
export default {
       data(){
           return{
                input:""
           }
       },
       props:["fn"],
       methods:{
           fb(){
               this.fn(this.input)
           }
       }
}
</script>