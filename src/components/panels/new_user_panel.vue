<template>
	<div class="m-new-user-panel">
		<yd-navbar :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color">
			<div slot="left" :style="{color: headStyle.color}" @click="back">
				<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
			</div>
			<div slot="right" :style="{color: headStyle.color}">
				<i class="iconfont icon-jia"></i>
			</div>		   	
		</yd-navbar>
		<div class="container">
			<v-edit></v-edit>
		</div>
	</div>
</template>
<script>
	import edit from '@/components/common/edit/edit.vue'
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
		methods: {
			back() {
				this.$router.go(-1)
			}
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
