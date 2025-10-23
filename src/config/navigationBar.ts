// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'The logo of FOSSIA',
		text: ''
	},
	navItems: [
		{ name: 'About', link: '/about' },
		{ name: 'Projects', link: '/projects' },
		{ name: 'Blog', link: '/blog' },
		{
			name: 'Resources',
			link: '',
			submenu: [
				{ name: 'Get Involved', link: '/resources/get-involved' },
				{ name: 'FAQ', link: '/resources/faq' },
				{ name: 'Code of Conduct', link: '/resources/code-of-conduct' }
			]
		}
	],
	navActions: []
}
