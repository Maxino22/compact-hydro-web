<template>
	<transition name="drop">
		<div
			@mouseleave="toggleServiceMenu"
			class="z-40 absolute top-20 left-0 w-full border-t border-gray-100 shadow-sm h-[500px] py-4 bg-white"
		>
			<div
				class="hidden lg:grid grid-cols-4 gap-4 text-black container mx-auto"
			>
				<div class="flex flex-col space-y-2">
					<h2 class="font-semibold text-primary">Water & Storage Solutions</h2>
					<div class="flex flex-col space-y-3">
						<nuxt-link
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							to="/services/storage-solutions"
							>Storage Solutions</nuxt-link
						>
						<nuxt-link
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							to="/services/water-purification"
							>Water Purification</nuxt-link
						>
					</div>
				</div>
				<div class="flex flex-col space-y-2">
					<h2 class="font-semibold text-primary">
						Borehole & Drilling Solutions
					</h2>
					<div class="flex flex-col space-y-3">
						<nuxt-link
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							to="/services/borehole-drilling"
							>Borehole Drilling</nuxt-link
						>
						<nuxt-link
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							to="/services/borehole-geophysical-survey"
							>Survey</nuxt-link
						>
						<nuxt-link
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							to="/services/pump-installation"
							>Pump Installation</nuxt-link
						>
						<nuxt-link
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							to="/services/test-pumping"
							>Pump Installation</nuxt-link
						>
						<nuxt-link
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							to="/services/borehole-maintainance"
							>Borehole Maintainance</nuxt-link
						>
					</div>
				</div>
				<div class="flex flex-col space-y-2">
					<h2 class="font-semibold text-primary">Compact Hydro Shop</h2>
					<div class="flex flex-col space-y-3">
						<a
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							href="https://shop.compacthydro.co.ke/product-category/borehole-equipment/"
							target="_blank"
							>Borehole Equipment</a
						>
						<a
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							href="https://shop.compacthydro.co.ke/product-category/solar-products/"
							target="_blank"
							>Solar Products</a
						>
						<a
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							href="https://shop.compacthydro.co.ke/product-category/storage-solutions/"
							target="_blank"
							>Storage Solutions</a
						>
						<a
							@click="toggleServiceMenu"
							class="hover:text-secondary"
							href="https://shop.compacthydro.co.ke/product-category/irrigation-equipment/"
							target="_blank"
							>Irrigation Equipment</a
						>
						<a
							class="hover:text-secondary"
							href="https://shop.compacthydro.co.ke/product-category/water-pumps/"
							target="_blank"
							>Water Pumps</a
						>
						<a
							class="hover:text-secondary"
							href="https://shop.compacthydro.co.ke/product-category/water-treatment/"
							target="_blank"
							>Water Treatment</a
						>
					</div>
				</div>
				<div class="flex flex-col space-y-2">
					<h2 class="font-semibold text-primary">
						Consolutancy & Project Maintainance
					</h2>
					<nuxt-link
						@click="toggleServiceMenu"
						class="hover:text-secondary"
						to="/services/borehole-maintainance"
						>Borehole Maintainance & Rehabilitation</nuxt-link
					>
					<nuxt-link
						@click="toggleServiceMenu"
						class="hover:text-secondary"
						to="/contact"
						>Talk to us</nuxt-link
					>
				</div>
			</div>
		</div>
	</transition>
</template>

<script setup lang="ts">
const service = useState('Services')

const toggleServiceMenu = () => {
	service.value = false
}
</script>

<style scoped></style>
