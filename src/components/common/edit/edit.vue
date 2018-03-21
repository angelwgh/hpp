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
				<!-- 
					编辑器模块组件，文本编辑器和图片编辑器
					
				 -->
				<components v-for="(editor, editorIndex) in module.editors"
							:is="editor.componentName"
							@select="select"
							@longtouch="longtouch"
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
			 @edit="edit">
		</edit-focus-wrap>
	</div>
</template>
<script>
	import textContainer from './text_container.vue'
	import imgContainer from './img_container.vue'
	import editFocusWrap from './edit-focus-wrap.vue'
	import change from './js/change'
	import editor from './js/editor'
	import util from '@/assets/util'

	const EVENTMAP = {
		'delete': 'remove',
		'set-style': 'setStyle',
		'copy': 'copy',
		'paste': 'paste',
		'lock' : 'lock'
	}

	export default{
		components: {
			textContainer,
			imgContainer,
			editFocusWrap
		},
		props:{
			editorData:{
				type: Object,
				default:{

				}
			},
		},
		data() {
			return {
				winWidth:0,
				currentMudule: null,
				currentEditor: null, // 当前选中的编辑器
				currentType:'',	 // 当前选择模块的类型 是模块 还是 编辑器
				moduleIndex: -1, // 当前模块的序号
				editorIndex: -1, // 当前编辑器在模块中的序号
				// 编辑器数据
				editModules: null,
				// 节点工具框参数
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
			init () {
				this.winWidth = util.size().width
				// console.log(this.editorData)
				const editorData = this.editorData
				this.editModules = editorData.editModules;
				if(editorData.moduleIndex >= 0 ){
					this.currentMudule = this.editModules[editorData.moduleIndex]
					this.moduleIndex = editorData.moduleIndex
					this.selectModule(this.currentMudule, this.moduleIndex)
				}
				
			},
			test () {
				console.log(11)
			},
			select(editor, moduleIndex, editorIndex){
				// 选择编辑区域
				// console.log(arguments)
				if(this.currentEditor === editor && this.currentType == 'editor'){
					console.log(true)
					this.changeOptionsModel()
					return
				}
				this.moduleIndex = moduleIndex;
				this.editorIndex = editorIndex
				this.currentMudule = this.editModules[moduleIndex];
				this.currentEditor = editor;
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
				console.log('selectModule')
				if(this.currentMudule == module && this.currentType === 'module'){
					console.log(index)
					// this.changeOptionsModel()
					return
				}
				this.currentEditor = null;
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
				// 设置节点工具框参数
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
					change.change(evt, type, this.currentEditor,this.options, this.moduleTop)
				}else if(this.currentType === 'module') {
					if(type === 'bottom'){
						change.change(evt, 'bottom', this.currentMudule.style, this.options, this.moduleTop)
					}
				}
				
				
			},

			edit(type) {
				// console.log(type)
				if(this.currentType=='editor'){
					this[EVENTMAP[type]]()
				}

			},

			setStyle () {
				this.$emit('tap', 'hpp_text_style')
				// console.log(this.currentEditor)
			},

			remove(type) {
				if(type === 'module'){

				}else {
					// console.log(this.moduleIndex,this.editorIndex)
					this.currentMudule.editors.splice(this.editorIndex, 1);
					this.currentMudule = null;
				}
				
			},

			longtouch(editor){
				if(editor === this.currentEditor){
					if(this.options.model === 1){
						this.options.wordEdit = !this.options.wordEdit
					}else if(this.options.model === 2){
						this.options.move = !this.options.move
						
					}
				}
				
				// console.log(this.options)
			}

		},

		created(){
			this.init();
			// 获取设备宽度
			
			// console.log(this.winWidth)
			console.log(this)
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