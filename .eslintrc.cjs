module.exports = {
  root: true,
  extends: [
    'digitalbazaar',
    'digitalbazaar/module'
  ],
  env: {
    node: true
  },
  rules: {
    'unicorn/prefer-node-protocol': 'error'
  },
  ignorePatterns: ['dist/']
};
