<template>
	<div class="img-container" 
		 @click.stop="select" 
		 v-finger:long-tap="longTap"
		 :style="{
		 	left: editorData.left + 'px',
		 	top: editorData.top + 'px',
		 	width: editorData.width + 'px',
		 	height: editorData.height + 'px',
		 	backgroundColor:'#ccc',
		 	transformOrigin: editorData.width/2+'px '+  editorData.height/2 + 'px',
		 	transform: 'rotate('+editorData.rotate+'deg)'
		 }">
		<img :src="editorData.src">
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
		methods: {
			select () {
				// console.log(this.moduleIndex)
				this.$emit('select', this.editorData, this.moduleIndex,this.editorIndex)
			},
			longTap(evt) {
				// 长按事件
				console.log(111111111111)
				this.$emit('longtap', this.editorData)
			}
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.img-container{
		position: absolute;
		width: 100%;
		height: 20px;
		overflow: hidden;

	}
	
</style>