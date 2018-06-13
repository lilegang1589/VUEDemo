<template>
  <div id="app" @mouseup="mouseup" >
    <router-view></router-view>
  </div>
</template>

<script>
import store from './vuex/store'
export default {
  name: 'App',
  data(){
      return{
          date:"",
          timer:1000
      }
  },
  components: {
    },
  methods:{
      mouseup(e){         
          store.dispatch("resetInactiveTime");//鼠标动作启用此函数，开始计时，超过20分钟退出系统界面生效               
      }
        
     
        
  }
}

</script>
<style lang="scss">
body {
		margin: 0px;
		padding: 0px;
		/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
	  background: #324057;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",SimSun, sans-serif;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
	}
  a{
  		text-decoration: none;
  		color: #fff;
	}
	li{
		list-style: none;
	}
	ul{
		padding: 0;
	}
	p{
		margin: 0;
	}
	#app {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}

	.el-submenu [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}

	.el-menu-item [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}

	.toolbar {
		background: #fff;
		padding: 20px;		
		.el-form-item {
			margin-bottom: 10px;
		}
	}
</style>
