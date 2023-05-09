<template>
	<div class="bg-white">
		<div class="container mx-auto max-w-6xl py-16 px-10 md:px-0">
			<div class="text-md text-gray-800" v-html="resolvedRichText"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ details: Object })
const resolvedRichText = computed(() =>
	renderRichText(props.details?.paragraph)
)
</script>
