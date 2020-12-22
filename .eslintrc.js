module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    // Ignored because prettier handles this
    semi: 0,
    'comma-dangle': 0,
    'no-mixed-operators': 0,
    'arrow-parens': 0,

    // Repo preferences
    'class-methods-use-this': 0,
    'symbol-description': 0,
    'no-unused-vars': [2, { varsIgnorePattern: '^_+$' }],
    'import/no-extraneous-dependencies': 0,
    'no-confusing-arrow': 0,
    'no-else-return': 0,
    'no-prototype-builtins': 0,
    'react/jsx-indent': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/jsx-indent-props': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-closing-bracket-location': 0,
  },
};
