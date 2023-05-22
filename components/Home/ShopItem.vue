<template>
	<a
		target="_blank"
		:href="item.url"
		class="max-w-sm bg-white border border-gray-200 shadow group cursor-pointer"
	>
		<div class="relative overflow-hidden">
			<nuxt-img
				format="webp"
				class="transition duration-300 ease-in-out group-hover:scale-110 h-72"
				:src="item.image"
				alt=""
			/>
			<div
				class="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-40"
			></div>
		</div>
		<div class="p-5 group-hover:bg-primary">
			<h5
				class="mb-2 text-md group-hover:text-white font-bold tracking-tight text-gray-900"
			>
				{{ item.name }}
			</h5>
		</div>
	</a>
</template>

<script setup lang="ts">
import ProductType from '~/Types/Product'
const props = defineProps({
	item: {
		type: Object as () => ProductType,
		required: true,
	},
})
</script>
