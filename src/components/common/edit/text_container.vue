<template>
	<div class="text-container"
		 
		 @click.stop="select" 
		 @touchstart.stop="touchstart"
		 @touchmove.stop="touchmove"
		 @touchend.stop="touchend"
		 :style="{
		 	left: editorData.left + 'px',
		 	top: editorData.top + 'px',
		 	width: editorData.width + 'px',
		 	height: editorData.height + 'px',
		 	backgroundColor:'#ccc',
		 	transformOrigin: editorData.width/2+'px '+  editorData.height/2 + 'px',
		 	transform: 'rotate('+editorData.rotate+'deg)'
		 }">
		<textarea v-model="editorData.content">文字输入</textarea>
	</div>
</template>
<script>
	
	export default {
		props:{
			editorData:{
				type: Object,
				default: {}
			},
			moduleIndex: {
				type: Number
			},
			editorIndex: {
				type: Number
			}
		},
		data () {
			return {
				longtouchTimeout: null
			}
		},
		methods: {
			select () {
				console.log(this.moduleIndex)
				this.$emit('select', this.editorData, this.moduleIndex,this.editorIndex)
			},
			touchstart(){
				console.log('touchstart')
				this.longtouchTimeout = setTimeout(() => {
					this.longtouch()
				},500)

			},
			touchmove() {
				this.cancelLongtouch()
			},
			touchend() {
				// console.log('touchend')
				this.cancelLongtouch()
			},
			longtouch() {
				console.log('长按事件')
				this.$emit('longtouch', this.editorData)
			},
			cancelLongtouch: function () {
	            clearTimeout(this.longtouchTimeout);
	        }
			// longTap(evt) {
			// 	// 长按事件
			// 	// console.log(111111111111)
			// 	this.$emit('longtouch', this.editorData)
			// }
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.text-container{
		position: absolute;
		width: 100%;
		height: 20px;
		textarea {
			border: none;
		    background: none;
		    width: 100%;
		    height: 100%;
		    position: absolute;
		    left: 0;
		    top: 0;
		}

	}
	
</style>