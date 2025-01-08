import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
	compatibilityDate: '2024-07-11',
	app: {
		head: {
			title: 'Home | Starbucks® at Home',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
			link: [
				{
					type: 'image/x-icon',
					rel: 'icon',
					href: 'https://www.starbucksathome.com/br/media/favicon/stores/1/logo-footer_1.png'
				},
			]
		},
	},

	modules: [
		'nuxt-swiper',
		async (options, nuxt) => {
			nuxt.hooks.hook('vite:extendConfig', (config) =>
				config.plugins.push(vuetify())
			)
		},
	],

	css: ['vuetify/lib/styles/main.sass'],

	build: {
		transpile: ['vuetify'],
	},

	vite: {
		styles: {
			configFile: 'src/styles/settings.scss',
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/scss/variables.scss" as *;',
					api: 'modern-compiler',
				},
			},
		},
	},
})