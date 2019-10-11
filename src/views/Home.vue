<template>
  <div class="home">
     <el-input v-model="input" placeholder="请输入内容"></el-input>
    <DDD ref="name" :fn="fn1"></DDD>
 <el-button @click="fn1">默认按钮</el-button>
 <Dia :ishow = "isshow" @OOO="fn3" :str="str"></Dia>
   {{this.$store.state.n}}
    <el-select v-model="value" placeholder="请选择" @change="change" empty="无内容">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.label">
    </el-option>
  </el-select>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="日期"
      width="180">
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="180">
      <template slot-scope="scope">
     {{scope.row.name }}
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
       
      </template>
    </el-table-column>
  </el-table>
  <div class="container">
  <div class="left"></div>
  <div class="main">我是中间内容我是中间内容我是中间内容我是中间内容我是中间内容我是中间内容我是中间内容我是中间内容我是中间内容我是中间内容</div>
  <div class="right"></div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import DDD from "./Ggg.vue"
import Dia from "./Dia"
import "./pg.css"
export default {
  name: 'home',
  data(){
       return{
         isshow:false,
         fn:this.fn1,
         input:"",
         str:"这是一个弹出",
        //    options: [{
        //   value: '选项1',
        //   label: '黄金糕'
        // }, {
        //   value: '选项2',
        //   label: '双皮奶'
        // }, {
        //   value: '选项3',
        //   label: '蚵仔煎'
        // }, {
        //   value: '选项4',
        //   label: '龙须面'
        // }, {
        //   value: '选项5',
        //   label: '北京烤鸭'
        // }],
        //  value: ''
          tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
         
       }
  },
  methods:{
    change(value){
        console.log(value)
    },
  fn1(value){
   
    // console.log(1)
      // console.log(this.$refs.name.input = "") 
    this.isshow = true
    // console.log(this.isshow)
  },
  fn3(num){
   
    this.isshow = num
  },
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
  },
  components: {
    DDD,
    Dia
  }
}
</script>
