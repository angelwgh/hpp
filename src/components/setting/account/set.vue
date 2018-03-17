<template>
	<div class="m-account-set">
		<div class="bar1 flex">
			<div class="icon-top icon-top1"
				:style="{
					backgroundPosition:iconPosition
				}"></div>
			<div class="icon-top icon-top2"></div>
			<div class="icon-top icon-top3"></div>
		</div>

		<div class="bar2">
			<yd-cell-item>
				<span slot="icon" class="head-img"></span>
                <span slot="left">YOUMEGO林子塍</span>
                <span slot="right" v-finger:tap="tap.bind(this, 'switch')">切换账号</span>
            </yd-cell-item>
		</div>
		<div class="bar3">
			<yd-button>确认</yd-button>
		</div>
		<div class="bar4">
			<p>该应用将访问你的公开资料，好友信息。</p>
			<p>更多权限：</p>
			<yd-checkbox color="#fff">关注嗨披详情公众号</yd-checkbox>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				type:'',
				data:{

				}
			}
		},
		computed:{
			iconPosition(){
				let result;
				if(this.type ==='wb'){
					result = '0 -320px'
				}else if(this.type === 'wx'){
					result = '0 -370px'
				}
				return result
			}
		},
		methods:{
			tap (type) {
				if(type === 'switch'){
					this.$router.push({name:'account_siwtch'})
				}
			}
		},
		created() {
			this.type = this.$route.params.type
			console.log(this.$route.params)
		}
	}
</script>
<style lang="less"  rel="stylesheet/less">
	.m-account-set{
		.bar1{
			margin-top: 40px;
			.icon-top{
				width: 50px;
				height: 50px;
				background-image: url(/static/images/icon.png);

				&.icon-top1{
					// background-position: 0 -320px;
				}

				&.icon-top2{
					background-position: -120px -320px;
				}

				&.icon-top3{
					background-position: -60px -320px;
				}
			}
		}

		.bar2{
			margin-top: 40px;
			border-top: 1px solid #A8A9A9;
			border-bottom: 1px solid #A8A9A9;
			.head-img{
				display: block;
				width: 50px;
				height: 50px;
				background-image: url(/static/images/icon.png);
				background-position: -60px -320px;
				transform: scale(0.8);
			}

			.yd-cell-right{
				color:#EA9700
			}
		}

		.bar3{
			margin-top: 40px;
			button{
				padding: 0 30px;
				border-radius: 1000px;
				font-size: 16px;
				height: 40px;
				color: #FBE3E0;
				background-color: #FF5C83;
			}
		}

		.bar4{
			margin-top: 20px;
			padding-left: 15px;
			text-align: left;
			color: #7B7A7B;
			p{
				margin-bottom: 15px;
			}

			.yd-checkbox{
				.yd-checkbox-icon{
					border:1px solid ;
					border-color:#6A6B62 !important;

					&>i{
						border-color: #6A6B62;
					}
				}
				.yd-checkbox-text{
					color: #7B7A7B;
				}
			}
		}
	}
</style>