<template>
	<yd-layout>
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
			<div class="container">
				<div class="top-bar">
					
				</div>
				<yd-cell-group class="menus-group">
		            <yd-cell-item 
		            	v-for="item in menus" 
		            	:key="item.id"
		            	@click.native="tap(item.name)"
		            	>
		                <span slot="left">{{item.title}}</span>
		                <span slot="right"><i class="icon-right-arrow"></i></span>
		            </yd-cell-item>
		        </yd-cell-group>
			</div>
		        <!-- <yd-navbar slot="navbar" title="NavBar">
		            <router-link to="#" slot="left">
		                <yd-navbar-back-icon></yd-navbar-back-icon>
		            </router-link>
		        </yd-navbar> -->
				
		      <!--   <div v-for="n in 100">乱七八糟的内容在这里，超出容器，将出现滚动条。</div> -->



		       <!--  <yd-tabbar slot="tabbar">
		            <yd-tabbar-item title="首页" link="#" active>
		                <yd-icon name="home" slot="icon"></yd-icon>
		            </yd-tabbar-item>
		            <yd-tabbar-item title="购物车" link="#">
		                <yd-icon name="shopcart-outline" slot="icon"></yd-icon>
		            </yd-tabbar-item>
		            <yd-tabbar-item title="个人中心" link="#">
		                <yd-icon name="ucenter-outline" slot="icon"></yd-icon>
		            </yd-tabbar-item>
		        </yd-tabbar> -->

		    </yd-layout>
</template>
<script>
	console.log(2222222)
	export default {
		data () {
			return {
				headStyle:{
					color: '#fff',
					bgcolor: '#000'
				},
				title:'功能栏',
				menus:[
					{
						id: 1,
						name:'text',
						title:'文字编辑'
					},
					{
						id: 2,
						name:'img',
						title:'图形导入'
					},
					{
						id: 3,
						name:'video',
						title:'视频导入'
					},
					{
						id: 4,
						name:'detail',
						title:'产品细节图形'
					},
					{
						id: 5,
						name:'other',
						title:'信任、资质、服务、物流标识图片'
					},
				]
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			tap(name) {
				console.log(name)
				this.$router.push({name:'panels_feature', params: {type: name}})
				// console.log(name)
			}
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.top-bar{
		width: 100%;
		height: 150px;
		background-color: #197691;
	}

	.menus-group{
		padding: 0 15px;
		.yd-cell{
			.icon-right-arrow{
				display: block;
				width: 14px;
				height: 25px;
				background-image: url(../../../static/images/icon.png);
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
</style>