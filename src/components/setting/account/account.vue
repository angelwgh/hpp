<template>
	<div class="m-acount">
		<yd-navbar slot="navbar"
				   :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color">
			<div slot="left" :style="{color: headStyle.color}" @click="back">
				<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
			</div>
			<div slot="right" :style="{color: headStyle.color}">
				<!-- <i class="iconfont icon-jia" v-finger:tap="openFeatures"></i> -->
			</div>		   	
		</yd-navbar>
		<transition name="slide-left">
			<router-view class="account-route" />
		</transition>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				headStyle:{
					color: '#fff',
					bgcolor: '#000'
				},
				title:'账号管理'
				// title:'设置首页'
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			}
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.m-acount{
		.account-route{
			top:50px;
		}
	}
	
</style>