module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaFeatures: { jsx: true }, sourceType: 'module' },
  plugins: ['@typescript-eslint', 'import', 'unused-imports', 'jest', 'prettier', 'react', 'react-hooks'],
  env: {
    node: true,
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  settings: {
    react: { version: 'detect' },
    jest: { version: 'detect' },
    // To prevent issue with react-native imports https://github.com/facebook/react-native/issues/28549
    'import/ignore': ['node_modules/react-native/index\\.js$'],
  },
}
