class TextStyle{
	constructor () {
		this.init()
	}
	init() {

		this.setFontFamily()
		this.setFontSize()
		this.setLetterSpacing()
		this.setMainColors()
		this.setOtherColors()
		this.setStandardColors()
	}
	get fontFamily() {
		return this._fontFamily
	}
	get fontSize () {
		return this._fontSize
	}

	get letterSpacing() {
		return this._letterSpacing
	}

	get mainColors () {
		return this._mainColors
	}

	get otherColors () {
		return this._otherColors
	}

	get standardColors() {
		return this._standardColors
	}

	setFontFamily (arr = ['微软雅黑']) {
		const fontFamily = this._fontFamily = ['设置字体']
		fontFamily.push.apply(fontFamily, arr)
	}

	setFontSize(n = 50) {
		const fontSize = this._fontSize = ['字体大小']

		for(let i = 12; i < n; i++){
			fontSize.push(i)
		}
	}

	setLetterSpacing (n = 30){
		const letterSpacing = this._letterSpacing = ['字间距']

		for(let i = 0; i < n; i++){
			letterSpacing.push(i)
		}
	}

	setMainColors (){
		this._mainColors = [
			'#ffffff', '#000000', '#e7e6e6', '#44546a', '#5b9bd5', '#ed7d31', '#a5a5a5', '#ffc002', '#4472c4', '#70ad47'
		]
	}

	setOtherColors () {
		this._otherColors = [
			['#e4dae5', '#7f7f7f', '#dbdad6', '#d7dbe4', '#dfe8e3', '#fbe5d7', '#ededed', '#fff1cc', '#dae3f4', '#e2eed8'],
			['#c6b3c7', '#595959', '#bbb3b0', '#aeb9cb', '#bdd2d3', '#f8cbac', '#dbdbdb', '#fde69a', '#b5c5e6', '#c5e0b3'],
			['#ab8ead', '#3f3f3f', '#948d83', '#8496b0', '#9cbbc3', '#f3b184', '#c9c9c9', '#ffd965', '#8eaadb', '#a8d08d'],
			['#926993', '#262626', '#524436', '#323f4f', '#336f91', '#c55a11', '#7b7b7b', '#bf9000', '#2f5496', '#538135'],
			['#754477', '#0c0c0c', '#514434', '#222a35', '#1d4d63', '#833d0a', '#525252', '#805f00', '#203864', '#385624']
		]
	}

	setStandardColors() {
		this._standardColors = [
			'#c10003', '#fe0000', '#ffc102', '#ffff01', '#b8d200', '#00af50', '#01b0ef', '#0170c1', '#012061', '#7030a2'
		]
	}
}

export default new TextStyle()