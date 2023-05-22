<template>
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>

<script setup lang="ts">
const story = await useStoryblok('contact', { version: 'published' })
</script>
