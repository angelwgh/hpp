<template>
	<div class="m-feture">
		<yd-navbar slot="navbar"
				   :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color">
			<div slot="left" :style="{color: headStyle.color}" @click="back">
				<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
			</div>
			<!-- <div slot="right" :style="{color: headStyle.color}">
				<i class="iconfont icon-jia" v-finger:tap="openFeatures"></i>
			</div>	 -->	   	
		</yd-navbar>
		<yd-grids-group :rows="5" :title="currentList.title">
	        <yd-grids-item v-for="(item, index) in currentList.list" :key="index">
	        	<div slot="else" 
	        		 class="icon"
	        		 :style="{
	        		 	backgroundImage: 'url('+ bottons.bgSrc+')',
	        		 	backgroundPosition: '-'+item.left+ 'px -'+ item.top + 'px'
	        		 }"></div>
	        </yd-grids-item>
	    </yd-grids-group>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				headStyle:{
					color: '#000',
					bgcolor: '#fff'
				},
				title:'功能栏',
				type: {},
				bottons:{
					bgSrc:'./static/images/icon.png',
					text:{
						title:'文字编辑',
						list:[
							{
								left:380,
								top:0
							},
							{
								left:440,
								top:0
							},
							{
								left:500,
								top:0
							},
							{
								left:560,
								top:0
							},
							{
								left:620,
								top:0
							}
						]
					},
					img: {
						title:'图形设计',
						list: [
							{
								left:380,
								top:60
							},
							{
								left:440,
								top:60
							},
							{
								left:500,
								top:60
							},
							{
								left:560,
								top:60
							},
							{
								left:620,
								top:60
							},
							{
								left:380,
								top:120
							},
							{
								left:440,
								top:120
							},
							{
								left:500,
								top:120
							},
							{
								left:560,
								top:120
							},
							{
								left:620,
								top:120
							}
						]
					},
					video: {
						title:'视频导入',
						list: [
							{
								left:380,
								top:180
							},
							{
								left:440,
								top:180
							},
						]
					},
					detail: {
						title:'产品细节图形',
						list: [
							{
								left:380,
								top:240
							},
							{
								left:440,
								top:240
							},
							{
								left:500,
								top:240
							},
							{
								left:560,
								top:240
							},
							{
								left:620,
								top:240
							},
							{
								left:380,
								top:300
							},
							{
								left:440,
								top:300
							},
							{
								left:500,
								top:300
							},
							{
								left:560,
								top:300
							},
							{
								left:620,
								top:300
							},
							{
								left:380,
								top:360
							},
							{
								left:440,
								top:360
							}
						]
					},
					other: {
						title:'信任、资质、服务、物流标识图片',
						list: [
						]
					}
				}
			}
		},
		computed:{
			currentList() {
				return this.bottons[this.type]
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			}
		},
		created() {
			this.type = this.$route.params.type
			// console.log(this.$route.params)
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.m-feture{

		.icon{
			margin: 0 auto;
			width: 60px;
			height: 60px;
			border: 1px solid #BBBCBC;
			border-radius: 5px;
			// background-image: url();
		}
	}
</style>