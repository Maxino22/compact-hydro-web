<template>
	<div class="bg-white">
		<div class="container mx-auto max-w-6xl py-16 px-10 md:px-0">
			<h1 class="text-center font-bold text-4xl my-4">
				Borehole Drilling Process
			</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<video class="h-full object-cover" loop autoplay muted playsinline>
					<source
						src="https://a.storyblok.com/f/228790/x/617d68a581/drilling.mp4"
						type="video/mp4"
					/>
				</video>
				<div>
					<Carousel>
						<Slide v-for="slide in 10" :key="slide">
							<div class="carousel__item">{{ slide }}</div>
						</Slide>

						<template #addons>
							<Navigation />
							<Pagination />
						</template>
					</Carousel>
				</div>

				<!-- <Carousel :wrap-around="true">
					<Slide v-for="slide in BoreholeDrillingProcess" :key="slide.title">
						<div class="carousel_item flex flex-col space-y-3">
							<h1 class="heading-1">{{ slide.title }}</h1>
							<div
								class="text-md text-gray-800"
								v-html="slide.instructions"
							></div>
						</div>
					</Slide>
					<template #addons>
						<Pagination />
					</template>
				</Carousel> -->
			</div>
		</div>
		<div class="flex justify-center items-center">
			<nuxt-link
				to="/contact"
				class="bg-secondary rounded-lg text-center text-white p-4"
				>Request Quote</nuxt-link
			>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Carousel, Pagination, Slide, Navigation } from 'vue3-carousel'

const BoreholeDrillingProcess = [
	{
		title: 'Hydro-geologists site the borehole',
		instructions:
			'The very first thing that needs to be determined is where the water is, and how we’re going to get to it.\n\nThat’s why we employ hydro-geologists who make use of a variety of borehole drilling methods to assess the geophysical properties of the underlying area\n\nThese are the guys that help us ensure we’re not drilling into natural hazards or man-made infrastructure (pipelines, cables, phone lines, etc).',
	},
	{
		title: 'Drilling and Construction',
		instructions:
			'Once the hydro-geologists have helped us prep a path for borehole drilling, we follow through and construct the borehole.\n\nIt’s not as easy as Moses and the rock, unfortunately, and, contrary to popular belief, an endless supply of water won’t just surge to the surface following the drilling of the borehole; there are still steps to follow and processes to be completed\n\nOnce the borehole has been drilled the necessary unstable lengths of the borehole are steel cased in an effort to reinforce the ‘tube’',
	},
	{
		title: 'Determining the yield of the borehole',
		instructions:
			'In order to most accurately gauge the yield of a domestic water borehole an aquifer test is performed.\n\nThis involves installing a test pump and pumping borehole water for a fixed set of variables; a given time at a given rate, and then assessing the test’s impact on the water level in the borehole.\n\nMaximum yield is achieved by increasing the abstraction rate, ensuring optimum drawdown of water in the borehole.',
	},
	{
		title: 'Pumping and piping the borehole',
		instructions:
			'The kind of pumping system and piping installed in your new domestic water borehole will largely depend on the intended use of the borehole water.\n\nTFor more information, or to make an appointment to start the process, feel free to contact us via the particulars provided on our Contact page.',
	},
]
</script>

<style scoped>
.carousel__item {
	min-height: 200px;
	width: 100%;
	background-color: var(--vc-clr-primary);
	color: var(--vc-clr-white);
	font-size: 20px;
	border-radius: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
</style>
