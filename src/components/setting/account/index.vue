<template>
	<div>
		<div class="advert">
			<img src="/static/images/advert.jpg" alt="">
		</div>
		<div class="ment-list">
			<yd-cell-group>
	            <yd-cell-item >
	            	<span slot="icon" class="qq"></span>
	                <span slot="left">QQ管理</span>
	                <span slot="right">显示QQ名称</span>
	                <span slot="right"><i class="icon-right-arrow"></i></span>
	            </yd-cell-item>
	             <yd-cell-item v-finger:tap="tap.bind(this, 'wx')">
	            	<span slot="icon" class="wx"></span>
	                <span slot="left">微信管理</span>
	                <span slot="right"><yd-button bgcolor="#FF5C83" color="#fff" shape="circle">绑定</yd-button></span>
	                <!-- <span slot="right"><i class="icon-right-arrow"></i></span> -->
	            </yd-cell-item>
	             <yd-cell-item v-finger:tap="tap.bind(this, 'wb')">
	            	<span slot="icon" class="wb"></span>
	                <span slot="left">新浪微博</span>
	                 <span slot="right"><yd-button bgcolor="#FF5C83" color="#fff" shape="circle">绑定</yd-button></span>
	                <!-- <span slot="right"><i class="icon-right-arrow"></i></span> -->
	            </yd-cell-item>
	        </yd-cell-group>
		</div>
		<div class="line-bar"></div>
			<div class="ment-list">
				<yd-cell-group>
		            <yd-cell-item >
		            	<span slot="icon" class="tel"></span>
		                <span slot="left">手机号码</span>
		                <span slot="right">18758246888</span>
		                <span slot="right"><i class="icon-right-arrow"></i></span>
		            </yd-cell-item>
		        </yd-cell-group>
			</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				headStyle:{
					color: '#fff',
					bgcolor: '#000'
				},
				title:'账号管理'
				// title:'设置首页'
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			},
			tap (type) {
				this.$router.push({name:'account_set', params:{type: type}})
			}
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.m-acount{
		.advert{
			overflow: hidden;
			height: auto;
			img {
				width: 100%;
			}
		}

		.ment-list{
			padding: 0 15px;

			.yd-cell{
				.yd-cell-icon{
					span{
						display: block;
						width: 40px;
						height: 40px;
						transform: scale(0.7);
						background-image: url(/static/images/icon.png);

						&.qq{
							background-position: -160px 0;
						}

						&.wx{
							background-position: -110px 0;
						}

						&.wb{
							background-position: -60px 0;
						}

						&.tel{
							background-position: -210px -65px;
						}
					}
				}
				.icon-right-arrow{
					display: block;
					width: 14px;
					height: 25px;
					background-image: url(/static/images/icon.png);
					background-position: -35px -90px;
				}
				.yd-cell-item{
					padding: 0;

					.yd-cell-left{
						font-weight: bold;
					}
					.yd-cell-right{
						.yd-btn{
							height: auto;
							font-size: 16px;
						}
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

		.line-bar{
			height: 20px;
			background-color: #000;
		}
	}
	
</style>