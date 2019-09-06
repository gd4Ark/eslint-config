module.exports = {
  extends: ['plugin:vue/recommended', './base.js'],
  globals: {},
  rules: {
    // prettier vue html 冲突规则
    'vue/html-self-closing': 0,
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-closing-bracket-spacing': 'off',
    'vue/html-end-tags': 'off',
    'vue/html-indent': 'off',
    'vue/html-quotes': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/no-multi-spaces': 'off',
    'vue/no-spaces-around-equal-signs-in-attribute': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/script-indent': 'off'
  }
}
