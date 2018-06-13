<template>
      <div class="main" >
        <aside class="leftMenu" ref="menu" :class="!opendrg?'open-drawer':''" :style="widthformat"  >
            <div class="logo" >
                <img  src="../assets/lgo.jpg" />
            </div>
            <div @click="isCollapse=!isCollapse" style="text-align:center;" v-if="screen!='isMobile'">
                <i  :class="isCollapse?'el-icon-arrow-left':'el-icon-arrow-right'" style="color:white;font-size:22px;"></i>
            </div>
            <el-menu id="letNav" ref="letNav" :default-active="defaultActive" class="el-menu-vertical-demo"  unique-opened router @select="select" theme="dark" :collapse="isCollapse">
                <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden ">
                    <el-submenu :index="index+''" :key="index" v-if="!item.leaf">
                        <template slot="title">
                            <i class="icon iconfont" :class="item.iconCls"></i>                            
                            <span >{{item.name}}</span>
                        </template>
                        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path" v-if="!child.hidden">
                             <span>{{child.name}}</span>
                        </el-menu-item>
                        <!--  -->
                    </el-submenu>
                    <el-menu-item v-if="item.leaf&&item.children.length>0"  :key="index" :index="item.children[0].path">
                      <template slot="title">
                        <i class="icon iconfont" :class="item.children[0].iconCls"></i>
                        <span>{{item.children[0].name}}</span>
                      </template>
                    </el-menu-item>
                </template>
            </el-menu>
        </aside>
        <div class="menu-btn" v-if="screen==='isMobile'"  @click="opendrg=!opendrg">
             <i class="icon iconfont icon-zhankai"/>
        </div>
        <div class="content-container" ref="container" :style="leftformat">
          <div class="navheard">
            <span style="margin-left:20px;font-size:20px;">{{(screen!='isMobile')?"自主搭建vue":""}} Demo</span>
            <el-menu ref="headerNav" :default-active="defaultActive" id="headerNav" class="el-menu-header-wrap" mode="horizontal">
              <el-submenu index="/settings" >
                  <template slot="title">
                        <span class="userinfo-inner"><span style="float: right;padding:0 20px 0 5px;" v-if="screen!='isMobile'">测试员</span> <img src="../assets/logo2.jpg" /></span>
                  </template>
                  <el-menu-item @click.native="logout" style="color:rgba(0,0,0,0.75)" index="logout">退出登录</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          <router-view :isMobile="screen" :isCollapse="isCollapse"></router-view>
          <div class="footer">
              Copyright © {{year}} ****.All Rights Reserved.  **** 版权所有 · ****
          </div>
        </div>
        <div :class="!opendrg?'menu-model':''" @click="opendrg=!opendrg"></div>
        <el-dialog
          title="注意！"
          :visible.sync="timeoutVisable"    
          :close-on-press-escape="false"
          :close-on-click-modal="false"
          :show-close="false"
          width='30%'
          >
          <span>由于您长时间没有操作，请重新登录。</span>
          <span slot="footer" class="dialog-footer">
            <!-- <el-button type="primary" @click="continueOperate">{{ $t('home.continue') }}</el-button> -->
            <el-button type="primary" @click="$router.push('/login')">确定</el-button>
          </span>
        </el-dialog>
      </div>
      
</template>

