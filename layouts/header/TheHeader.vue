<template>
	<div
		class="container mx-auto flex justify-between items-center bg-white py-4 px-4"
	>
		<nuxt-link to="/">
			<nuxt-img
				class="h-20"
				src="f/228790/582x630/b75b17df4e/compact-hydro-logo-file_vertical-for-white-bg.png"
			></nuxt-img>
		</nuxt-link>
		<div class="lg:flex space-x-3 items-center hidden">
			<p @mouseover="toggleServiceMenu" class="hover:text-secondary text-lg">
				Services <span><Icon name="uil:angle-down" /></span>
			</p>

			<nuxt-link
				@mouseover="ServicesDropdown = false"
				class="hover:text-secondary text-lg"
				to="/about-us"
				>About</nuxt-link
			>
			<nuxt-link class="hover:text-secondary text-lg" to="/reports"
				>Reports</nuxt-link
			>
			<nuxt-link class="hover:text-secondary text-lg" to="/contact"
				>Contact</nuxt-link
			>
		</div>
		<div class="lg:flex space-x-3 items-center hidden">
			<a class="hover:text-secondary text-lg" href="tel:254-750-440-044"
				>+254 750 440 044</a
			>
			<nuxt-link to="/contact" class="btn"> Contact us </nuxt-link>
		</div>
		<div @click="toggleMobileMenu" class="bg-primary p-4 lg:hidden">
			<Icon class="text-white" size="30px" :name="iconClass" />
		</div>
	</div>
</template>

<script setup lang="ts">
const MobileMenu = useState('mobileMenu', () => false)
const ServicesDropdown = useState('Services', () => false)

const iconClass = computed(() => {
	if (MobileMenu.value) {
		return 'uil:times'
	} else {
		return 'uil:bars'
	}
})

const toggleMobileMenu = () => {
	MobileMenu.value = !MobileMenu.value
}

const toggleServiceMenu = () => {
	ServicesDropdown.value = !ServicesDropdown.value
}
</script>

<style scoped></style>
