<template>
	<div>
		<StoryblokComponent v-if="story" :blok="story.content" />
		<HomeAllServices />
	</div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params

const story = await useAsyncStoryblok(
	Array.isArray(slug) && slug.length > 0 ? slug.join('/') : 'home',
	{ version: 'published' }
)
</script>

<style scoped></style>
