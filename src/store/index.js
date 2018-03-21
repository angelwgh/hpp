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
		editData:{
			moduleIndex:-1,
			editorIndex: -1,
			editModules:[
					{	
						editors:[
							{
								type: 'text',
								componentName: 'text-container',
								content:'嗨披详情页',
								top:30,
								left:60,
								width: 200,
								height: 60,
								rotate:0,
								fontFamily: 'Microsoft YaHei',
								fontSize: 20,
								letterSpacing: 0,
								color: '#000',
								textAlign: 'left',
								webkitTextStrokeColor: 'transparent',
								webkitTextStrokeWidth: 0
							},
							{
								type: 'text',
								componentName: 'text-container',
								content:'嗨披详情页2',
								top:110,
								left:30,
								width: 300,
								height: 30,
								rotate:0,
								color:'#000',
								bgColor: '#fff'
							}
						],

						name: 'text-container',
						style:{
							bgc:'#fff',
							width:'100%',
							height:400
						}
					},
					{
						editors:[
							{
								type: 'img',
								componentName: 'img-container',
								src:'./static/images/slide1.jpg',
								top:30,
								left:30,
								width: 50,
								height: 80,
								rotate:0
							}
						],
						style:{
							bgc:'#fff',
							width:'100%',
							height:300
						}
					}
				]
		}
	},
	getters: {
		getSatrtUpState (state) {
			return state.isStartUp
		},
		getIndexShow (state) {
			return state.indexShow
		},
		getEditData(state) {
			console.log(state.editData)
			return state.editData
		},
	},

	mutations: {
		setPermissions (state, ) {

		},
	  	setSatrtUpState (state) {
	  		state.isStartUp = false;
	  	},

	  	setIndexShow (state, name) {
	  		state.indexShow = name
	  	
	  	},
	  	setEditData(state, obj){
	  		// console.log(obj)
	  		state.editData = obj
	  		// console.log(state)
	  	}
	},
	modules: {
			setting
		}
})