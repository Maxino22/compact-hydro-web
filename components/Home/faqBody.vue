<template>
	<div class="py-1 border-b outline-none group" :tabindex="blok.index">
		<!-- Tab Flex Container -->
		<div
			class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer group ease"
		>
			<!-- Tab Title -->
			<div class="transition duration-500 ease group-hover:text-red-500">
				{{ blok.Question }}
			</div>
			<!-- Arrow -->
			<div
				class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
					<path
						fill="none"
						stroke="currentColor"
						stroke-width="3"
						d="M1 1l8 8 8-8"
					/>
				</svg>
			</div>
		</div>

		<!-- Tab Inner Content -->
		<div
			class="overflow-hidden transition ease-in duration-500 group-focus:max-h-screen max-h-0 ease"
		>
			<p class="py-2 text-justify text-gray-400">
				{{ blok.Body }}
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import FAQType from '~/Types/FAQ'

defineProps({
	blok: {
		type: Object as () => FAQType,
		required: true,
	},
})
</script>
