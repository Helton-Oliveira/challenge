import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export const config = {
	kit: {
		adapter: adapter(),
	}
};

export default config;
