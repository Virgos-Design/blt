export const SITE = {
	name: "Bluff's Little Thinkers",

	origin: 'https://astrowind.vercel.app',
	basePathname: '/',

	title: 'BLT | Siouxlands Premier Childcare Provider',
	description: "Bluff's Little Thinkers is an amazing childcare facility located in Sergeant Bluff, Iowa.",

	location: 'Sergeant Bluff, IA',
	latlng: [-33.86785, 151.20732],

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: '',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