<script>
import  enquire  from 'enquire.js';
import { mapActions, mapGetters } from 'vuex'
import store from '../vuex/store'
export default {
  name: 'HelloWorld',
  components: {},
  data () {
    return {
        year: new Date().getFullYear(),
        msg: 'Welcome to Your Vue.js App',
        isCollapse: false,
        screen:"",
        opendrg:true,
        timeoutVisable:false
    }
  }, 
   watch: {
    getInactiveTime(newValue, oldValue) {             
        let that = this;    
        if(newValue == 60) {
           that.timeoutVisable=true;
        } else if(newValue == 0) {
            that.$router.push('/login');
        }
    }    
  },                                             
  computed:{
    ...mapGetters([
        'getInactiveTime', 'getInactiveTimer'
    ]),    
    defaultActive() {
        return "/"+this.$route.path.split("/")[1];       
    },
    widthformat(){
        if(this.screen==='isMobile'){
            return;
        }else{
           if(!this.isCollapse){
                return 'width:210px';            
            }else{          
                return 'width:60px';            
            }; 
        }
        
    },
    leftformat(){
        if(this.screen==='isMobile'){
            return 'left:0';
        }else{
           if(!this.isCollapse){
                return 'left:210px';            
            }else{          
                return 'left:60px';            
            }; 
        }
    },    
  },
 
  methods:{     
    logout(){
        this.$confirm("确定退出登录？", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: 'warning'
        }).then(() => {
            this.$router.push('/login');       
        }).catch((e)=>{
          // console.log(e)取消时执行此命令;
        });
    },
    select(val){
        if(this.screen==='isMobile'&&val){
            this.opendrg=!this.opendrg;
        }   
    },
    //下面两个方法是在js中注册界面响应
    enquireScreenRegister() {
        const isMobile = 'screen and (max-width: 767px)';
        const isTablet = 'screen and (min-width: 768px) and (max-width: 991px)';
        const isDesktop = 'screen and (min-width: 992px)';         

        enquire.register(isMobile, this.enquireScreenHandle('isMobile'));
        enquire.register(isTablet, this.enquireScreenHandle('isTablet'));
        enquire.register(isDesktop, this.enquireScreenHandle('isDesktop'));
    },
    enquireScreenHandle(type) {
        const handler = {
            match: () => {
                if (type === 'isMobile') {           
                    this.screen="isMobile";
                    if(this.isCollapse){
                        this.isCollapse=false;
                    }
                }else if(type === 'isTablet' ){
                    this.isCollapse=true;
                    this.screen="isTablet";        
                }else{
                    this.isCollapse=false;
                    this.screen="isDesktop"; 
                }
            },
            unmatch: () => {     
            },
        };
        return handler;
    },  
  },
  mounted(){
      this.$nextTick(function() {
          let self = this;      
          self.enquireScreenRegister();        
      });     
  },
  destroyed() {
    window.clearInterval(this.getInactiveTimer);
  },
  store
}
</script>
<style lang="scss" >
$menuWidth: 210px;
.main {
    background: #001529;
    top: 0;
    bottom: 0px;
    width:100%;
    overflow-y: hidden;
    overflow-x: auto;
    position: absolute;      
    aside.leftMenu {        
        .el-menu--dark{
            background: #001529;
            .el-submenu{
                .el-menu{
                    background-color: #000C17;
                }
            }
        }        
        .logo{
            
            height: 60px;
            font-size: 22px;
            box-sizing: border-box;
            border-bottom: 1px solid #00284d;
            text-align: center;
            background: #00284d;
            img {
                width: 45px;
                margin: 0;
                margin-top: 12px;
            }
        }        
        .el-menu {            
            border-right:none;
            .el-submenu {
                .el-submenu__title {
                    font-size: 14px;
                    height: 40px;
                    line-height: 40px;
                    color: white;
                    opacity: 0.65;                   
                    span {
                        margin-left: 13px;
                    }
                    &:hover {
                        background-color: #121c2f;
                        opacity: 1;
                    }                             
                }
                .el-menu-item {
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    color: white;
                    background: #001529;
                    padding-left: 48px !important;
                    span {
                        opacity: 0.64;
                    }
                    &:hover {
                        background:#48576a;
                        span {
                            opacity: 1;
                        }
                    }
                    &.is-active {
                        background: #1890FF;
                        
                        span{
                            opacity: 1;
                        }
                    }                    
                }            
            }
        }
        .el-menu-vertical-demo {
            width: 60px;
            min-height: 100%;
            background: #001529;
            .el-submenu {
                .el-submenu__title {                    
                    i.iconfont {                        
                        font-size: 18px;
                        color: white;
                    }
                }
            }                            
        }
        .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 210px;
            min-height: 400px;
            background: #001529;
           .el-submenu {
                .el-submenu__title {
                    i.iconfont {                        
                        font-size: 16px;
                    }
                }
            }    
        }        
    }
    .content-container {
      background: #f0f2f5;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: $menuWidth;
      overflow: auto;     
      transition: left 0.5s;
      .navheard{
        height: 60px;
        line-height: 60px;
        background: white;
        color: rgba(0,0,0,0.85);
        position: relative;
        display: flex;
        justify-content: space-between;
        z-index: 11;
        .userinfo-inner {
          color: rgba(0,0,0,0.85);
          cursor: pointer;
          img {
              width: 40px;
              height: 40px;
              border-radius: 20px;
              margin: 10px 0px 10px 10px;
              float: right;

          }
        }        
        .el-menu--horizontal>.el-submenu .el-submenu__icon-arrow {
            font-family:"iconfont" !important;
            font-size:12px;
            font-style:normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            position:absolute;
            &:before {
                content: "\e63d";
            }
        }
      }
      .footer {
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;
        font-size: 12px;
        width: 100%;
        text-align: center;
        text-decoration: none;
      }
    }
}
.main .leftMenu{
    .el-icon-arrow-down{
        font-family:"iconfont" !important;
        font-size:14px;
        font-style:normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        &:before{
            content: "\e63d";
        }
    }
}
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 120px;
}
.el-menu--vertical {    
    .el-menu--popup {
        padding: 0;
        background-color: #000C17;
    }
    .el-menu-item {
        color: white;
        opacity: 0.65;
        &:hover ,&:focus{
            opacity: 1;
            background-color: #48576a;
        }
        &.is-active {
            opacity: 1;
            background-color: #1890FF;
        }
    }    
}


@media screen and (max-width: 767px) {       
    aside.leftMenu {
        position: fixed;
        left: -240px;
        //transform: translateX(0);
        transition: all 0.5s;
        width: 210px;
        min-height:100%;
        background: #001529;
    }
    .el-message-box {
        width: 260px;
    }
    .menu-model {
        position: fixed;
        top: 0px;
        left: 0;
        right: 0;
        bottom: 0;
        background: #000;
        opacity: 0.3;
        z-index: 99;    
    }
    aside.open-drawer {
        &.leftMenu {
            position: fixed;
            left: 0;
            //transform: translateX(0);
            transition: all 0.5s;
            z-index: 9999;
        }
    }
    .menu-btn {//监测界面为手机模式界面菜单栏按钮样式
        position: fixed;
        left: 0;
        top: 44px;
        width: 40px;
        height: 40px;
        border-radius: 0 6px 6px 0;
        margin-bottom: 0;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        color:white;
        background: #3080FE;
        z-index: 999;
        text-decoration: none;
        &:hover {
            color: #e7e7e7;
        }
    }
    .el-menu--horizontal>.el-submenu .el-submenu__icon-arrow {            
        right:5px;
    }
  }

</style>
