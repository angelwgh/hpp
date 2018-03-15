class Util {
	size (doc) {
		return doc ?
			{
				height: doc.offsetHeight,
				width: doc.offsetWidth
			}:
			{
				height: window.innerHeight,
				width: window.innerWidth
			}
	}
}

export default new Util()