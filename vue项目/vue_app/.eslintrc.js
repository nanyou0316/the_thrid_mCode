module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'camelcase': ['error', { allow: ['aa_bb'] }],
    // '@typescript-eslint/camelcase': 'off'
    // 解决async await的eslint报错问题
    // rules: {
    //   'function-paren-newline': ['error', 'never'],
    //   'space-before-function-paren': 0
    // }
  }
}
