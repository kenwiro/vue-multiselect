module.exports = {
  'env': {
    'es6': true,
    'node': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:vue/essential',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'parser':'@typescript-eslint/parser',
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'vue',
    '@typescript-eslint'
  ],
  'rules': {
    'no-console': 1,
    'quotes': [
      2,
      'single'
    ],
    'brace-style': [
      2,
      '1tbs',
      {
        'allowSingleLine': true
      }
    ],
    'array-bracket-spacing': [
      2,
      'always'
    ],
    'arrow-parens': [
      2,
      'as-needed'
    ],
    'object-curly-spacing': [
      'error',
      'always'
    ],
    'indent': [
      2,
      2,
      {
        'SwitchCase': 1
      }
    ],
    'no-param-reassign': [
      'error',
      {
        'props': true,
        'ignorePropertyModificationsFor': [ 'state', 'Vue' ]
      }
    ],
    'import/no-named-as-default': 0,
    'max-len': [
      'error',
      {
        code: 120,
        'ignoreTrailingComments': true
      }
    ],
    'semi': [ 'error' ]
  }
};
