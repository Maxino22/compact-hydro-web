<template>
	<div>
		<StoryblokComponent v-if="story" :blok="story.content" />
	</div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params

const resolveRelations = ['all-services.services']

const story = await useAsyncStoryblok(
	Array.isArray(slug) && slug.length > 0 ? slug.join('/') : 'home',
	{ version: 'published', resolve_relations: resolveRelations },
	{
		resolveRelations,
	}
)
</script>

<style scoped></style>
