<template>
	<div>
		<transition name="slide-left" mode>
			<component :is="component"></component>
		</transition>
		
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import startUp from '@/components/startup/startup.vue';
import allow from '@/components/index/allow.vue';

export default {
	components: {
		startUp,
		allow,
		authorize: () => import('@/components/index/authorize.vue')
	},

	computed: {
		...mapGetters({
			component: 'getIndexShow'
		})
	},

	mounted () {
		// console.log(this)
	}

}	
</script>

