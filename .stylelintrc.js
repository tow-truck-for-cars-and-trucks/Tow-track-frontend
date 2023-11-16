module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-rational-order',
		'stylelint-prettier/recommended',
	],
	plugins: ['stylelint-order', 'stylelint-scss'],
	rules: {
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
	},
	ignoreFiles: ['build/**/*', 'storybook-static/**/*'],
};
