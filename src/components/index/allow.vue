<template>
	<div class="m-allow-box">
		<div class="allow">
			<div class="message">
				<p><span>"嗨披详情" 想访问您的照片</span></p>
				<p><span>是否允许</span></p>
				<p><span>开启嗨披详情才可访问您的照片哦</span></p>
			</div>
			<div class="btns">
				<button @click="allow">不允许</button>
				<div class="line"></div>
				<button @click="allow">允许</button>
			</div>
		</div>
	</div>
	
</template>

<script>
	import { mapMutations } from 'vuex'

	export default{
		methods: {
			allow () {
				this.end('authorize')
			},
			...mapMutations({
				end: 'setIndexShow'
			})
		}
	}
</script>
<style>
	.m-allow-box{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content:center;
		align-items:center;
	}
	.m-allow-box .allow{
		padding-top: 10px;
		width: 220px;
		border-radius: 10px;
		border: 1px solid #ccc;
		overflow: hidden;
	}

	.m-allow-box .allow .message p{
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
		/*background-color: #ffcccc;*/
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
	}
</style>