import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import YDUI from 'vue-ydui/dist/ydui.px.js'
import global from '@/assets/global'

import AlloyFinger from 'alloyfinger'
import AlloyFingerVue from 'alloyfinger/vue/alloy_finger.vue';
import '@/assets/style/style.css'

import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(YDUI)
Vue.use(AlloyFingerVue,{ AlloyFinger });
/* eslint-disable no-new */

Vue.prototype.global = global
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
