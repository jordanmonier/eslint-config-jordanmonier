module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'airbnb-typescript',
    'airbnb/hooks',
    'react-app',
    'prettier',
  ],
  plugins: [
    '@typescript-eslint',
    'jest',
    'prettier',
    'flowtype',
    'import',
    'promise',
    'react',
    'react-hooks',
    'jsx-a11y',
    'unicorn',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'no-await-in-loop': ['off'],
    'no-void': ['off'],

    // @typescript-eslint
    '@typescript-eslint/no-inferrable-types': ['off'],
    '@typescript-eslint/no-unsafe-member-access': ['off'],
    '@typescript-eslint/array-type': ['error'],
    '@typescript-eslint/ban-types': [
      'error',
      {
        // types: {
        //   '{}': false,
        // },
        extendDefaults: false,
      },
    ],
    '@typescript-eslint/no-explicit-any': [
      'error',
      {
        fixToUnknown: true,
        ignoreRestArgs: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
    '@typescript-eslint/prefer-nullish-coalescing': ['error'],
    '@typescript-eslint/no-loop-func': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/unbound-method': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],

    // eslint-plugin-prettier
    'prettier/prettier': ['off'],

    // eslint-plugin-react
    'react/no-array-index-key': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-boolean-value': 'off',
    'react/jsx-key': 'error',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/prop-types': ['off'],
    'react/require-default-props': ['off'],

    // eslint-plugin-jsx-a11y
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/label-has-associated-control': ['error', { assert: 'either' }],

    // eslint-plugin-import
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          'src/tests/**/*',
        ],
      },
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // eslint-plugin-promise
    'promise/no-callback-in-promise': ['off'],
    'promise/no-nesting': ['off'],
    'promise/no-promise-in-callback': ['off'],
    'promise/always-return': ['off'],
    'promise/catch-or-return': [
      'off',
      {
        allowFinally: true,
      },
    ],

    // eslint-plugin-unicorn
    'unicorn/catch-error-name': [
      'error',
      {
        name: 'err',
      },
    ],
    'unicorn/filename-case': ['off'],
    'unicorn/no-null': ['off'],
    'unicorn/no-reduce': ['off'],
    'unicorn/no-unreadable-array-destructuring': ['off'],
    'unicorn/no-useless-undefined': ['off'],
    'unicorn/prefer-node-append': ['off'],
    'unicorn/prefer-query-selector': ['off'],
    'unicorn/prevent-abbreviations': ['off'],

    // BASE ESLINT CONFIG
    'linebreak-style': ['off'],

    'max-len': [
      'warn',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
      },
    ],

    'consistent-return': 'off',
    'object-curly-spacing': ['warn', 'always'],

    'no-param-reassign': 'off',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-unused-vars': [
      'warn',
      {
        vars: 'all',
        args: 'none',
      },
    ],
  },
}
