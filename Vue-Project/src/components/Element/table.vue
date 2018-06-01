<template>
  <div class="container" ref="container">
    <div class="description">
      具体功能请查看
      <a href="http://element.eleme.io/#/zh-CN/component/installation" style="text-decoration:underline;color:blue;" target="_blank">ElementUI官网</a>
    </div>
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
      width="100">
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
    }
}
</script>

<style lang="scss">
.container{
  margin: 24px;
  padding: 24px;
  background: white;
  .description{

  }
}
</style>
