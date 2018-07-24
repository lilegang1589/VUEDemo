<template>
  <div class="__content" ref="container">
    <div class="description">
      具体功能请查看
      <a href="http://element.eleme.io/#/zh-CN/component/installation"
       style="text-decoration:underline;color:blue;" target="_blank">ElementUI官网</a>
    </div>
  <div>现在时间是{{date}}</div>
    <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="省份"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="市区"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="邮编"
      width="120">
    </el-table-column>
    <el-table-column
      label="操作"
      >
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
  <detail :opts="dialog"></detail>
  </div>
</template>

<script>

import detail from './tabledetail'

export default {
  components:{
    detail
  },
  data() {      
      return {
        dialog:{
          visible:false,
          form:{}
        },
        
        date:new Date().toLocaleTimeString(),
        timer:1000,
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }]
      }
    },
    methods: {
      handleClick(row) {
        this.dialog.visible=true;
        this.dialog.form=row;
      },
      setHeight() {
        let h = document.documentElement.clientHeight || document.body.offsetHeight;
        this.$refs.container.style.minHeight = h - 60 - 80-40 +'px';
      },
    },
    mounted(){
      this.setHeight();
      var that = this; //声明一个变量指向vue实例this,保证作用域一致
        this.timer = setInterval(function() {
            that.date = new Date().toLocaleTimeString();//修改数据date
        }, 1000);
    },
    beforeDestroy () {
    if(this.timer) {
        clearInterval(this.timer);//在vue实例销毁钱，清除我们的定时器
    }
 }   
}
</script>

<style lang="scss">

</style>
