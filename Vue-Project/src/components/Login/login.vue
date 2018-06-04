<template>
  <div class="userLogin">  
  <div class="container"></div>
   <div class="content-wrapper">    
    <div class="slogan">
       欢迎使用 <br /> VUEDemo系统
    </div>
    <el-form :model="loginForm" :rules="loginRules" ref="loginForm"  class="login-container">
      <h3 class="title">VUE项目demo</h3>
      <el-form-item prop="account" >        
        <el-input type="text" @keyup.native.enter="handleSubmit" v-model="loginForm.account" auto-complete="off" placeholder="用户名为：admin">
          <template slot="prepend"><i class="icon iconfont icon-yonghu" /></template>
          
        </el-input>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" @keyup.native.enter="handleSubmit" v-model="loginForm.checkPass" auto-complete="off" placeholder="密码为：admin">
          <template slot="prepend"><i class="icon iconfont icon-Password" /></template>
        </el-input>
      </el-form-item>
      <!-- <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox> -->
      <el-form-item style="margin-bottom:10px;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmit" :loading="logining">登录</el-button>
        <!-- <el-button @click.native.prevent="handleReset2">重置</el-button> -->
      </el-form-item>
      <el-row>
        <el-checkbox v-model="remember" class="remember-account" @click.native="removeRememberData">记住账户</el-checkbox>

      </el-row>
    </el-form>
   </div>
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      logining: false,
      loginForm: {
        account: '',
        checkPass: ''
      },
      remember:true,
      loginRules: {
        account: [
          { type:'string',required:true,message:'账号不能为空', trigger: 'blur' },
          { min:4,max:128,message:'账号为4-128个字符', trigger: 'blur' },
        ],
        checkPass: [
          { type:'string',required:true, message:'密码不能为空',trigger: 'blur' }
        ],

      },

    };
  },
  methods: {
    handleSubmit(){
      var _this = this;
          this.$refs.loginForm.validate((valid) => {
              if (valid) {
                  if(this.loginForm.account=='admin'&&this.loginForm.checkPass=='admin'){
                    sessionStorage.setItem('ccuser', JSON.stringify({account: this.loginForm.account}));
                    this.$router.replace('/console');
                    if(this.remember){
                      this.saveRememberData();
                    }
                  }else{

                        "resetNotice",
                        this.$notify({
                            title:'错误',
                            message: '账号或密码错误，都是admin',
                            type: 'error'
                        })

                  }
              }
          });
    },
    initRememberData() {
      if(this.loginForm.account) return;
      let rememberData = JSON.parse(localStorage.getItem('rememberData'));
      if(rememberData) {
          this.remember = true;
          this.loginForm.account = rememberData.account;
          this.loginForm.checkPass=rememberData.checkPass;
      }
  },
  removeRememberData() {
      localStorage.removeItem('rememberData');
  },
  saveRememberData() {
      if(this.remember) {
          localStorage.setItem('rememberData', JSON.stringify({account: this.loginForm.account,checkPass:this.loginForm.checkPass}));
      }
  },
},
mounted() {
        this.initRememberData();

    }
}
</script>

<style lang="scss">
.remember-account {
    color: #93999F;
    .el-checkbox__inner {
        border-radius: 2px;
        width: 14px;
        height: 14px;
        &::after {
            height: 6px;
            left: 3px;
        }
    }
    .el-checkbox__label {
        font-size: 12px;
    }
}
.userLogin{
  position: relative;
  height: 100vh;

.container{
  min-height: 100%;
  background: url(../../assets/background.jpg);
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
  .content-wrapper {
    position: absolute;
    top: -100px;
    left: 0;
    right: 0;
    bottom: 0;
    max-width: 1080px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .slogan {
      text-align: center;
      color: #f44336;
      font-size: 36px;
      letter-spacing: 2px;
      line-height: 48px;
    }
  }  
  @media screen and (max-width: 720px) {
  
    .content-wrapper {
      margin: 20px auto;
      top: 40px;
      max-width: 300px;
      display: block;
      .slogan {
        color: white;
        font-size: 22px;
        line-height: 30px;
        margin-bottom: 10px;
      }
    }
  
}
  .login-container {
      background: #FFFFFF;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.35);
      border-radius: 4px;
      width: 310px;
      padding: 30px 20px 15px 20px;
      
      box-sizing: border-box;
      .title {
        margin: 0px auto 40px auto;
        text-align: center;
        font-size: 17px;
        color: #5E6570;
      }
      .el-form-item__label{
        font-size: 14px;
        color: #93999F;
      }
      .remember {
        margin: 0px 0px 35px 0px;
      }
      .el-col {
        height: 36px;
      }
      .captcha {
        width: 100%;
        height: 36px;
        cursor: pointer;
      }
      .forgot {
        float: right;
      }
      .is-required{
          .el-form-item__label:before{
              display: none;
          }
      }
    }

}
</style>
