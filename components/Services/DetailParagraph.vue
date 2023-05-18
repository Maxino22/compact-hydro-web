<template>
	<div class="bg-white">
		<div class="text-md text-gray-800" v-html="resolvedRichText"></div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ details: Object })
const resolvedRichText = computed(() =>
	renderRichText(props.details?.paragraph)
)
</script>
