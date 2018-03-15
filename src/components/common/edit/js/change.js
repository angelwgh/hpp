class Change {
	constructor() {
		this._config={

		}
	}

	change(evt,type,data,options,moduleTop){
		const self = this
		self._evt = evt;
		self._type = type;
		self._data = data;
		self._options = options
		self._moduleTop = moduleTop
		// console.log(self)
		self[type+'Change']()
	}
	bottomChange(){
		const height = this._data.height + this._evt.deltaY
		this._options.height = this._data.height = height > 0 ? height : 0;
	}
	topChange() {	
		const height = this._data.height - this._evt.deltaY
		const top = this._data.top + this._evt.deltaY;
		const maxTop =  top + height;
		this._options.height = this._data.height = height > 0 ? height : 0;
		this._data.top = top > maxTop ? maxTop : top
		this._options.top = this._data.top + this._moduleTop
	}
	leftChange() {
		const width = this._data.width - this._evt.deltaX;
		const left = this._data.left + this._evt.deltaX
		const mxLeft = left + width;

		this._options.width = this._data.width = width > 0 ? width : 0;
		this._options.left = this._data.left = left > mxLeft ? mxLeft : left;

	}
	rightChange () {
		const width = this._data.width + this._evt.deltaX
		this._options.width = this._data.width = width > 0 ? width : 0;
	}

	corner1Change() {
		this.topChange()
		this.leftChange()
	}

	corner2Change() {
		this.topChange()
		this.rightChange()
	}

	corner3Change() {
		this.leftChange()
		this.bottomChange()
	}

	corner4Change() {
		this.rightChange()
		this.bottomChange()
	}
}

export default new Change()