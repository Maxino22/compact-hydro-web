<template>
	<nuxt-link
		:to="service?.full_slug"
		class="max-w-sm bg-white border border-gray-200 shadow group cursor-pointer"
	>
		<div class="relative overflow-hidden">
			<nuxt-img
				class="transition duration-300 ease-in-out group-hover:scale-110"
				:src="service?.content.body[0].detail_columns[0].media.filename"
				alt=""
			/>
			<div
				class="absolute inset-0 group-hover:bg-black group-hover:bg-opacity-40"
			></div>
			<p
				class="absolute hidden group-hover:block bottom-0 mb-3 font-normal text-white px-2"
			>
				{{ service?.content.body[0].sub_text }}
			</p>
		</div>
		<div class="p-5 group-hover:bg-primary">
			<nuxt-link to="">
				<h5
					class="mb-2 text-md group-hover:text-white font-bold tracking-tight text-gray-900"
				>
					{{ service?.content.body[0].Title }}
				</h5>
			</nuxt-link>
		</div>
	</nuxt-link>
</template>

<script setup lang="ts">
defineProps({ service: Object })
</script>

<style scoped></style>
