import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index/index.vue')
    },
    {
    	path: '/login',
    	name: 'login',
    	component: () => import('@/components/index/login.vue')
    },
    {
      path: '/bindtel',
      name: 'bindtel',
      component: () => import('@/components/index/bind-tel.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/home/home.vue')
    },
    {
      path:'/new_user_panel',
      name: 'new_user_panel',
      component: () => import('@/components/panels/new_user_panel.vue')
    },
    {
      path:'/hpp_panel',
      name: 'hpp_panel',
      component: () => import('@/components/panels/hpp_panel.vue')
    },
    {
      path:'/share',
      name: 'share',
      component: () => import('@/components/share/share.vue')
    }
  ]
})
