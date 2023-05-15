<template>
	<div>
		<SeoKit />
		<NuxtLayout>
			<NuxtLoadingIndicator color="#21aee4" />
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
<script setup lang="ts">
useSchemaOrg([
	defineOrganization({
		name: 'Compact Hydro - We Engineer Solutions',
		logo: 'https://a.storyblok.com/f/228790/582x630/b75b17df4e/compact-hydro-logo-file_vertical-for-white-bg.png',
	}),

	defineWebSite({
		url: 'https://compacthydro.co.ke',
		name: 'Compact Hydro - We Engineer Solutions',
		description:
			'Compact Hydro Solutions Ltd, established in 2009 to provide independent water supply solutions, offers services such as borehole drilling, pump installation ',
		image:
			'https://a.storyblok.com/f/228790/582x630/b75b17df4e/compact-hydro-logo-file_vertical-for-white-bg.png',
		inLanguage: 'en-US',
	}),
])
</script>
