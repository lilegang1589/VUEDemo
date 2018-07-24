<template lang="html">
  <!-- <el-dialog
    title="表单详情"
    :visible.sync="opts.visible"   
    @open="openDialog"
    id="formdialog"
    custom-class="formdialog"
    :before-close="handleClose">
    <div class="">
      <el-row class="content-item">
        <p>
          <span class="content-item-label">活动名称：</span>
          <span class="content-item-text">{{opts.form.name}}</span>
        </p>
      </el-row>
      <el-row class="content-item">
        <p>
          <span class="content-item-label">活动区域：</span>
          <span class="content-item-text">{{opts.form.region}}</span>
        </p>
      </el-row>
      <el-row class="content-item">
        <p>
          <span class="content-item-label">活动时间：</span>
          <span class="content-item-text">{{date1}} {{date2}}</span>
        </p>
      </el-row >
      <el-row class="content-item">
        <p>
          <span class="content-item-label">是否及时配送：</span>
          <span class="content-item-text">{{opts.form.delivery?'是':'否'}}</span>
        </p>
      </el-row>
      <el-row class="content-item">
        <p>
          <span class="content-item-label">活动性质：</span>
          <span class="content-item-text">{{type}}</span>
        </p>
      </el-row >
      <el-row class="content-item">
        <p>
          <span class="content-item-label">活动资源：</span>
          <span class="content-item-text">{{opts.form.resource}}</span>
        </p>
      </el-row >
      <el-row class="content-item">
        <p>
          <span class="content-item-label">活动形式：</span>
          <span class="content-item-text">{{opts.form.desc}}</span>
        </p>
      </el-row>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="opts.visible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm">确 定</el-button>
    </span>
  </el-dialog> -->
</template>
<script>
import util from '../../assets/js/util'
  export default {
    props: [ 'opts' ],
    data() {
      return {
        form:{},
        type:'',
        date1:'',
        date2:'',
        width:'30%'

      };
    },
    wtach:{
    
    },
    methods: {
      openDialog(){
        this.date1=util.dateUtils.format(this.opts.form.date2,util.dateUtils.DEFAULT_PATTERN);
        this.date2=util.dateUtils.formatLong(this.opts.form.date2,util.dateUtils.DEFAULT_TIME_PATTERN);
        this.type=this.opts.form.type.join(",");
        console.log(this.opts.screen);
      },
      handleClose() {
        this.opts.visible=false;
      },
      submitForm(){
        "resetNotice",
          this.$notify({
              title: '成功',
              message: '表单提交成功',
              type: 'success'
          });
          this.$emit('save');
          this.opts.visible=false;
      }
    },
    mouted(){

    }
  };
</script>
<style lang="scss" >
.formdialog{
  .el-dialog__header{
    border-bottom: 1px solid #e8e8e8;
  }
  
}
#formdialog{
    .el-dialog{
        width: 30%;
    }
    @media screen and (max-width: 767px) {
       .el-dialog{
           width: 65%;
       } 
    }
}

</style>
