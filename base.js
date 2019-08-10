module.exports = {
  globals: {},
  rules: {
    semi: [2, 'never'],
    'implicit-arrow-linebreak': 'off',
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
