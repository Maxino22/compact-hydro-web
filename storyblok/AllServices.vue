<template>
	<section id="services" class="bg-white" v-editable="blok">
		<div class="mx-auto container max-w-7xl py-6 px-8 my-10">
			<h1 class="heading-1 my-8">{{ blok?.title }}</h1>

			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center my-5"
			>
				<HomeServiceCard
					v-for="service in blok?.services"
					:key="service.id"
					:service="service"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps({ blok: Object })
</script>

<style scoped></style>
