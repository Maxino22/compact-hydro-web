<template>
	<div class="container mx-auto max-w-6xl px-6">
		<div
			class="my-10 md:my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
		>
			<div class="lg:col-span-2">
				<h1
					class="mb-10 lg:mb-20 text-3xl font-semibold uppercase border-l-8 pl-4 border-secondary"
				>
					About Compact Hydro
				</h1>
				<div class="text-sm leading-7">
					<p>
						Compact Hydro Solutions Ltd was founded in the year 2009 in response
						to the growing demand for independent water supply. We drill new and
						rehabilitate existing boreholes. We facilitate geotechnical surveys,
						supply and install borehole pumps and other related pumps, design
						solar pumping systems, construction of water pans and dams, steel
						water tanks and related services.
					</p>
				</div>
			</div>
			<div class="self-center">
				<nuxt-img
					format="webp"
					src="/f/228790/1024x768/796dea4198/1b3d6fb7-4401-4037-a163-1602ea2cd09e.jpg"
				></nuxt-img>
			</div>
		</div>
	</div>

	<div class="bg-primary py-10 lg:py-20 px-6">
		<div class="mx-auto max-w-6xl">
			<div
				class="mb-10 lg:mb-20 flex flex-row justify-between md:justify-start md:space-x-8"
			>
				<button class="about-btn" @click="changeTab('our mission')">
					Our Mission
				</button>
				<button class="about-btn" @click="changeTab('our vision')">
					Our Vision
				</button>
				<button class="about-btn" @click="changeTab('core principals')">
					Core Principals
				</button>
			</div>

			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-4"
				v-if="tab == 'our mission'"
			>
				<div class="md:col-span-2">
					<h2 class="mb-4 text-2xl lg:text-3xl text-white font-semibold">
						<Icon
							name="uil:bullseye"
							class="text-secondary text-4xl lg:text-6xl"
						/>
						Our Mission
					</h2>
					<p class="text-sm text-white leading-7">
						To provide an unrivaled level of service and supply quality products
						to our clients in a timely, professional and cost effective manner.
					</p>
				</div>
				<div>
					<nuxt-img
						format="webp"
						src="f/228790/4256x2832/d622a0f2ee/african-american-technician-check-maintenance-solar-panels-black-woman-engineer-solar-station.jpg"
					></nuxt-img>
				</div>
			</div>

			<div
				class="grid grid-cols-1 md:grid-cols-3 gap-4"
				v-if="tab == 'our vision'"
			>
				<div class="md:col-span-2">
					<h2 class="mb-4 text-2xl lg:text-3xl text-white font-semibold">
						<Icon name="uil:eye" class="text-secondary text-4xl lg:text-6xl" />
						Our Vision
					</h2>
					<p class="text-sm text-white leading-7">
						To provide be the most reliable world class water works service and
						products provider and enhance clean, stable water supply in East
						Africa.
					</p>
				</div>
				<div>
					<nuxt-img
						format="webp"
						src="f/228790/720x405/0e7bd2bc90/fb_img_1602476261035.jpg"
					></nuxt-img>
				</div>
			</div>

			<div v-if="tab == 'core principals'">
				<div class="grid md:grid-cols-3 gap-4">
					<div>
						<h2 class="mb-4 text-2xl lg:text-3xl text-white font-semibold">
							<Icon
								name="uil:thumbs-up"
								class="text-secondary text-4xl lg:text-6xl"
							/>
							Integrity
						</h2>
						<p class="text-sm text-white leading-7">
							A sound business practice and dealing with utmost integrity with
							all stake holder including suppliers, customers, the government ,
							staff management and the community in an inviolable corporate
							principal.
						</p>
					</div>

					<div>
						<h2 class="mb-4 text-2xl lg:text-3xl text-white font-semibold">
							<Icon
								name="uil:star"
								class="text-secondary text-4xl lg:text-6xl"
							/>
							Quality
						</h2>
						<p class="text-sm text-white leading-7">
							Our products, workmanship, customers dealings, systems and staff
							presentation must reflect the highest standards of quality
						</p>
					</div>

					<div>
						<h2 class="mb-4 text-2xl lg:text-3xl text-white font-semibold">
							<Icon
								name="uil:ear"
								class="text-secondary text-4xl lg:text-6xl"
							/>
							Listening
						</h2>
						<p class="text-sm text-white leading-7">
							We listen to our customers to offer a full array of exert advice
							raid responses services and competitive prices.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tab: 'our mission',
		}
	},

	methods: {
		changeTab(tab) {
			this.tab = tab
		},
	},
}
</script>

<style scoped></style>
