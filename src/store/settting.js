export default {
	// 独立命名空间
	namespaced: true,

	state: {
		headerInfo: {
			title: ''
		}
	},
	getters: {
		getHeaderInfo (state) {
			return state.headerInfo
		}
	},

	mutations: {
		setHeaderInfo (state, obj) {
			if(typeof obj !== 'object' || null ) return;
			for(let key in obj){
				console.log(obj)
				if(state.headerInfo[key] !==  undefined){
					state.headerInfo[key] = obj[key]
				}
			}
			// console.log(obj)
			// state.headerInfo = obj
		}
	}
}