<template>
	<transition name="drop">
		<div
			v-if="mobileMenu"
			class="z-40 sticky top-28 w-full flex flex-col lg:hidden space-y-3 text-white text-md py-4 px-3 bg-gray-700"
		>
			<p
				@click="toggleService"
				class="flex justify-between hover:text-secondary"
			>
				<span>Services</span> <span><Icon name="uil:angle-down" /></span>
			</p>
			<div v-if="serviceMobile" class="bg-white w-fll p-2">
				<transition name="drop">
					<div class="flex flex-col space-y-1">
						<div class="flex flex-col space-y-1">
							<h1 class="text-primary font-semibold">Borehole Services</h1>
							<div class="flex flex-col space-y-1 text-gray-800">
								<nuxt-link
									@click="toggleServiceLink"
									class="hover:text-secondary"
									to="/services/borehole-drilling"
									>Borehole Drilling</nuxt-link
								>
								<nuxt-link
									@click="toggleServiceLink"
									class="hover:text-secondary"
									to="/services/borehole-geophysical-survey"
									>Survey</nuxt-link
								>
								<nuxt-link
									@click="toggleServiceLink"
									class="hover:text-secondary"
									to="/services/pump-installation"
									>Pump Installation</nuxt-link
								>
								<nuxt-link
									@click="toggleServiceLink"
									class="hover:text-secondary"
									to="/services/test-pumping"
									>Pump Installation</nuxt-link
								>
								<nuxt-link
									@click="toggleServiceLink"
									class="hover:text-secondary"
									to="/services/borehole-maintainance"
									>Borehole Maintainance</nuxt-link
								>
							</div>
						</div>
						<div class="flex flex-col space-y-0.5">
							<h2 class="font-semibold text-primary">
								Water & Storage Solutions
							</h2>
							<div class="flex flex-col space-y-1 text-gray-800">
								<nuxt-link
									@click="toggleServiceLink"
									class="hover:text-secondary"
									to="/services/storage-solutions"
									>Storage Solutions</nuxt-link
								>
								<nuxt-link
									@click="toggleServiceLink"
									class="hover:text-secondary"
									to="/services/water-purification"
									>Water Purification</nuxt-link
								>
							</div>
						</div>
					</div>
				</transition>
			</div>

			<nuxt-link
				@click="toggleMobileMenu"
				class="hover:text-secondary"
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
			<nuxt-link
				@click="toggleMobileMenu"
				class="hover:text-secondary"
				to="/contact"
				>Contact</nuxt-link
			>
		</div>
	</transition>
</template>

<script setup lang="ts">
const mobileMenu = useState('mobileMenu')
const serviceMobile = useState('serviceMobile', () => false)

const toggleService = () => {
	serviceMobile.value = !serviceMobile.value
}
const toggleServiceLink = () => {
	serviceMobile.value = !serviceMobile.value
	toggleMobileMenu()
}

const toggleMobileMenu = () => {
	mobileMenu.value = !mobileMenu.value
	serviceMobile.value = false
}
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
