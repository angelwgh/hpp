<template>
	<div>
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
		<div class="advert">
			<img src="/static/images/advert.jpg" alt="">
		</div>
		<div class="ment-list">
			<yd-cell-group>
	            <yd-cell-item v-finger:tap="tap.bind(this,'account')">
	                <span slot="left">账号管理</span>
	                <span slot="right"><i class="icon-right-arrow"></i></span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">我的券包</span>
	                <span slot="right"><i class="icon-right-arrow"></i></span>
	            </yd-cell-item>
	        </yd-cell-group>
		</div>
		<div class="title-middle">
			其他设置
		</div>
		<div class="ment-list">
			<yd-cell-group>
	            <yd-cell-item>
	                <span slot="left">嗨披详情声明</span>
	                <span slot="right"><i class="icon-right-arrow"></i></span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">嗨披详情介绍</span>
	                <span slot="right"><i class="icon-right-arrow"></i></span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">嗨披详情课程</span>
	                <span slot="right"><i class="icon-right-arrow"></i></span>
	            </yd-cell-item>
	            <yd-cell-item>
	                <span slot="left">购买嗨披广告</span>
	                <span slot="right"><i class="icon-right-arrow"></i></span>
	            </yd-cell-item>
	        </yd-cell-group>
		</div>
		
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
				title:'嗨披设置'
				// title:'设置首页'
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			},
			tap (routeName) {
				this.$router.push({name:routeName})
			}
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.advert{
		overflow: hidden;
		height: 200px;
		img {
			width: 100%;
		}
	}
	.ment-list{
		padding: 0 15px;

		.yd-cell{
			.icon-right-arrow{
				display: block;
				width: 14px;
				height: 25px;
				background-image: url(/static/images/icon.png);
				background-position: -35px -90px;
			}
			.yd-cell-item{
				padding: 0;

				.yd-cell-left{
					font-weight: bold;
				}
				&:not(:last-child):after{
					margin-left: 0;
					border-bottom: dashed 1px #BBBCBC;
				}
			}

			&:after{
				border-bottom: dashed 1px #BBBCBC;
			}
		}
	}

	.title-middle{
		padding-left: 15px;
		height: 40px;
		line-height: 40px;
		text-align: left;
		color: #fff;
		background-color: #000;
	}
	
</style>