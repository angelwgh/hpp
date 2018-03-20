<!-- 切换账号 -->
<template>
	<div class="m-sitch-acc">
		<div class="ment-list">
			<yd-cell-group>
	            <yd-cell-item >
	            	<span slot="icon" class="qq"></span>
	                <span slot="left">QQ管理</span>
	                <span slot="right">阿提拉</span>
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
		<div class="ment-list">
			<yd-cell-group>
	            <yd-cell-item v-finger:tap="bindtel">
	            	<span slot="icon" class="tel"></span>
	                <span slot="left">绑定手机</span>
	                <!-- <span slot="right">18758246888</span> -->
	                <!-- <span slot="right"><i class="icon-right-arrow"></i></span> -->
	            </yd-cell-item>
	        </yd-cell-group>
		</div>
		<div v-if="showBottomMenu" class="bottom-menu">
			<yd-actionsheet :items="bottomMenu.items" v-model="bottomMenu.show" cancel="取消"></yd-actionsheet>
		</div>
		 
	</div>
</template>

<script>
import { mapGetters ,mapMutations } from 'vuex'
	export default{
		data () {
			return {
				showBottomMenu: false,
				bottomMenu:{
					show: false,
					items: [
						{
							label: '确认解除绑定吗',
							stay: true
						},
						{
							label: '解除绑定',
							callback: () => {
								console.log(this)
							}
						}
					]
				}
			}
		},
		computed: {
			...mapGetters('setting',{
				headerInfo: 'getHeaderInfo'
			})
		},
		methods:{
			...mapMutations('setting', {
				setHeaderInfo: 'setHeaderInfo'
			}),

			setTitle(title) {
				this.setHeaderInfo({title: title})
			},

			tap (type) {

				if( this.showBottomMenu == false ){
					this.showBottomMenu = true;
				}
				
				this.bottomMenu.show = true;
			},
			bindtel () {
				this.$router.push({name: 'account_bindtel'})
			}
		},
		created () {
			this.setTitle('切换账号')
			console.log(this.headerInfo)
		}
	}
</script>
<style lang="less" rel="stylesheet/less">
	.m-sitch-acc{
		.ment-list{
			padding: 0 15px;

			.yd-cell{
				.yd-cell-icon{
					span{
						display: block;
						width: 40px;
						height: 40px;
						transform: scale(0.7);
						background-image: url(../../../../static/images/icon.png);

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
					background-image: url(../../../../static/images/icon.png);
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

		.bottom-menu {
			.yd-actionsheet-item{
				border-bottom: 1px solid #ccc;
			}
		}
	}
</style>