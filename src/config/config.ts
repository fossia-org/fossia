// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'FOSSIA',
	siteDescription:
		'FOSSIA is a women-centric community aimed to encourage underrepresented people to contribute to Indian FOSS ecosystem.',
	ogImage: '/og.jpg',
	logo: {
		src: '/logo.svg',
		alt: 'Foxi. logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
