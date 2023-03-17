const preprocess = require("svelte-preprocess");

module.exports = {
  preprocess: preprocess({
	defaults: {
		style: 'postcss',
	},
	postcss: true,
}),
};
