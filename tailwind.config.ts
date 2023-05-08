import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
	theme: {
		extend: {
			colors: {
				primary: '#21aee4',
				secondary: '#f1a91d',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
		},
	},
}
