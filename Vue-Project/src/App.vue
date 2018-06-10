<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
	},
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
