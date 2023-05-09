<template>
	<nuxt-link
		:to="service.slug"
		class="max-w-sm bg-white border border-gray-200 shadow group cursor-pointer"
	>
		<div class="relative overflow-hidden">
			<nuxt-img
				format="webp"
				class="transition duration-300 ease-in-out group-hover:scale-110 h-72"
				:src="service.image"
				alt=""
			/>
			<div
				class="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-40"
			></div>
			<p
				class="absolute hidden group-hover:block bottom-0 mb-3 font-normal text-white px-2"
			>
				{{ service.excerpt }}
			</p>
		</div>
		<div class="p-5 group-hover:bg-primary">
			<h5
				class="mb-2 text-md group-hover:text-white font-bold tracking-tight text-gray-900"
			>
				{{ service.title }}
			</h5>
		</div>
	</nuxt-link>
</template>

<script setup lang="ts">
import ServiceType from '~/Types/Service'

defineProps({
	service: {
		type: Object as () => ServiceType,
		required: true,
	},
})
</script>

<style scoped></style>
