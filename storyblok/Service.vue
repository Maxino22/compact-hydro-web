<template>
	<div v-editable="blok">
		<section class="w-full bg-primary py-16 mb-6">
			<div class="flex flex-col justify-center items-center text-white">
				<h6 class="text-md text-secondary uppercase font-bold">Service</h6>
				<h1 class="font-semibold text-4xl md:text-6xl uppercase">
					{{ blok?.Title }}
				</h1>
				<p class="text-md text-center max-w-xs text-white font-meduim">
					{{ blok?.sub_text }}
				</p>
			</div>
		</section>
		<ServicesDetailFlat :details="detail_flat" />
		<ServicesDetailReverse v-if="detail_reverse" :details="detail_reverse" />
		<ServicesDetailParagraph v-if="detail_flat" :details="detail_paragraph" />
	</div>
</template>

<script setup lang="ts">
const props = defineProps({ blok: Object })
const detail_flat = props.blok?.detail_columns[0]
const detail_reverse = props.blok?.detail_columns[1]
const detail_paragraph = props.blok?.detail_columns[2]
const { slug } = useRoute().params
const slugString = `${slug[0]}/${slug[1]}`

useSeoMeta({
	title: props.blok?.Title,
	description: props.blok?.sub_text,
	ogUrl: `https://compacthydro.co.ke/${slugString}`,
	ogTitle: props.blok?.title,
	ogImage: detail_flat.media.filename,
	twitterCard: 'summary_large_image',
	twitterTitle: props.blok?.Title,
	twitterDescription: props.blok?.sub_text,
	twitterImage: detail_flat.media.filename,
})
</script>

<style scoped></style>
