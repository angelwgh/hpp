<template>
	<yd-layout>
		<yd-navbar slot="navbar"
				   :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color">
			<div slot="left" :style="{color: headStyle.color}" @click="back">
				<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
			</div>
			<div slot="right" :style="{color: headStyle.color}">
				<i class="iconfont icon-jia" @click="openNewPage('panels_features')"></i>
			</div>		   	
		</yd-navbar>

		<div class="container">
			<keep-alive>
			 <v-edit 
				ref="edit"
				:editorData="editData"
				@tap="openNewPage"></v-edit>
			</keep-alive>
			
		</div>

	    </yd-layout>
</template>
<script>
	import edit from '@/components/common/edit/edit.vue'
	import { mapGetters ,mapMutations } from 'vuex'
	export default {
		components:{
			vEdit: edit
		},
		data () {
			return {
				headStyle:{
					color: '#fff',
					bgcolor: '#000'
				},
				title:'自制模板'
			}
		},
		computed: {
			...mapGetters({
				editData: 'getEditData'
				
			})
		},
		methods: {
			...mapMutations({
				setEditData: 'setEditData'
			}),
			back() {
				this.$router.go(-1)
			},
			openNewPage(name) {
				// console.log(1111)
				this.updataEditData()
				// this.setEditData()
				this.$router.push({name})
			},
			updataEditData() {
				const obj = {
					editModules: this.$refs.edit.editModules,
					moduleIndex: this.$refs.edit.moduleIndex,
					editorIndex: this.$refs.edit.editorIndex,
				}
				// console.log(this.$refs.edit.editModules)
				this.setEditData(obj)
			},

			// tap (type) {
			// 	console.log(type)
			// 	this.updataEditData()
			// 	this
			// }
		}
	}
</script>
<style>
	.m-new-user-panel .navbar-bottom-line-color:after {
	  border-color: transparent !important;
	}

	.m-new-user-panel .icon-jia{
		font-weight: bold;
		font-size: 20px;
	}
</style>
