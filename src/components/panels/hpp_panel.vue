<template>
	<div>
		<yd-navbar :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color">
			<div slot="left" :style="{color: headStyle.color}" @click="back">
				<yd-navbar-back-icon :color="headStyle.color">返回</yd-navbar-back-icon>
			</div>
			<div slot="right" :style="{color: headStyle.color}">
				
			</div>		   	
		</yd-navbar>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				title: '嗨披详情',
				headStyle:{
					color: '#fff',
					bgcolor: '#000'
				},
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			}
		}
	}
</script>