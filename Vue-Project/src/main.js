// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import './assets/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import "../static/iconfont/iconfont.css";
import 'font-awesome/css/font-awesome.min.css'
// import store from './vuex/store'

Vue.use(ElementUI)
Vue.use(Vuex)
Vue.config.productionTip = false
const outerPaths = ["/login"];
const localPaths = ["/", "/console"];

router.beforeEach((to, from, next) => {
  let user = JSON.parse(sessionStorage.getItem('ccuser'));
if (outerPaths.includes(to.path) || (to.name && outerPaths.includes(to.name))) {
  sessionStorage.removeItem('ccuser');
  next();
} else if (!user) {
  next({ path: '/login' });
} else  {
  next();
}
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
