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
		<div>
			<v-color-picker></v-color-picker>
		</div>
	</div>
</template>
<script>
// F:\wgh\code\HPP\src\components\common\color-picker\index.js
import colorPicker from '@/components/common/color-picker'
console.log(colorPicker)
	export default {
		components:{
			vColorPicker: colorPicker
		},
		data () {
			return {
				title: '填色描边',
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