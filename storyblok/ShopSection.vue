<template>
	<div class="container max-w-6xl mx-auto my-6 py-4 px-3" v-editable="blok">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<nuxt-img
				class="object-cover h-60"
				format="webp"
				:src="blok?.image.filename"
			></nuxt-img>
			<div class="flex flex-col space-y-4">
				<h2 class="text-black font-semibold text-3xl">{{ blok?.Title }}</h2>
				<p class="text-md text-gray-800 font-normal">
					{{ blok?.paragraph }}
				</p>
				<div>
					<a class="btn rounded-md" href="https://shop.compacthydro.co.ke/">
						Shop Now</a
					>
				</div>
			</div>
		</div>
		<div
			class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center py-16"
		>
			<HomeShopItem v-for="product in blok?.products" />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ blok: Object })
</script>

<style scoped></style>
