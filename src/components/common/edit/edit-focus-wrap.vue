<template>
	<div class="m-edit-focus-wrap" 
		 :style="{
		 	left: options.left + 'px',
		 	top: options.top + 'px',
		 	
		 }">
		<div class="move-tools" v-if="options.move">
			<div class="move" :style="{
				top: options.height / 2 + 'px',
				left: options.width / 2 + 'px',
			}"
			v-finger:touch-start="blockPage"
			v-finger:touch-end="unBlockPage"
			v-finger:press-move="pressMove.bind(this,'move')"></div>
			<div class="rotate"
				:style="{
					top: options.height / 2 + 'px',
					left: options.width + 'px'
				}"
				v-finger:touch-start="blockPage"
				v-finger:touch-end="unBlockPage"
				v-finger:press-move="pressMove.bind(this,'rotate')">
			</div>
			
		</div>
		<div class="edit-tools" v-if="options.move">
			<!-- <div class="delete"
				v-finger:tap="remove">
				
			</div>
			<div class="bg-color"
				v-finger:tap="singleTap.bind(this,'bgColor')">
				
			</div> -->
			<div v-for="item in toolsBar.textEdit"
				 :class="[item]"
				 v-finger:tap="singleTap.bind(this, item)"></div>
		</div>
		<div class="corners" 
			:class="[cornerColorClass]"
			:style="{
				transformOrigin: options.width/2+'px '+  options.height/2 + 'px',
				transform: 'rotate('+options.rotate+'deg)'
			}"
			>
			<span class="corner corner1" style="left:-3px; top:-3px;"
				  v-finger:touch-start="blockPage"
				  v-finger:touch-end="unBlockPage"
				  v-finger:press-move="pressMove.bind(this,'corner1')"></span>
			<span class="corner corner2"
				  :style="{
				  	left:options.width - 3 + 'px',
				  	top: '-3px'
				  }"
				  v-finger:touch-start="blockPage"
				  v-finger:touch-end="unBlockPage"
				  v-finger:press-move="pressMove.bind(this,'corner2')"
			></span>
			<span class="corner corner3"
				  :style="{
				  	left: '-3px',
				  	top: options.height -3 + 'px',
				  }"
				  v-finger:touch-start="blockPage"
				  v-finger:touch-end="unBlockPage"
				  v-finger:press-move="pressMove.bind(this,'corner3')"></span>
			<span class="corner corner4"
				  :style="{
				  	left: options.width - 3 + 'px',
				  	top: options.height -3 + 'px',
				  }"
				  v-finger:touch-start="blockPage"
				  v-finger:touch-end="unBlockPage"
				  v-finger:press-move="pressMove.bind(this,'corner4')"></span>
			<span class="corner corner-top"
				  :style="{
				  	left: options.width / 2 - 3 + 'px',
				  	top: '-3px',
				  }"
				  v-finger:touch-start="blockPage"
				  v-finger:touch-end="unBlockPage"
				  v-finger:press-move="pressMove.bind(this,'top')"></span>
			<span class="corner corner-left"
				  :style="{
				  	left: '-3px',
				  	top: options.height / 2 -3 + 'px',
				  }"
				  v-finger:touch-start="blockPage"
				  v-finger:touch-end="unBlockPage"
				  v-finger:press-move="pressMove.bind(this,'left')"></span>
			<span class="corner corner-right"
				 :style="{
				 	left: options.width - 3 + 'px',
				 	top: options.height / 2 - 3 + 'px',
				 }"
				 v-finger:touch-start="blockPage"
				  v-finger:touch-end="unBlockPage"
				 v-finger:press-move="pressMove.bind(this,'right')"></span>
			<span class="corner corner-bottom"
				 :style="{
				 	left: options.width / 2 - 3 + 'px',
				 	top: options.height - 3 + 'px',
				 }"
				 v-finger:touch-start="blockPage"
				 v-finger:touch-end="unBlockPage"
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
		data () {
			return {
				toolsBar: {
					textEdit: ['delete', 'set-style', 'copy', 'paste', 'lock' ]
				}
			}
		},
		computed: {
			cornerColorClass () {
				console.log(this.options.model)
				return 'model' + this.options.model
			}
		},
		methods:{
			pressMove (type,evt) {
				this.$emit('move',evt,type)
			},
			blockPage () {
				document.getElementById('scrollView').style.overflowY = 'hidden'
			},
			unBlockPage () {
				document.getElementById('scrollView').style.overflowY = 'auto'
			},
			remove() {
				// console.log(this.options)
				this.$emit('remove', this.options.type)
			},
			singleTap (type){
				this.$emit('edit', type)
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
		// transform: rotate(45deg);
		// background-color: #fcc;

		.corners {
			// background-color: #0f0;
			.corner{
				position: absolute;
				width: 7px;
				height: 7px;
				border-radius: 50%;
				border:1px solid #007EB7;
				
				// background-color: #000;
			}

			&.model1{
				.corner{
					background-color: #fff;
				}
				
			}

			&.model2{
				.corner{
					background-color: #000;
				}
				
			}
		}

		.move-tools{
			&>div{
				position: absolute;
				background-image: url(../../../../static/images/icon.png);
			}
			.move{

				
				margin-left: -10px;
				margin-top: -10px;
				width: 20px;
				height: 20px;
				
				background-position: -150px -65px;
				// background-color: transparent;
			}

			.rotate {

				// margin-left: -10px;
				margin-top: -10px;
				width: 20px;
				height: 20px;
				
				background-position: -180px -65px;
			}
		}
		
		.edit-tools {
			position: absolute;
		    top: -28px;
		    display: flex;
			&>div{
				margin-right: 5px;
				width: 50px;
				height: 27px;
				background-image: url(../../../../static/images/icon.png);
			}

			.delete{
				background-position: -260px 0;
			}

			.bg-color{
				background-position: -260px -180px;
			}

			.set-style{
				background-position: -260px -60px;
			}

			.copy {
				background-position: -260px -120px;
			}

			.paste {
				background-position: -260px -90px;
			}

			.lock {
				background-position: -260px -30px;
			}
		}

	}
</style>