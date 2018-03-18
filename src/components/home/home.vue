<template>
	<div class="m-home">
		<div class="home-inner">
			<yd-navbar class="header">
				<div slot="right">
					<div class="icon" @click="openLink('setting')"></div>
				</div>
			</yd-navbar>
			<div class="containt">
				<div class="m-slide">
					<yd-slider autoplay="3000">
				        <yd-slider-item v-for="src in slide.imgs" :key="src">
				            <img :src="src">
				        </yd-slider-item>
				    </yd-slider>
				</div>
				<div class="btns flex">
					<div @click="openLink('hpp_panel')">
						<div class="icon"></div>
						<div class="text">嗨披模板</div>
					</div>
					<div @click="openLink('new_user_panel')">
						<div class="icon"></div>
						<div class="text">自制模板</div>
					</div>
					<div>
						<div class="icon"></div>
						<div class="text">嗨披社区</div>
					</div>
					<div @click="openLink('share')">
						<div class="icon"></div>
						<div class="text">分享体验</div>
					</div>
				</div>
				<div class="foot">
					<div class="icon"></div>
				</div>
			</div>
		</div>
		
	</div>
    
</template>

<script>
    export default {
    	data () {
    		return {
    			slide: {
    				imgs:[
    					"./static/images/slide1.jpg",
    					"./static/images/slide2.jpg",
    					"./static/images/slide3.jpg"
    				]
    			}
    		}
    	},
    	methods: {
    		newUserPanel () {
    			this.$router.push({name:'new_user_panel'})
    		},
    		hppPanel() {
    			this.$router.push({name:'hp_panel'})
    		},
    		openLink(name) {
    			this.$router.push({name})
    		}
    	}
    }
</script>
<style>
	.m-home .home-inner{
		position: relative;
		width: 100%;
		height: 100%;
	}
	.m-home .navbar-bottom-line-color:after {
	  border-color: transparent !important;
	}

	.m-home .header .icon{
		
		width: 30px;
		height: 30px;
		background-image: url(../../../static/images/icon.png);
		background-position: 0 -90px;
	}

	.m-home .containt .m-slide {
		padding: 0 20px;
	}

	.m-home .containt .btns {
		margin: 25px 15px 0;
	}
	
	.m-home .containt .btns > div{
		flex: 0 0 25%;
	}

	.m-home .containt .btns > div .icon {
		margin: 0 auto;
		width: 50px;
		height: 50px;
		background-image: url(../../..//static/images/icon.png);
		background-position: 0 -130px;
	}

	.m-home .containt .btns > div:nth-child(2) .icon{
		background-position: -60px -130px;
	}

	.m-home .containt .btns > div:nth-child(3) .icon{
		background-position: -120px -130px;
	}

	.m-home .containt .btns > div:nth-child(4) .icon{
		background-position: -180px -130px;
	}

	.m-home .containt .btns > div .text{
		font-size: 12px;
		/*font-weight: bold;*/
	}
	
	.m-home .containt .foot{
		margin-top: 30px;
		width: 100%;
	}
	.m-home .containt .foot .icon{
		margin: 0 auto 30px;
		width: 231px;
		height: 63px;
		background-image: url(../../..//static/images/icon.png);
		background-position: 0 -195px;
	}
</style>