import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import console from '@/components/console/console'
import form from '@/components/Element/form'
import table from '@/components/Element/table'
import line from '@/components/Echarts/line'
import theta from '@/components/Echarts/theta'
import time from '@/components/Echarts/time'
import Login from '@/components/Login/login'
import map from '@/components/baidumap/map'
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

        ]
    },
    {
      path: '/',
      name: '饿了么组件',
      component: Home,
      iconCls: 'icon-chuangjianwenjianbiaoqian',//iconfont 使用
      //leaf: true,//只有一个节点
        children: [
            { path: '/form', component: form, name: '表单页' },
            { path: '/table', component: table, name: '表格页' },
        ]
    },
    {
      path: '/',
      name: '百度图库组件',
      component: Home,
      iconCls: 'icon-sequencediagram',//iconfont 使用
      //leaf: true,//只有一个节点
        children: [
            { path: '/line', component: line, name: '点图' },
            { path: '/theta', component: theta, name: '极坐标图' },
            { path: '/time', component: time, name: '速度图',hidden:true },
            
        ]
    },
    {
        path: '/',
        name: '百度地图组件',
        component: Home,
        iconCls: 'icon-database',//iconfont 使用
        //leaf: true,//只有一个节点
          children: [
              { path: '/map', component: map, name: '地图' }
            
              
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
