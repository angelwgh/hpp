<template>
<!-- 	<yd-layout class="m-apply-member">
		<yd-navbar slot="navbar"
				   :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color"
				   :fontsize="headStyle.title.fontSize">
			<div slot="left" :style="{color: headStyle.color, fontSize:headStyle.fontSize}" @click="back">
				<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
			</div>
			<div slot="right" :style="{color: headStyle.color}">
				
			</div>		   	
		</yd-navbar>
		<div class="content">
			<img class="img" :src="imgsrc" alt="">
		</div>
	</yd-layout> -->
	<div>
		<div class="m-apply-member">
			<yd-navbar :title="title"
					   :bgcolor="headStyle.bgcolor"
					   :color="headStyle.color"
					   :fontsize="headStyle.title.fontSize">
				<div slot="left" :style="{color: headStyle.color, fontSize:headStyle.fontSize}" @click="back">
					<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
				</div>
				<div slot="right" :style="{color: headStyle.color}">
					
				</div>		   	
			</yd-navbar>
			<div class="content" 
				v-finger:tap="pay"
				:style="{height: winHeight-50 + 'px'}">
				<img class="img" :src="imgsrc" alt="">
			</div>
		</div>
		
	</div>
</template>
<script>
import imgsrc from '@/assets/images/apply_member.jpg'
import util from '@/assets/util'
	export default {
		data () {
			return {
				imgsrc,
				title: '申请会员',
			}
		},
		computed: {
			headStyle () {
				return this.global.headStyle.black;
			},
			winHeight () {
				return util.size().height
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			},
			pay() {
				this.$router.push({name: 'pay'})
			}
		},
		created() {
			// console.log(this.global)
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.m-apply-member{
		overflow: hidden;
		width: 100%;
		height: 100%;
		flex-direction:column ;
		justify-content:flex-start;
		align-items:stretch;
		
		.yd-navbar{

		}
		.content{
			flex:1;
			.img{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>