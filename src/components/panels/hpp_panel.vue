<template>
	<div>
		<yd-navbar :title="title"
				   :bgcolor="headStyle.bgcolor"
				   :color="headStyle.color"
				   :fontsize="headStyle.title.fontSize">
			<div slot="left" :style="{color: headStyle.color, fontSize:headStyle.fontSize}" @click="back">
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
			}
		},
		computed: {
			headStyle () {
				return this.global.headStyle.black;
			}
		},
		methods: {
			back () {
				this.$router.go(-1)
			}
		},
		created() {
			// console.log(this.global)
		}
	}
</script>