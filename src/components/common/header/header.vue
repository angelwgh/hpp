<template>
	<template>
	    <yd-navbar title="NavBar">
	        <router-link to="#" slot="left">
	            <yd-navbar-back-icon></yd-navbar-back-icon>
	        </router-link>
	        <router-link to="#" slot="right">
	            <yd-navbar-next-icon></yd-navbar-next-icon>
	        </router-link>
	    </yd-navbar>
	</template>
</template>
<script>
	import {NavBar, NavBarBackIcon, NavBarNextIcon} from 'vue-ydui/dist/lib.rem/navbar';

	console.log(NavBar)
	export default{
		components: {
			NavBar, NavBarBackIcon, NavBarNextIcon
		}
	}
</script>
<style>
	.m-header{
		width: 100%;
		justify-content:space-between;
	}

	.m-header .left,
	.m-header .right{
		flex: 0 0 25%;
	}
	.m-header .center{
		flex: 0 0 50%;
	}
</style>