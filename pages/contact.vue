<template>
	<section class="mx-auto container max-w-7xl py-16 px-5">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="flex flex-col space-y-8">
				<h1 class="heading-1">contact us</h1>

				<div class="flex flex-col space-y-4">
					<div class="flex items-center space-x-3">
						<Icon size="30" name="uil:location-point" />
						<div class="flex flex-col">
							<p class="text-black font-semibold uppercase">Address</p>
							<p class="text-gray-700 text-md">
								P.o Box 2547-00100 Suraj Plaza Limuru Road
							</p>
						</div>
					</div>
					<div class="flex items-center space-x-3">
						<Icon size="30" name="uil:phone" />
						<div class="flex flex-col">
							<p class="text-black font-semibold uppercase">Phone</p>
							<p class="text-gray-700 text-md">(254 )750 440 044</p>
						</div>
					</div>
					<div class="flex items-center space-x-3">
						<Icon size="30" name="uil:envelope-open" />
						<div class="flex flex-col">
							<p class="text-black font-semibold uppercase">Email</p>
							<p class="text-gray-700 text-md">info@compacthydro.co.ke</p>
						</div>
					</div>
				</div>
				<nuxt-img
					class="w-2/3 h-44"
					format="webp"
					src="https://a.storyblok.com/f/228790/600x300/3ec0ec99ca/truck_contact.jpg"
				></nuxt-img>
			</div>
			<div class="flex flex-col space-y-4">
				<div class="grid grid-cols-2 gap-4">
					<button
						@click="showEnquiry = true"
						class="bg-white text-black text-md font-normal border border-primary hover:bg-primary hover:text-white transition-all ease-in"
					>
						General Enquiry
					</button>
					<button @click="showEnquiry = false" class="btn">
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
const showEnquiry = ref(true)
</script>

<style scoped></style>
