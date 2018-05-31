import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import console from '@/components/console/console'
import form from '@/components/console/form'
import Login from '@/components/Login/login'
Vue.use(Router)

export default new Router({

   routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Home,
      iconCls: 'icon-qiyeyuandaima-laptop',//iconfont 使用
      //leaf: true,//只有一个节点
        children: [
            { path: '/console', component: console, iconCls: 'icon-qiyeyuandaima-laptop',name: '概述' },
            { path: '/form', component: form, name: '表单页' },
        ]
    },
    {
            path: '/login',
            component: Login,
            name: 'login',
            hidden: true
        },
  ]
})
