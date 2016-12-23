module.exports = {
  env: {
    jest: true
  },

  globals: {
    context: true
  },

  rules: {
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': 'off',
    // specify the maximum number of statement allowed in a function
    'max-statements': 'off'
  }
}
