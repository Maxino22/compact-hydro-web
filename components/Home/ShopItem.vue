<template>
	<a class="flex flex-col items-center space-y-3" :href="item.url">
		<nuxt-img
			format="webp"
			class="h-32 object-contain"
			:src="item.image"
		></nuxt-img>
		<p class="text-secondary text-md">{{ item.name }}</p>
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
