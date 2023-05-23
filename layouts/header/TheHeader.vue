<template>
	<div
		class="container sticky shadow-sm z-50 top-0 mx-auto flex justify-between items-center bg-white py-4 px-4"
	>
		<nuxt-link @click="MobileMenu = false" to="/">
			<nuxt-img
				format="webp"
				class="h-14 md:h-14"
				src="f/228790/942x326/8ff80e42bf/compact-hydro-logo-file_horizontal-2-for-light-bg.png"
			></nuxt-img>
		</nuxt-link>
		<div class="lg:flex space-x-7 items-center hidden">
			<p @click="toggleServiceMenu" class="hover:text-secondary text-md">
				Services <span><Icon name="uil:angle-down" /></span>
			</p>

			<nuxt-link
				@mouseover="ServicesDropdown = false"
				class="hover:text-secondary text-md"
				to="/about-us"
				>About</nuxt-link
			>
			<a
				@click="toggleMobileMenu"
				href="https://shop.compacthydro.co.ke/"
				target="_blank"
				class="hover:text-secondary"
				>Shop</a
			>
			<nuxt-link class="hover:text-secondary text-md" to="/contact"
				>Contact</nuxt-link
			>
		</div>
		<div class="lg:flex space-x-3 items-center hidden">
			<a class="hover:text-secondary text-md" href="tel:254-750-440-044"
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
