<template>
	<!-- <div class="m-new-user-panel">
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
	</div> -->
	<yd-layout>
		<yd-navbar slot="navbar"
				   :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color">
			<div slot="left" :style="{color: headStyle.color}" @click="back">
				<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
			</div>
			<div slot="right" :style="{color: headStyle.color}">
				<i class="iconfont icon-jia" @click="openFeatures"></i>
			</div>		   	
		</yd-navbar>
		<div class="container">
			<v-edit></v-edit>
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
			},
			openFeatures() {
				console.log(1111)
				this.$router.push({name:'panels_features'})
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
