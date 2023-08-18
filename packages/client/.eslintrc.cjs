module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/errors',
		'plugin:react/recommended',
		'plugin:jsx-a11y/recommended',
		'react-app',
		'react-app/jest',
		'airbnb',
		'prettier',
	],
	settings: {
		'import/resolver': {
			typescript: {},
		},
		react: {
			version: 'detect',
		},
		'perfectionist/sort-imports': 'warn',
	},
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh', 'prettier', 'perfectionist'],
	rules: {
		// React
		'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.tsx'] }],
		'react/jsx-props-no-spreading': 'warn',
		'react-refresh/only-export-components': 'warn',
		'react/prop-types': 'warn',
		'react/button-has-type': 'warn',
		'react/jsx-curly-brace-presence': 'off',
		'react/function-component-definition': 'off',

		// Misc
		'no-unused-labels': 'warn',
		'no-console': ['error', { allow: ['warn', 'error'] }],
		'prefer-const': 'warn',
		camelcase: 'warn',
		'no-unused-vars': 'warn',
		'no-undef': 'off',
		'no-plusplus': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
		'arrow-body-style': 'off',
		'import/prefer-default-export': 'off',
		'no-use-before-define': [
			'error',
			{
				functions: false,
			},
		],

		// Prettier compatibility
		'prettier/prettier': [
			'warn',
			{
				$schema: 'https://json.schemastore.org/prettierrc',
				endOfLine: 'auto',
				trailingComma: 'all',
				useTabs: true,
				semi: false,
				tabWidth: 2,
				jsxSingleQuote: true,
				singleQuote: true,
				arrowParens: 'avoid',
				formatOnSave: true,
				printWidth: 100,
			},
		],

		// Import order
		'perfectionist/sort-imports': [
			'error',
			{
				type: 'line-length',
				order: 'asc',
				groups: [
					'react',
					'store',
					'parent-type',
					'sibling-type',
					'internal',
					['builtin', 'external'],
					'internal-type',
					'internal',
					['parent-type', 'sibling-type', 'index-type'],
					['parent', 'sibling', 'index'],
					'side-effect',
					'style',
					'object',
					'unknown',
				],
				'custom-groups': {
					value: {
						react: ['react', 'react-*'],
						store: '@/store/**',
					},
					type: {
						react: 'react',
					},
				},
				'newlines-between': 'always',
				'internal-pattern': [],
				'read-tsconfig': false,
			},
		],
	},
}

/*
 // Imports
'import/order': [
	'error',
	{
		groups: [['external', 'builtin'], ['index', 'sibling', 'parent', 'internal'], 'type'],
		'newlines-between': 'always',
		alphabetize: {
			order: 'asc',
			caseInsensitive: true,
		},
	},
], 
*/
