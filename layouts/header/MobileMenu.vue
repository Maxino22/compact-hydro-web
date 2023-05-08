<template>
	<transition name="drop">
		<div
			v-if="mobileMenu"
			class="z-40 absolute top-28 w-full flex flex-col lg:hidden space-y-3 text-white text-md py-4 px-3 bg-gray-700"
		>
			<a class="flex justify-between hover:text-secondary" href="#services">
				<span>Services</span> <span><Icon name="uil:angle-down" /></span
			></a>

			<nuxt-link class="hover:text-secondary" to="/about-us">About</nuxt-link>
			<nuxt-link class="hover:text-secondary" to="/reports">Reports</nuxt-link>
			<nuxt-link class="hover:text-secondary" to="/contact">Contact</nuxt-link>
		</div>
	</transition>
</template>

<script setup lang="ts">
const mobileMenu = useState('mobileMenu')
</script>

<style>
/* leave classes */
.drop-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}
.drop-leave-to {
	opacity: 0;
	transform: translateY(-60px);
}

.drop-leave-active,
.drop-enter-active {
	transition: all 0.3s ease-in;
}
</style>
