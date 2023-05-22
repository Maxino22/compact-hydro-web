// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/image-edge',
		['@storyblok/nuxt', { accessToken: process.env.STORYBLOK_TOKEN }],
		'nuxt-icon',
	],

	image: {
		provider: 'storyblok',
		baseURL: 'https://a.storyblok.com/',
	},
	extends: ['nuxt-seo-kit'],
	app: {
		head: {
			htmlAttrs: {
				class: 'scroll-smooth',
			},
			link: [
				{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: 'use-credentials',
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700&display=swap',
				},
			],
		},
	},
	runtimeConfig: {
		public: {
			siteUrl: 'https://compacthydro.co.ke/',
			siteName: 'Compact Hydro - We Engineer solutions',
			siteDescription:
				'Compact Hydro Solutions Ltd, established in 2009 to provide independent water supply solutions, offers services such as borehole drilling, pump installation, and water pan construction. We also have an online store for related products',
			language: 'en', // prefer more explicit language codes like `en-AU` over `en`
		},
	},
})
