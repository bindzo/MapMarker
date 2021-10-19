module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true,
    'jest': true,
    'browser': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module',
    'allowImportExportEverywhere': true
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ]
  }
};
