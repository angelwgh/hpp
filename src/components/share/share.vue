<template>
	<div>
		<transition name="slide-left">
			<component :is="step" @share="share"></component>
			<!-- <page1></page1> -->
		</transition>
	</div>
</template>
<script>
	import page1 from './share_page1.vue'
	import page2 from './share_page2.vue'
	export default{
		components:{
			page1,
			page2
		},
		data () {
			return {
				step:'page1'
			}
		},
		methods:{
			share() {
				this.step='page2'
			}
		},
		mounted () {
			console.log(this.$refs)
		}
	}
</script>
<style>
	
</style>