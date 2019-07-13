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
    // 0 "off", 1 "warn" 2 "error"
    'import/newline-after-import': 'off',
    'no-console': 'off',
    quotes: ['error', 'single'],
    'no-underscore-dangle': 'warn',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'comma-dangle': ['error', 'never']
  }
};
