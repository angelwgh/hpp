<template>
	<div class="m-authorize-box flex">
		<div class="authorize">
			<div class="icon"></div>
			<div class="message">
	
				<!-- <p><span>"嗨披详情" 想访问您的照片</span></p>
				<p><span>是否允许</span></p>
				<p><span>开启嗨披详情才可访问您的照片哦</span></p> -->
				<p>未授权使用照片访问，请检查设置后重试</p>
			</div>
			<div class="btns">
				<button @click="toLogin">我知道了</button>
			</div>
		</div>
	</div>
	
</template>

<script>
	export default{
		methods: {
			toLogin () {
				this.$router.push({name: 'login'})
			}
		}
	}
</script>
<style>
	.m-authorize-box{
		width: 100%;
		height: 100%;
	}
	.m-authorize-box .authorize{
		padding-top: 10px;
		width: 220px;
		border-radius: 10px;
		border: 1px solid #ccc;
		overflow: hidden;
	}

	.m-authorize-box .authorize .icon{
		margin: 0 auto;
		width: 50px;
		height: 50px;
		transform: scale(0.8);
		background-image: url('../../../static/images/icon.png');
	}

	.m-authorize-box .authorize .message{
		font-weight: bold;
		font-size: 15px;
		padding: 5px 21px;
	}
	.m-authorize-box .authorize .btns{
		margin:10px 0 20px;
	}
	.m-authorize-box .authorize .btns button{
		border: none;
		border-radius: 1000px;
		width: 180px;
		height: 30px;
		color: #fff;
		background-color: #ff6699;
	}

	/*.m-allow-box .allow .message p{
		font-weight: bold;
		text-align: center;
	}

	.m-allow-box .allow .message p:nth-child(3){
		padding-top: 5px;
		font-weight: normal;
		font-size: 12px;
	}

	.m-allow-box .allow .message p > span {
		display: inline-block;
		background-color: #ffcccc;
	}

	.m-allow-box .allow .btns{
		margin-top: 10px;
		height: 35px;
		border-top: 1px solid #ccc;
		display: flex;
	}
	
	.m-allow-box .allow .btns .line{
		width: 1px;
	}
	.m-allow-box .allow .btns button{
		width: 50%;
		border: none;
		color: #fff;
		background-color: #33cccc;
	}

	.m-allow-box .allow .btns button:nth-child(3){
		background-color: #ff6699;
	}*/
</style>