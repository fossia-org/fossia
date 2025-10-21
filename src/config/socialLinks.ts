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
		name: 'instagram',
		link: '/',
		icon: 'instagram-icon'
	},
	{
		name: 'mastodon',
		link: '/',
		icon: 'twitter-icon'
	},
	{
		name: 'telegram',
		link: '/',
		icon: 'fb-icon'
	}
]
