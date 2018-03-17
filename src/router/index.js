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
      path:'/panels_features',
      name: 'panels_features',
      component: () => import('@/components/panels/features.vue')
    },
    {
      path:'/panels_feature/:type',
      name: 'panels_feature',
      component: () => import('@/components/panels/feature.vue')
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
    },{
      path:'/setting',
      component: () => import('@/components/setting/setting.vue'),
      children: [
        {
          path:'',
          name:'setting',
          component: () => import('@/components/setting/hp_setting.vue')
        },
        {
          path:'account',
          component: () => import('@/components/setting/account/account.vue'),
          children:[
            {
              path: 'index',
              name:'account',
              component: () => import('@/components/setting/account/index.vue')
            },
            {
              path: 'set/:type',
              name:'account_set',
              component: () => import('@/components/setting/account/set.vue')
            },
            {
              path: 'siwtch',
              name:'account_siwtch',
              component: () => import('@/components/setting/account/switch_account.vue')
            }
          ]
        }
      ]
    }
  ]
})
