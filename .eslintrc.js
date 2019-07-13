module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jquery: true
  },
  extends: 'airbnb-base',
  plugins: ['import', 'html'],
  rules: {
    'linebreak-style': 'off',
    'object-curly-newline': 'off',
    quotes: 'off',
    // 0 "off", 1 "warn" 2 "error"
    'import/newline-after-import': 'off',
    'no-console': 'off',
    indent: 'off',
    'prefer-destructuring': 'off',
    'no-else-return': 'off',
    'arrow-parens': 'off',
    'no-unreachable': 'off',
    'import/order': 'off',
    'import/no-duplicates': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'comma-dangle': ['error', 'never']
  }
};
