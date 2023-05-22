<template>
	<section class="mx-auto container max-w-6xl py-16">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
			<div class="flex flex-col space-y-6 px-3">
				<h1 class="heading-1">contact us</h1>

				<div class="flex flex-col space-y-4">
					<div class="flex items-center space-x-2">
						<Icon size="25" name="uil:location-point" />
						<div class="flex flex-col">
							<p class="text-blac text-sm font-semibold uppercase">Address</p>
							<p class="text-gray-700 text-sm">
								P.o Box 2547-00100 Suraj Plaza Limuru Road
							</p>
						</div>
					</div>
					<div class="flex items-center space-x-3">
						<Icon size="25" name="uil:phone" />
						<div class="flex flex-col">
							<p class="text-black text-sm font-semibold uppercase">Phone</p>
							<p class="text-gray-700 text-sm">(254 )750 440 044</p>
						</div>
					</div>
					<div class="flex items-center space-x-3">
						<Icon size="25" name="uil:envelope-open" />
						<div class="flex flex-col">
							<p class="text-black text-sm font-semibold uppercase">Email</p>
							<p class="text-gray-700 text-sm">info@compacthydro.co.ke</p>
						</div>
					</div>
				</div>
				<nuxt-img
					class="w-2/3 h-44 px-3 my-4"
					format="webp"
					src="https://a.storyblok.com/f/228790/600x300/3ec0ec99ca/truck_contact.jpg"
				></nuxt-img>
			</div>
			<div class="flex flex-col space-y-4">
				<div class="flex space-x-2 items-center px-3">
					<button
						@click="showEnquiry = true"
						class="bg-white w-1/2 text-black py-2 px-4 text-md font-normal border border-primary hover:bg-primary hover:text-white transition-all ease-in"
					>
						General Enquiry
					</button>
					<button @click="showEnquiry = false" class="btn w-1/2">
						Project Quote
					</button>
				</div>
				<FormsEnquiryForm v-if="showEnquiry" />
				<FormsProjectQuote v-else />
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
defineProps({ blok: Object })
const showEnquiry = ref(true)
</script>

<style scoped></style>
