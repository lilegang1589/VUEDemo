<template>
      <div class="main" >
        <aside class="leftMenu">
            <div class="logo" ref="logo">
                <img  src="../assets/lgo.jpg" />
            </div>
            <el-menu id="letNav" ref="letNav" :default-active="defaultActive" class="el-menu-vertical-demo"  unique-opened router  theme="dark">
                <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden ">
                    <el-submenu :index="index+''" :key="index" v-if="!item.leaf">
                        <template slot="title">
                            <i class="icon iconfont" :class="item.iconCls"></i>
                            <!-- <i  :class="item.iconCls"></i> -->
                            <span >{{item.name}}

                            </span>
                        </template>
                        <el-menu-item v-for="child in item.children" :key="child.path" :index="child.path" v-if="!child.hidden">

                            <span>
                                {{child.name}}

                            </span>
                        </el-menu-item>
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
        <div class="content-container">
          <div class="navheard">
            <span style="margin-left:20px;font-size:20px;">自主搭建vue Demo</span>
            <el-menu ref="headerNav" :default-active="defaultActive" id="headerNav" class="el-menu-header-wrap" mode="horizontal">
              <el-submenu index="/settings" >
                  <template slot="title">
                        <span class="userinfo-inner"><span style="float: right;padding:0 20px 0 5px;">测试员</span> <img src="../assets/logo2.jpg" /></span>
                  </template>
                  <el-menu-item @click.native="logout" style="color:rgba(0,0,0,0.75)" index="logout">退出登录</el-menu-item>
              </el-submenu>
            </el-menu>
          </div>
          <router-view></router-view>
          <div class="footer">
              Copyright © {{year}} ****.All Rights Reserved.  **** 版权所有 · ****
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  components: {},
  data () {
    return {
      year: new Date().getFullYear(),
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    defaultActive() {
            return "/"+this.$route.path.split("/")[1];
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
       });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
    .el-icon-menu{
        margin-right: 15px;
    }
    aside.leftMenu {
        width: $menuWidth;
        .el-menu--dark{
            background: #001529;
            .el-submenu{
                .el-menu{
                    background-color: #000C17;
                }
            }
        }
        .el-menu-vertical-demo {
            width: $menuWidth;
            min-height: 400px;
            background: #001529;
        }

        .logo {
            width: $menuWidth;
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
            .txt {
                color: #1890ff
            }
        }
        .openmenu{
            color: #C0CCDA;
            height: 30px;
            line-height: 30px;
            text-align: center;
            font-size: 12px;
            cursor: pointer;
            transition: transform 0.5s, width 0.5s;
            .iconfont{
                // transform: rotateZ(90deg);
            }
            &:hover{
                color: white;
            }
        }
        .el-menu{
            .el-submenu{
                .el-submenu__title{
                    font-size: 14px;
                    height: 40px;
                    line-height: 40px;
                    color: white;
                    opacity: 0.65;
                    i.iconfont{
                        color: #fff;
                        font-size: 14px;
                    }
                    span{
                        margin-left: 13px;
                    }
                    &:hover{
                        background-color: #1890FF;
                        opacity: 1;
                    }
                    .icon-jiaobiao{
                        display: none;
                        width: 50px;
                        font-size: 12px;
                        text-align: center;
                        margin-right: -10px;
                    }
                    .el-submenu__icon-arrow{
                        // display: none;
                    }
                }
                .el-menu-item{
                    height: 40px;
                    line-height: 40px;
                    font-size: 14px;
                    color: white;
                    background: #001529;
                    padding-left: 48px !important;
                    span{
                        opacity: 0.64;
                    }
                    &:hover{
                        background:#48576a;
                        span{
                            opacity: 1;
                        }
                    }
                    &.is-active{
                        background: #1890FF;
                        .iconfont{
                          color: white;
                        }
                        span{
                            opacity: 1;
                        }
                    }
                    &:hover{
                        .iconfont{
                            color: white;
                        }
                    }
                    .iconfont{
                        width: 50px;
                        text-align: center;
                        vertical-align: top;
                        color: #C0CCDA;
                    }
                }
                &.is-opened{
                    .icon-jiaobiao{
                        // transform: rotateZ(90deg);
                    }
                }
                &.is-active{
                    .el-submenu__title{
                        opacity: 1;
                        .icon{
                            opacity: 1;
                        }
                        span{
                            opacity: 1;
                        }
                    }
                }
            }
        }
    }
    .content-container{
      background: #f0f2f5;
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: $menuWidth;
      overflow: auto;
      min-width: 1060px;
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
        .userinfo-inner{
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
        .el-menu--horizontal>.el-submenu .el-submenu__icon-arrow{
            font-family:"iconfont" !important;
            font-size:12px;
            font-style:normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            position:absolute;
            &:before{
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
            font-size:12px;
            font-style:normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            &:before{
                content: "\e63d";
            }
        }

    }
#letNav{
  .el-submenu__title i{
    color: white;

  }
  .el-menu-item.is-active{
    color: white;
    background: #1890FF;
    .iconfont{
      color: white;
      padding-right: 13px;
    }
    span{
        opacity: 1;
    }
  }
  .el-menu-item.hover{
    color: white;
    background:#48576a;
    .iconfont{
      color: white;
      padding-right: 13px;
    }
    span{
        opacity: 1;
    }
  }
}
.el-menu--collapse .el-menu .el-submenu, .el-menu--popup{
  min-width: 120px;
}
</style>
