<template>
	<div class="m-login-box flex">
		<div class="login">
			<div class="icons flex">
				<div class="qq"></div>
				<div class="wx"></div>
				<div class="wb"></div>
			</div>
			<div class="message">
				<p>请选择登录方式</p>
			</div>
			<div class="btns">
				<button @click="login">确认登录</button>
			</div>
		</div>
		
	</div>
</template>
<script>
	export default {
		methods: {
			login() {
				this.$router.push({name: 'bindtel'})
			}
		}
	}
</script>

<style>
	.m-login-box{
		width: 100%;
		height: 100%;
	}
	
	.m-login-box .login{
		width: 180px;
	}
	.m-login-box .login .icons div{
		width: 40px;
		height: 40px;
		background-image: url(../../../static/images/icon.png);
		background-repeat: no-repeat;
		
	}

	.m-login-box .login .icons{
		justify-content:space-between;
	}
	
	.m-login-box .login .icons .qq{
		background-position: -160px 0;
	}

	.m-login-box .login .icons .wx{
		background-position: -110px 0;
	}

	.m-login-box .login .icons .wb{
		background-position: -60px 0;
	}

	.m-login-box .login .message{
		margin: 20px 0 10px;
		font-size: 12px;
		font-weight: bold;
	}

	.m-login-box .login .btns button{
		border: none;
		border-radius: 1000px;
		width: 180px;
		height: 30px;
		color: #fff;
		background-color: #ff6699;
	}
</style>