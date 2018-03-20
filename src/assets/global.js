class Global {
	constructor () {
		this.init()
	}

	init () {
		this.setHeadStyle()
	}

	setHeadStyle () {
		// 头部导航样式
		this.headStyle = {
			
			// 黑色
			black: {
				color: '#fff',
				bgcolor: '#000',
				fontSize: '16px',
				title:{
					fontSize: '18px'
				}
			},
			// 白色
			white: {

			}
		}
	}
}

export default new Global()