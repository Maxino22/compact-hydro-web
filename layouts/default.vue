<template>
	<div>
		<TheHeader />
		<MobileMenu />
		<ServicesToggle v-if="service" />
		<slot class="z-10" />
		<Footer />
	</div>
</template>

<script setup lang="ts">
import TheHeader from './header/TheHeader.vue'
import MobileMenu from './header/MobileMenu.vue'
import ServicesToggle from './header/ServicesToggle.vue'
import Footer from './footer/Footer.vue'

const service = useState('Services')
</script>

<style scoped></style>
