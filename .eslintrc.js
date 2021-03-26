module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    shallow: true,
    mount: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': [2],
    'react/self-closing-comp': [0],
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'arrow-body-style': [0],
    'react/forbid-prop-types': [0],
    'import/no-useless-path-segments': [0],
    camelcase: 'off',
    'react/prefer-stateless-function': [0],
    'react/no-unused-prop-types': [0],
    'react/state-in-constructor': [0],
    'react/destructuring-assignment': [0],
    'import/no-cycle': 'off',
    'no-param-reassign': ['error', { props: false }],
    'no-underscore-dangle': ['error', { allow: ['__types__'] }],
    'no-tabs': [0, { allowIndentationTabs: true }],
    'no-mixed-spaces-and-tabs': [0, 'smart-tabs'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
  },
};
