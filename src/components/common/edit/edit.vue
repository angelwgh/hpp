<template>
	<div class="m-edit">
		<!-- <text-container @select="select"></text-container> -->
		<div>
			<div class="edit-module" 
				v-for="(module, moduleIndex) in editModules" 
				:style='{
					backgroundColor: module.style.bgc,
					height: module.style.height,
					width: module.style.width
				}'
				@click="selectModule(module, moduleIndex)"
				>
				<components v-for="(editor, editorIndex) in module.editors"
							:is="editor.componentName"
							@select="select"
							:key="editorIndex"
							:editorData="editor"
							:moduleIndex="moduleIndex">
				</components>
				<!-- <components :is="module.name" @select="select"></components>
				<components :is="module.name" @select="select"></components> -->
			</div>
		</div>
		<edit-focus-wrap 
			 v-show="currentMudule"
			 :options="options"
			 @move="move"></edit-focus-wrap>
	</div>
</template>
<script>
	import textContainer from './text_container.vue'
	import editFocusWrap from './edit-focus-wrap.vue'
	import change from './js/change'
	export default{
		components: {
			textContainer,
			editFocusWrap
		},
		data() {
			return {
				currentMudule:null,
				moduleIndex: -1,
				editModules:[
					{	
						editors:[
							{
								type: 'text',
								componentName: 'text-container',
								top:30,
								left:30,
								width: 300,
								height: 30
							}
						],

						name: 'text-container',
						style:{
							bgc:'#fff',
							width:'100%',
							height:'400px'
						}
					},
					{
						editors:[
							{
								type: 'text',
								componentName: 'text-container',
								top:30,
								left:30,
								width: 50,
								height: 80
							}
						],
						style:{
							bgc:'#fff',
							width:'100%',
							height:'300px'
						}
					}
				],
				options: {
					type:'text',
					left:20,
					top:20,
					width:30,
					height:200,
					move: false
				}

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
			select(editor, moduleIndex){
				this.moduleIndex = moduleIndex;
				this.currentMudule = this.editModules[moduleIndex];
				this.editor = editor;

				const data = {
					move:false,
					type: editor.type,
					left: editor.left,
					width: editor.width,
					top: this.moduleTop + editor.top,
					height: editor.height
				}

				this.setOptions(data)
			},
			selectModule(module, index){
				this.currentMudule = module;
				this.moduleIndex = index;
		

				const data = {
					move:false,
					type:'module',
					left: 0,
					width:375,
					top: this.moduleTop,
					height: parseInt(module.style.height)
				}
				this.setOptions(data)
			},

			setOptions(data) {
				console.log(data)
				this.options = data
			},

			move(evt,type){
				change.change(evt, type, this.editor,this.options, this.moduleTop)
				// console.log(type)
			}

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