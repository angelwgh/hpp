<template>
	<div class="m-card-bage">
		<yd-navbar slot="navbar"
				   :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color">
			<div slot="left" :style="{color: headStyle.color}" @click="back">
				<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
			</div>
			<div slot="right" :style="{color: headStyle.color}">
				<!-- <i class="iconfont icon-jia" v-finger:tap="openFeatures"></i> -->
			</div>		   	
		</yd-navbar>
		<div class="advert">
			<img src="../../../../static/images/slide1.jpg" alt="">
		</div>
		<div class="content">
			<yd-cell-item class="header">
				<div slot="left" class="icon-img">
					<div class="icon-img"></div>
				</div>
				<div slot="left" class="text">
					<p>新注册的会员名称<span>普通会员</span></p>
					<p>VIP.2019.3.9到期</p>
				</div>
                <span slot="right">
                	<span style="color:#C6C8C9">升级到VIP用户</span>
            	</span>
            </yd-cell-item>

            <yd-cell-item class="title">
				<div slot="left" >
					我的免费券
				</div>
                <span slot="right">
                	(105张) <i class="el-icon-arrow-down"></i>
            	</span>
            </yd-cell-item>
            <div class="tips" style="font-size:13px;padding: 5px 0">
            	<i class="iconfont icon-laba"></i>转赠给好友让他不再为详情页设计而忧
            </div>
            <div class="coupons-group flex">
            	<div class="coupon-item" v-for="item in showCoupens" v-finger:tap="select.bind(this,item)">
            		<div class="coupen-detail">
            			<img :src="src" alt="">
            			<img v-if="item.checked" :src="checkedSrc" alt="" class="checked">
            		</div>
            	</div>
            </div>

            <yd-button v-finger:tap="confirm">转赠好友</yd-button>
		</div>
	</div>
</template>
<script>
import img from '@/assets/images/card_bage/free.png'
import checkedImg from '@/assets/images/card_bage/checked.png'

console.log(img)
	export default {
		data () {
			return {
				src:img,
				checkedSrc:checkedImg,
				headStyle:{
					color: '#fff',
					bgcolor: '#000'
				},
				title:'我的券包',
				checkedNames:[],
				coupens:[],
				showLen: 10
			}
		},
		computed:{
			showCoupens () {
				const arr = [];
				const coupens = this.coupens
				for(let i = 0; i < this.showLen; i++){
					arr.push(coupens[i])
				}

				return arr
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			},
			tap (routeName) {
				this.$router.push({name:routeName})
			},
			confirm () {
				const coupens = this.coupens;
				const result = [];
				coupens.forEach((item)=>{
					// console.log(item)
					if(item.checked){
						result.push(item)
					}
				})
				this.showLen =  this.showLen + 10 > coupens.length ? coupens.length : this.showLen + 10

				// this.$router.push({name: 'cardbage_give'})
				// console.log(result)
			},
			select (coupen) {
				// 选择免费券
				coupen.checked = !coupen.checked
				// console.log(coupen)
			},
			getCoupens(){
				const coupens = this.coupens
				for(let i = 0; i < 30; i++){
					this.coupens.push({
						id:i,
						checked: false
					})
				}
				// this.coupens
			}
		},
		created() {
			this.getCoupens()
		}

	}
</script>
<style lang="less" ref="stylesheet/less">
	.m-card-bage{
		.advert{
			width: 100%;
			height: 200px;
			overflow: hidden;
			img{
				width: 100%;
				// height:100%;
			}
		}

		.content {
			.header{
				height: 70px;
				background-color: #6A6359;

				.icon-img{
					width: 50px;
					height: 50px;
					background-image: url(../../../../static/images/icon.png);
					background-position: -60px -370px;
				}

				.text{
					text-align: left;

					p{
						padding-left: 10px;
						&:nth-child(1){
							color: #1F0207;

							span{
								font-size: 12px;
								color: #CFCECA;
							}
						}

						&:nth-child(2){
							color: #BB7900;
							font-size: 12px;
						}
					}
				}
			}

			.title{
				padding: 0;
				margin: 0 15px;

				&:after{
					content: "";
				    position: absolute;
				    z-index: 0;
				    bottom: 0;
				    left: 0;
				    width: 100%;
				    border-bottom: dashed 1px #BBBCBC;
				    -webkit-transform: scaleY(.5);
				    transform: scaleY(.5);
				    -webkit-transform-origin: 0 0;
				    transform-origin: 0 0;
				}
			}

			.coupons-group{
				padding: 0 40px;
				flex-wrap: wrap;
				justify-content:flex-start;
				
				.coupon-item{
					width: 25%;
					padding: 5px;
					.coupen-detail{
						position: relative;
						img{
							width: 100%;

							&.checked{
								position: absolute;
								width: 33%;
								bottom: 0;
								left: 50%;
								transform: translateX(-50%);
								// margin-left: 50%;
							}
						}
					}
				}


			}
			button{
				margin-top: 20px;
				padding: 0 30px;
				border-radius: 1000px;
				font-size: 16px;
				height: 40px;
				color: #FBE3E0;
				background-color: #FF5C83;
			}
		}
	}
</style>