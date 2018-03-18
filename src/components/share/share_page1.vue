<template>

		<div class="m-share">
			<div class="btn1"></div>
			<div class="btn2" @click="share"></div>
			<div class="rules">
				<div class="rule flex" v-for="(rule, index) in rules">
					<div>{{index + 1 + '、'}}</div><div>{{rule}}</div>
				</div>
			</div>
		</div>

</template>
<script>
	export default{
		data () {
			return {
				rules:[
					'活动期间，用户分享活动页面给好友，获得3位好友注册成功后，分享的成果是获得一张免费体验券。',
					'活动期间，用户所获得免费体验券可赠送QQ微信好友，免费体验券有效期一年。'
				]
			}
		},
		methods: {
			share() {
				this.$emit('share')
			}
		}
	}
</script>
<style>
	.m-share{
		position: relative;
		width: 100%;
		height: 100%;
		background-image: url(../../../static/images/share_bg.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
	}

	.m-share .btn1{
		position: absolute;
		right: 40px;
		top:30px;
		width: 42px;
		height: 56px;
		background-image: url(../../../static/images/icon.png);
		background-position: -90px -65px;
	}
	.m-share .btn2{
		position: absolute;
		left: 50%;
		top:65.6%;
		width: 232px;
		height: 46px;
		transform: translateX(-50%);
		background-image: url(../../../static/images/icon.png);
		background-position: 0 -260px;
	}

	.m-share .rules{
		position: absolute;
		bottom: 0;
		padding: 20px;
	}

	.m-share .rule{
		margin-bottom: 5px;
		align-items:flex-start;
		justify-content:flex-start;
		color: #CFC4BA;
		font-size: 13.5px;
		text-align: left;
		line-height: 1.5;
	}
</style>