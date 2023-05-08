<template>
	<div id="hero" class="relative">
		<div class="absolute inset-0 bg-primary bg-opacity-20"></div>
		<div
			class="container mx-auto max-w-6xl flex items-center justify-center px-6 py-12 h-[600px]"
		>
			<div class="z-20 text-center">
				<h4 class="text-white font-normal">Welcome to compact Hydro</h4>
				<h1 class="text-6xl font-bold text-white">
					Drill <span class="text-secondary">Install </span> Deliver.
				</h1>
				<p class="text-white text-xl">
					Providing independent water supply through innovative solutions and
					accessible online store.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
#hero {
	background-image: url('https://a.storyblok.com/f/228790/4496x3000/884fa0d98a/dsc_2814-copy.jpg/m/1440x650');
	background-repeat: no-repeat;
	background-size: cover;
}

@media (max-width: 576px) {
	#hero {
		background-image: url('https://a.storyblok.com/f/228790/4496x3000/884fa0d98a/dsc_2814-copy.jpg/m/750x1300');
		background-position: center;
	}
}
</style>
