module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		'stylelint-prettier/recommended',
	],
	plugins: ['stylelint-order', 'stylelint-scss'],
	rules: {
		// Дополнительные правила
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
	},
	ignoreFiles: ['build/**/*'],
};
