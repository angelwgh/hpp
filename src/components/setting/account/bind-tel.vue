<template>
	<div class="m-acc-bind-tel">
		<yd-navbar :title="title">
			<div slot="left">
	            <yd-navbar-back-icon v-finger:tap="back">返回</yd-navbar-back-icon>
	        </div>
	        <div slot="left">
	            <span class="close">关闭</span>
	        </div>

		</yd-navbar>

		<yd-cell-group>
	        <yd-cell-item>
	            <span slot="left" class="telnum">+86</span>
	            <yd-input slot="right" v-model="telnum"></yd-input>
	        </yd-cell-item>
	        <yd-cell-item>
	            <input slot="right" type="password" v-model="password" placeholder="请输入新密码">
	        </yd-cell-item>
	        <yd-cell-item>
	        	<input slot="right" type="password" v-model="password1" placeholder="请再次输入新密码">
	        </yd-cell-item>
	        <yd-cell-item>
	        	<span slot="left">输入验证码</span>
	        	<input type="text" slot="left" class="code">
				<button slot="right" class="send-code">发送验证码</button>
	        </yd-cell-item>
	    </yd-cell-group>
	    <div>
	    	<div class="find-psw" v-finger:tap="findPsw">找回密码</div>
	    </div>
		<div class="confirm">
			<yd-button type="primary" @click.native="confirm">确定</yd-button>
		</div>
	</div>
</template>

<script>
// src/components/common/header/index.js/

// console.log(header)
	export default {
		components: {

		},
		data () {
			return {
				title: '绑定手机号',
				telnum:'',
				password:'',
				password1:''
			}
		},
		methods: {
			confirm() {
				console.log(111)
				this.$router.push({name: 'home'})
			},
			back() {
				this.$router.go(-1)
			},
			findPsw() {
				this.$router.push({name: 'account_findpsw'})
			}
		}
	}
</script>

<style>
	.m-acc-bind-tel .close {
		margin-left: 5px
	}

	.m-acc-bind-tel .yd-cell-item {
		padding: 0 30px;
	}
	
	.m-acc-bind-tel .yd-cell-item:not(:last-child):after{
		margin:0;
		content: '';
		width: auto;
		height: 1px;
		position: absolute;
		bottom: 0;
		left: 30px;
		right:30px;
		background-color: #333;
	}
	.m-acc-bind-tel .telnum{
		padding-right: 30px;
		margin-right: 5px;
		font-weight: bold;
		position: relative;
	}

	.m-acc-bind-tel .telnum::before{
		position:absolute;
		right:3px;
		content: '';
		width: 0;
		height: 0;
		border: 4px solid #000;
		border-top-color: transparent;
		border-left-color: transparent;
		transform: translateY(20%) rotate(45deg);
	}

	.m-acc-bind-tel .code{
		margin-left: 10px;
		border:none;
		border:1px solid #ccc;
		border-radius: 5px;
		width: 80px;
		height: 35px;
		line-height: 35px;
	}

	.m-acc-bind-tel .send-code{
		width: 110px;
	    height: 30px;
	    color: #fff;
	    font-weight: bold;
	    font-size: 15px;
	    border: none;
	    border-radius: 5px;
	    background-color: #ff6699;
	}

	.m-acc-bind-tel .yd-cell:after{
		display: none;
	}

	.m-acc-bind-tel .confirm button{
		margin-top: 30px;
		width: 80px;
		height: 50px;
		line-height: 50px;
		font-size: 25px;
		color: #fff;
		border: none;
	    border-radius: 1000px;
		background-color: #ff6699;
	}
	.m-acc-bind-tel .find-psw{
		color: #AC7803;
		text-align: left;
		margin-left: 30px;
	}
</style>