import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		// 获取手机权限
		permissions:{

		},
		title: 'hpp',
		isStartUp: true,
		indexShow:'startUp'
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
	}
})