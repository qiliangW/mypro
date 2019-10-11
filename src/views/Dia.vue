<template>
    <div>
        <el-dialog
  title="提示"
  :visible.sync="ishow"
  width="30%"
  center>
  <span>{{this.str}}</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click="ishow = false">取 消</el-button>
    <el-button type="primary" @click="fn">确 定</el-button>
  </span>
</el-dialog>
        </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:["ishow","str"],
    methods:{
        fn(){
            this.$emit("OOO",false)
        }
    }
}
</script>