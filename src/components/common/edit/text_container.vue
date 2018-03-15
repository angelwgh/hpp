<template>
	<div class="text-container" 
		 @click.stop="select" 
		 :style="{
		 	left: editorData.left + 'px',
		 	top: editorData.top + 'px',
		 	width: editorData.width + 'px',
		 	height: editorData.height + 'px',
		 	backgroundColor:'#ccc'
		 }">
		<textarea>文字输入</textarea>
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
			}
		},
		methods: {
			select () {
				// console.log(this.moduleIndex)
				this.$emit('select', this.editorData, this.moduleIndex)
			}
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