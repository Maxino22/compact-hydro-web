<template>
	<div class="bg-white mb-8">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<video
				v-if="isVideo"
				class="h-full object-cover"
				autoplay
				muted
				playsinline
			>
				<source :src="details?.media.filename" type="video/mp4" />
			</video>
			<nuxt-img
				v-else
				format="webp"
				class="h-full object-cover"
				preload
				:src="details?.media.filename"
			>
			</nuxt-img>

			<div class="flex flex-col space-y-3">
				<h1 class="heading-1">{{ details?.Title }}</h1>
				<div class="text-md text-gray-800" v-html="resolvedRichText"></div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ details: Object })
const resolvedRichText = computed(() => renderRichText(props.details?.content))

const isVideo = computed(() => {
	const filename = props.details?.media.filename
	if (filename) {
		const extention: string = filename.split('.').pop().toLowerCase()

		return extention === 'mp4'
	}
	return false
})
</script>
