<script setup lang="ts">
import FAQType from '~/Types/FAQ'

const props = defineProps({ blok: Object })
const FAQ: FAQType[] = []

const FAQArray = props.blok?.faq
if (FAQArray) {
	for (const faq of FAQArray) {
		const { Body, index, Question } = faq

		const FAQData: FAQType = {
			Body,
			index,
			Question,
		}

		FAQ.push(FAQData)
	}
}
</script>

<template>
	<!-- FAQ Heading -->
	<section id="faq" class="py-10">
		<div class="container mx-auto py-8">
			<h2 class="my-6 text-3xl font-semibold text-center md:text-4xl">
				Frequently Asked Questions
			</h2>
			<p class="max-w-lg px-6 mx-auto text-center text-graishBlue">
				Here are some of our FAQs. If you have any other questions you'd like
				answered please feel free to email us.
			</p>
		</div>
	</section>

	<!-- FAQ Accordion -->
	<section id="faq-accordion" class="py-10">
		<!-- Main Container -->
		<div class="container mx-auto px-6">
			<!-- Accordion Container -->
			<div class="max-w-2xl m-8 mx-auto overflow-hidden" v-editable="blok">
				<HomeFaqBody
					v-for="faq in FAQ"
					:key="faq.index"
					:blok="faq"
				></HomeFaqBody>
			</div>
		</div>
	</section>
</template>

<style scoped></style>
