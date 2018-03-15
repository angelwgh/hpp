<template>
	<div style="width:100%; height:100%">
		<div class="m-share-page2">
			<yd-navbar :title="title"
					   :bgcolor="headStyle.bgcolor"
					   :color="headStyle.color">
				<div slot="left" :style="{color: headStyle.color}" @click="back">
					<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
				</div>
				<div slot="right" :style="{color: headStyle.color}">
					
				</div>		   	
			</yd-navbar>
			<div class="containt flex">
				<div class="icons-group flex">
					<div class="icon-item ">
						<div class="icon wx"></div>
						<div class="text">微好友</div>
					</div>
					<div class="icon-item">
						<div class="icon py"></div>
						<div class="text">朋友圈</div>
					</div>
				</div>
				<div class="btns">
					<yd-button
						bgcolor="#FF5C83"
						color="#fff"
						shape="circle">马上分享</yd-button>
					<!-- <button></button> -->
				</div>
			</div>
		</div>
	</div>
	
</template>
<script>
	export default {
		data () {
			return {
				title: '选择赠送',
				headStyle:{
					color: '#fff',
					bgcolor: '#000'
				},
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			}
		}
	}
</script>
<style>
	.m-share-page2{
		position: relative;
		width: 100%;
		height: 100%;
	}

	.m-share-page2 .containt{
		position: absolute;
		top: 50px;
		bottom: 0;
		width: 100%;
		flex-direction:column ;

	}
	
	.m-share-page2 .containt .icon-item{
		margin: 15px;
		padding-top: 7px;
		width: 74px;
		height: 72px;
		border-radius: 10px;
		background-color: #D4CCCA;
	}
	.m-share-page2 .containt .icon{
		margin: 0 auto;
		width: 40px;
		height: 40px;
		background-image: url(/static/images/icon.png);
		background-position: -210px 0;
	}

	.m-share-page2 .containt .icon.wx{
		background-position: -110px 0;
	}
	.m-share-page2 .containt .btns{
		margin-top: 40px;
	}

	.m-share-page2 .containt .btns button{
		padding:5px 30px;
		font-size: 20px;
	}
</style>