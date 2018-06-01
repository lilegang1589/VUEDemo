<template>
  <transition enter-active-class="animated bounceInRight" leave-active-class="animated bounceOutRight" modal>
    <div class="side-slip-dialog" v-if="opts.visible" style="top:60px;">
      <el-row class="side-slip-dialog-header">
          <el-col :span="20" style="min-height: 1px;">
              <p>表格详情</p>
          </el-col>
          <el-col :span="4" class="close-wrap">
              <i class="el-icon-close __close" aria-hidden="true" @click="handleClose"></i>
          </el-col>
      </el-row>
      <div class="body">
        <el-row class="content-item">
          <p>
            <span class="content-item-label">日期：</span>
            <span class="content-item-text">{{opts.form.date}}</span>
          </p>
        </el-row>
        <el-row class="content-item">
          <p>
            <span class="content-item-label">姓名：</span>
            <span class="content-item-text">{{opts.form.name}}</span>
          </p>
        </el-row>
        <el-row class="content-item">
          <p>
            <span class="content-item-label">省份：</span>
            <span class="content-item-text">{{opts.form.province}}</span>
          </p>
        </el-row>
        <el-row class="content-item">
          <p>
            <span class="content-item-label">市区：</span>
            <span class="content-item-text">{{opts.form.city}}</span>
          </p>
        </el-row>
        <el-row class="content-item">
          <p>
            <span class="content-item-label">地址：</span>
            <span class="content-item-text">{{opts.form.address}}</span>
          </p>
        </el-row>
        <el-row class="content-item">
          <p>
            <span class="content-item-label">邮编：</span>
            <span class="content-item-text">{{opts.form.zip}}</span>
          </p>
        </el-row>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  props:['opts'],
  data(){
    return {

    }
  },
  methods:{
    handleClose(){
      this.opts.visible=false;
    }
  },
}
</script>

<style lang="scss">
.body{
  padding: 24px;
}
</style>
