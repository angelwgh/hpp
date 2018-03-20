import Vue from 'vue'
import Vuex from 'vuex'
import setting from './settting.js'
console.log(setting)
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 获取手机权限
		permissions:{

		},
		title: 'hpp',
		isStartUp: true,
		indexShow:'startUp',
		// settingData:{
		// 	title:'嗨披设置',

		// 	account: {
		// 		title:'账号管理',
		// 	}
		// }
	},
	getters: {
		getSatrtUpState (state) {
			return state.isStartUp
		},
		getIndexShow (state) {
			return state.indexShow
		}
	},

	mutations: {
		setPermissions (state, ) {

		},
	  	setSatrtUpState (state) {
	  		state.isStartUp = false;
	  	},

	  	setIndexShow (state, name) {
	  		state.indexShow = name
	  	
	  	}
	},
	modules: {
			setting
		}
})