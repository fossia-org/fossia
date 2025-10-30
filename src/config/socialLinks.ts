// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'telegram',
		link: 'https://t.me/fossiaorg',
		icon: 'telegram'
	},
	{
		name: 'github',
		link: 'https://github.com/fossiaorg',
		icon: 'github'
	},
	{
		name: 'linkedin',
		link: 'https://linkedin.com/company/fossiaorg',
		icon: 'linkedin'
	},
	{
		name: 'mastodon',
		link: 'https://mas.to/@fossiaorg',
		icon: 'mastodon'
	},
	{
		name: 'instagram',
		link: 'https://instagram.com/fossiaorg',
		icon: 'instagram'
	},
	{
		name: 'youtube',
		link: 'https://youtube.com/@fossiaorg',
		icon: 'youtube'
	},
	{
		name: 'e-mail',
		link: 'mailto:fossia@riseup.net',
		icon: 'email'
	}
]
