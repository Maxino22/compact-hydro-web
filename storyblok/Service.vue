<template>
	<div v-editable="blok">
		<Pre>{{ blok }}</Pre>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ blok: Object })
</script>

<style scoped></style>
