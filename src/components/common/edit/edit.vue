<template>
	<div class="m-edit">
		<!-- <text-container @select="select"></text-container> -->
		<div>
			<div class="edit-module" 
				v-for="(module, moduleIndex) in editModules" 
				
				:style="{
					backgroundColor: module.style.bgc,
					height: module.style.height + 'px',
					width: module.style.width
				}"
				@click="selectModule(module, moduleIndex)"
				>
				<components v-for="(editor, editorIndex) in module.editors"
							:is="editor.componentName"
							@select="select"
							@longtap="longTap"
							:key="editorIndex"
							:editorData="editor"
							:moduleIndex="moduleIndex"
							:editorIndex="editorIndex">
				</components>
				<!-- <components :is="module.name" @select="select"></components>
				<components :is="module.name" @select="select"></components> -->
			</div>
		</div>
		<edit-focus-wrap 
			 v-show="currentMudule"
			 :options="options"
			 @move="change"
			 @remove="remove">
		</edit-focus-wrap>
	</div>
</template>
<script>
	import textContainer from './text_container.vue'
	import imgContainer from './img_container.vue'
	import editFocusWrap from './edit-focus-wrap.vue'
	import change from './js/change'
	import util from '@/assets/util'
	export default{
		components: {
			textContainer,
			imgContainer,
			editFocusWrap
		},
		data() {
			return {
				winWidth:0,
				currentMudule:null,
				currentType:'',
				moduleIndex: -1,
				editorIndex: -1,
				editModules:[
					{	
						editors:[
							{
								type: 'text',
								componentName: 'text-container',
								content:'text1',
								top:30,
								left:30,
								width: 300,
								height: 30,
								rotate:0
							},
							{
								type: 'text',
								componentName: 'text-container',
								content:'text2',
								top:80,
								left:30,
								width: 300,
								height: 30,
								rotate:0
							}
						],

						name: 'text-container',
						style:{
							bgc:'#fff',
							width:'100%',
							height:400
						}
					},
					{
						editors:[
							{
								type: 'img',
								componentName: 'img-container',
								src:'./static/images/slide1.jpg',
								top:30,
								left:30,
								width: 50,
								height: 80,
								rotate:0
							}
						],
						style:{
							bgc:'#fff',
							width:'100%',
							height:300
						}
					}
				],
				options: {
					type:'text',
					left:20,
					top:20,
					width:30,
					height:200,
					move: false,
					wordEdit:false,
					model:2,
					rotate:0				}

			}
		},
		computed: {
			moduleTop () {
				// 选中模块模块距离顶部的高度
				let top = 0;
				const index = this.moduleIndex;
				const editModules = this.editModules
				for( let i = 0; i < this.moduleIndex; i++){
					top += parseInt(editModules[i].style.height)
				}

				return top;
			}
		},

		methods: {
			test () {
				console.log(11)
			},
			select(editor, moduleIndex,editorIndex){
				// 选择编辑区域
				// console.log(arguments)
				if(this.editor == editor && this.currentType == 'editor'){
					console.log(true)
					this.changeOptionsModel()
					return
				}
				this.moduleIndex = moduleIndex;
				this.editorIndex = editorIndex
				this.currentMudule = this.editModules[moduleIndex];
				this.editor = editor;
				this.currentType = 'editor'
				const data = {
					type: editor.type,
					left: editor.left,
					width: editor.width,
					top: this.moduleTop + editor.top,
					height: editor.height,
					model: 1,
					rotate: editor.rotate
				}
				this.initOptions()
				this.setOptions(data)
			},

			selectModule(module, index){
				// 选择模块
				if(this.currentMudule == module && this.currentType === 'module'){
					console.log(index)
					// this.changeOptionsModel()
					return
				}
				this.currentMudule = module;
				this.moduleIndex = index;
				this.currentType = 'module'

				const data = {
					type:'module',
					left: 0,
					width:this.winWidth,
					top: this.moduleTop,
					height: parseInt(module.style.height),
					model: 1,
					rotate:0
				}
				this.initOptions()
				this.setOptions(data)
			},

			setOptions(data) {
				// 设置编辑框参数
				// console.log(data)
				for(let k in data){
					this.options[k] = data[k]
				}
				// this.options = data
			},

			changeOptionsModel () {
				// 选择编辑框类型
				// 1 白点， 2 黑点
				this.options.model = this.options.model === 1 ? 2 : 1;
				this.initOptions()
			},
			initOptions () {
				// 初始化编辑框按钮
				this.options.move = false;
				this.options.wordEdit = false;
				// this.options.model = 1
			},
			change(evt,type){
				// 移动、改变编辑框大小
				console.log(this.currentMudule)
				if(this.currentType === 'editor'){
					change.change(evt, type, this.editor,this.options, this.moduleTop)
				}else if(this.currentType === 'module') {
					if(type === 'bottom'){
						change.change(evt, 'bottom', this.currentMudule.style, this.options, this.moduleTop)
					}
				}
				
				
			},

			remove(type) {
				if(type === 'module'){

				}else {
					// console.log(this.moduleIndex,this.editorIndex)
					this.currentMudule.editors.splice(this.editorIndex, 1);
					this.currentMudule = null;
				}
				
			},

			longTap(data){
				// console.log(data)
				// 长按事件
				if(this.options.model === 1){
					this.options.wordEdit = !this.options.wordEdit
				}else if(this.options.model === 2){
					this.options.move = !this.options.move
					
				}
				// console.log(this.options)
			}

		},

		created(){
			// 获取设备宽度
			this.winWidth = util.size().width
			// console.log(this.winWidth)
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.m-edit{
		position: relative;
		overflow: hidden;
		.edit-module{
			position: relative;
			overflow: hidden;
			height: 500px;
		}
	}
</style>