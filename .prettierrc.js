module.exports = {
	semi: false,
	useTabs: true,
	singleQuote: true,
	trailingComma: 'es5',
	proseWrap: 'always',
	jsxBracketSameLine: true,
	bracketSpacing: true,
	arrowParens: 'avoid',
	printWidth: 120,
	overrides: [
		{
			files: '*.{yml,yaml,md,sh}',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: '*.json',
			options: {
				singleQuote: false,
			},
		},
		{
			files: '*.md',
			options: {
				printWidth: 80,
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}
