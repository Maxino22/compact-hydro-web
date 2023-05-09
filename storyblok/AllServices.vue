<template>
	<section id="services" class="bg-white" v-editable="blok">
		<div class="mx-auto container max-w-7xl py-6 my-10">
			<h1 class="heading-1 my-8">{{ blok?.title }}</h1>
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center my-5 px-5"
			>
				<HomeServiceCard
					v-for="service in services"
					:key="service.id"
					:service="service"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const props = defineProps({ blok: Object })
import ServiceType from '../Types/Service'

const services = ref<ServiceType[]>([])

const servicesArray = props.blok?.services
if (servicesArray) {
	for (const service of servicesArray) {
		const { uuid, content, full_slug } = service

		const serviceData: ServiceType = {
			id: uuid,
			slug: full_slug,
			title: content.body[0].Title,
			excerpt: content.body[0].sub_text,
			image: content.body[0].detail_columns[0].media.filename,
		}

		services.value.push(serviceData)
	}
}
</script>
