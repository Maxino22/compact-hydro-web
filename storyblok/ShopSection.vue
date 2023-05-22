<template>
	<div class="container max-w-6xl mx-auto my-6 py-4 px-3" v-editable="blok">
		<h2 class="text-black text-center my-4 font-semibold text-3xl">
			Compact <span class="text-secondary">Hydro</span> Shop
		</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-5">
			<nuxt-img
				class="object-cover h-60"
				format="webp"
				:src="blok?.image.filename"
			></nuxt-img>
			<div class="flex flex-col space-y-4">
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
			class="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center py-16"
		>
			<HomeShopItem
				v-for="product in products"
				:key="product.id"
				:item="product"
			/>
		</div>
	</div>
	<HomeTestimonials />
</template>

<script setup lang="ts">
import ProductType from '~/Types/Product'

const products = ref<ProductType[]>([])
const props = defineProps({ blok: Object })
const productArray = props.blok?.products[0].columns

if (productArray) {
	for (const product of productArray) {
		const { _uid, url, Product_name, image } = product

		const productData: ProductType = {
			id: _uid,
			url: url.url,
			name: Product_name,
			image: image.filename,
		}
		products.value.push(productData)
	}
}
</script>

<style scoped></style>
