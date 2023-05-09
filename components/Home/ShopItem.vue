<template>
	<a class="flex flex-col space-y-3" href="#" v-editable="blok">
		<nuxt-img format="webp" :src="blok?.image"></nuxt-img>
		<p class="text-secondary text-md"></p>
	</a>
</template>

<script setup lang="ts">
const props = defineProps({ blok: Object })
</script>
