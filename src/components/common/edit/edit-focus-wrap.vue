<template>
	<div class="m-edit-focus-wrap" 
		 :style="{
		 	left: options.left + 'px',
		 	top: options.top + 'px'
		 }">
		<div class="corners">
			<span class="corner corner1" style="left:-3px; top:-3px;"
				  v-finger:press-move="pressMove.bind(this,'corner1')"></span>
			<span class="corner corner2"
				  :style="{
				  	left:options.width - 3 + 'px',
				  	top: '-3px'
				  }"
				  v-finger:press-move="pressMove.bind(this,'corner2')"
			></span>
			<span class="corner corner3"
				  :style="{
				  	left: '-3px',
				  	top: options.height -3 + 'px',
				  }"
				  v-finger:press-move="pressMove.bind(this,'corner3')"></span>
			<span class="corner corner4"
				  :style="{
				  	left: options.width - 3 + 'px',
				  	top: options.height -3 + 'px',
				  }"
				  v-finger:press-move="pressMove.bind(this,'corner4')"></span>
			<span class="corner corner-top"
				  :style="{
				  	left: options.width / 2 - 3 + 'px',
				  	top: '-3px',
				  }"
				  v-finger:press-move="pressMove.bind(this,'top')"></span>
			<span class="corner corner-left"
				  :style="{
				  	left: '-3px',
				  	top: options.height / 2 -3 + 'px',
				  }"
				  v-finger:press-move="pressMove.bind(this,'left')"></span>
			<span class="corner corner-right"
				 :style="{
				 	left: options.width - 3 + 'px',
				 	top: options.height / 2 - 3 + 'px',
				 }"
				 v-finger:press-move="pressMove.bind(this,'right')"></span>
			<span class="corner corner-bottom"
				 :style="{
				 	left: options.width / 2 - 3 + 'px',
				 	top: options.height - 3 + 'px',
				 }"
				 v-finger:press-move="pressMove.bind(this,'bottom')"></span>
		</div>
	</div>
</template>
<script>
	export default{
		props:{
			options:{
				type: Object,
				default: null
			}
		},
		methods:{
			pressMove (type,evt) {
				// console.log(evt)
				// console.log(this.options.height)
				// this.options.height += evt.deltaY 
				this.$emit('move',evt,type)
			}
		},
		mounted () {
			console.log(this.options)
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.m-edit-focus-wrap {
		position: absolute;
		background-color: #fcc;

		.corners {
			background-color: #0f0;
			.corner{
				position: absolute;
				width: 7px;
				height: 7px;
				border-radius: 50%;
				border:1px solid #007EB7;
				// background-color: #000;
			}
		}
	}
</style>