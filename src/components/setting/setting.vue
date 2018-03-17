<template>
	<div>
		<transition name="slide-left">
	       <router-view class="setting-route"/>
	    </transition>
	</div>
	
</template>
<script>
	export default{
		
	}
</script>
<style>
	.setting-route{
	  width: 100%;
	  height: 100%;
	}
</style>