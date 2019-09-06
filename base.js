module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  globals: {},
  rules: {
    semi: [2, 'never'],
    'implicit-arrow-linebreak': 'off',
    'no-return-await': 'off',
    'no-param-reassign': 'off',
    'function-paren-newline': 'off',
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ]
  }
}
