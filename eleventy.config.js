const base = require('./src/_includes/base/configs/base.config.js')

module.exports = eleventyConfig => {
	// Register my collection of things
	eleventyConfig.addCollection('logs', collection => collection.getFilteredByGlob('./src/logs/*.md'));

	// Apply base module settings
	return base(eleventyConfig);
};
