module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  ecmaFeatures: {
    modules: true
  },

  globals: {},
  rules: {
    //
    // Possible Errors
    //
    // disallow or enforce trailing commas
    'comma-dangle': 1,
    // disallow assignment in conditional expressions
    'no-cond-assign': 1,
    // disallow use of console in the node environment
    'no-console': 1,
    // disallow use of constant expressions in conditions
    'no-constant-condition': 1,
    // disallow control characters in regular expressions
    'no-control-regex': 1,
    // disallow use of debugger
    'no-debugger': 1,
    // disallow duplicate arguments in functions
    'no-dupe-args': 1,
    // disallow duplicate keys when creating object literals
    'no-dupe-keys': 1,
    // disallow a duplicate case label.
    'no-duplicate-case': 1,
    // disallow the use of empty character classes in regular expressions
    'no-empty-character-class': 1,
    // disallow empty statements
    'no-empty': 1,
    // disallow assigning to the exception in a catch block
    'no-ex-assign': 1,
    // disallow double-negation boolean casts in a boolean context
    'no-extra-boolean-cast': 1,
    // disallow unnecessary parentheses
    'no-extra-parens': [1, 'functions'],
    // disallow unnecessary semicolons
    'no-extra-semi': 1,
    // disallow overwriting functions written as function declarations
    'no-func-assign': 1,
    // disallow function or variable declarations in nested blocks
    'no-inner-declarations': [1, 'both'],
    // disallow invalid regular expression strings in the RegExp constructor
    'no-invalid-regexp': 1,
    // disallow irregular whitespace outside of strings and comments
    'no-irregular-whitespace': 1,
    // disallow negation of the left operand of an in expression
    'no-negated-in-lhs': 1,
    // disallow the use of object properties of the global object (Math and
    // JSON) as functions
    'no-obj-calls': 1,
    // disallow multiple spaces in a regular expression literal
    'no-regex-spaces': 1,
    // disallow sparse arrays
    'no-sparse-arrays': 1,
    // Avoid code that looks like two expressions but is actually one
    'no-unexpected-multiline': 1,
    // disallow unreachable statements after a return, throw, continue, or
    // break statement
    'no-unreachable': 1,
    // disallow comparisons with the value NaN
    'use-isnan': 1,
    // Ensure JSDoc comments are valid
    'valid-jsdoc': 1,
    // Ensure that the results of typeof are compared against a valid string
    'valid-typeof': 1,

    //
    // Best Practices
    //
    // Enforces getter/setter pairs in objects
    'accessor-pairs': 1,
    // treat var statements as if they were block scoped
    'block-scoped-var': 1,
    // specify the maximum cyclomatic complexity allowed in a program
    complexity: [1, 2],
    // require return statements to either always or never specify values
    'consistent-return': 1,
    // specify curly brace conventions for all control statements
    curly: [1, 'multi-line'],
    // require default case in switch statements
    'default-case': 1,
    // enforces consistent newlines before or after dots
    'dot-location': [1, 'property'],
    // encourages use of dot notation whenever possible
    'dot-notation': 1,
    // require the use of === and !==
    eqeqeq: 1,
    // make sure for-in loops have an if statement
    'guard-for-in': 1,
    // disallow the use of alert, confirm, and prompt
    'no-alert': 1,
    // disallow use of arguments.caller or arguments.callee
    'no-caller': 1,
    // disallow lexical declarations in case clauses
    'no-case-declarations': 1,
    // disallow division operators explicitly at beginning of regular expression
    'no-div-regex': 1,
    // disallow else after a return in an if
    'no-else-return': 1,
    // disallow use of labels for anything other than loops and switches
    'no-empty-label': 1,
    // disallow use of empty destructuring patterns
    'no-empty-pattern': 1,
    // disallow comparisons to null without a type-checking operator
    'no-eq-null': 1,
    // disallow use of eval()
    'no-eval': 1,
    // disallow adding to native types
    'no-extend-native': 1,
    // disallow unnecessary function binding
    'no-extra-bind': 1,
    // disallow fallthrough of case statements
    'no-fallthrough': 1,
    // disallow the use of leading or trailing decimal points in numeric
    // literals
    'no-floating-decimal': 1,
    // disallow the type conversions with shorter notations
    'no-implicit-coercion': 1,
    // disallow use of eval()-like methods
    'no-implied-eval': 1,
    // disallow this keywords outside of classes or class-like objects
    'no-invalid-this': 1,
    // disallow usage of __iterator__ property
    'no-iterator': 1,
    // disallow use of labeled statements
    'no-labels': 1,
    // disallow unnecessary nested blocks
    'no-lone-blocks': 1,
    // disallow creation of functions within loops
    'no-loop-func': 1,
    // disallow the use of magic numbers
    'no-magic-numbers': 0,
    // disallow use of multiple spaces
    'no-multi-spaces': 1,
    // disallow use of multiline strings
    'no-multi-str': 1,
    // disallow reassignments of native objects
    'no-native-reassign': 1,
    // disallow use of new operator for Function object
    'no-new-func': 1,
    // disallows creating new instances of String,Number, and Boolean
    'no-new-wrappers': 1,
    // disallow use of the new operator when not part of an assignment or
    // comparison
    'no-new': 1,
    // disallow use of octal escape sequences in string literals, such as var
    // foo = "Copyright \251";
    'no-octal-escape': 1,
    // disallow use of octal literals
    'no-octal': 1,
    // disallow reassignment of function parameters
    'no-param-reassign': 1,
    // disallow use of process.env
    'no-process-env': 1,
    // disallow usage of __proto__ property
    'no-proto': 1,
    // disallow declaring the same variable more than once
    'no-redeclare': 1,
    // disallow use of assignment in return statement
    'no-return-assign': 1,
    // disallow use of javascript: urls.
    'no-script-url': 1,
    // disallow comparisons where both sides are exactly the same
    'no-self-compare': 1,
    // disallow use of the comma operator
    'no-sequences': 1,
    // restrict what can be thrown as an exception
    'no-throw-literal': 1,
    // disallow usage of expressions in statement position
    'no-unused-expressions': 1,
    // disallow unnecessary .call() and .apply()
    'no-useless-call': 1,
    // disallow unnecessary concatenation of literals or template literals
    'no-useless-concat': 1,
    // disallow use of the void operator
    'no-void': 1,
    // disallow usage of configurable warning terms in comments - e.g. TODO
    // or FIXME
    'no-warning-comments': 1,
    // disallow use of the with statement
    'no-with': 1,
    // require use of the second argument for parseInt()
    radix: 1,
    // require declaration of all vars at the top of their containing scope
    'vars-on-top': 1,
    // require immediate function invocation to be wrapped in parentheses
    'wrap-iife': 1,
    // require or disallow Yoda conditions
    yoda: 1,

    //
    // Strict Mode
    //
    // controls location of Use Strict Directives
    strict: [1, 'never'],

    //
    // Variables
    //
    // enforce or disallow variable initializations at definition
    'init-declarations': 1,
    // disallow the catch clause parameter name being the same as a variable in
    // the outer scope
    'no-catch-shadow': 1,
    // disallow deletion of variables
    'no-delete-var': 1,
    // disallow labels that share a name with a variable
    'no-label-var': 1,
    // disallow shadowing of names such as arguments
    'no-shadow-restricted-names': 1,
    // disallow declaration of variables already declared in the outer scope
    'no-shadow': 1,
    // disallow use of undefined when initializing variables
    'no-undef-init': 1,
    // disallow use of undeclared variables unless mentioned in a /*global */
    // block
    'no-undef': 1,
    // disallow use of undefined variable
    'no-undefined': 0,
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': 1,
    // disallow use of variables before they are defined
    'no-use-before-define': [1, 'nofunc'],

    //
    // Node.js and CommonJS
    //
    // enforce return after a callback
    'callback-return': 1,
    // enforce require() on top-level module scope
    'global-require': 1,
    // enforce error handling in callbacks
    'handle-callback-err': 1,
    // disallow mixing regular variable and require declarations
    'no-mixed-requires': 1,
    // disallow use of new operator with the require function
    'no-new-require': 1,
    // disallow string concatenation with __dirname and __filename
    'no-path-concat': 1,
    // disallow process.exit()
    'no-process-exit': 1,
    // restrict usage of specified node modules
    'no-restricted-modules': 0,
    // disallow use of synchronous methods
    'no-sync': 1,

    //
    // Stylistic Issues
    //
    // enforce spacing inside array brackets
    'array-bracket-spacing': 1,
    // disallow or enforce spaces inside of single line blocks
    'block-spacing': 1,
    // enforce one true brace style
    'brace-style': 1,
    // require camel case names
    camelcase: 1,
    // enforce spacing before and after comma
    'comma-spacing': 1,
    // enforce one true comma style
    'comma-style': 1,
    // require or disallow padding inside computed properties
    'computed-property-spacing': 1,
    // enforce consistent naming when capturing the current execution context
    'consistent-this': [1, 'self'],
    // enforce newline at the end of file, with no multiple empty lines
    'eol-last': 1,
    // require function expressions to have a name
    'func-names': 1,
    // enforce use of function declarations or expressions
    'func-style': [1, 'declaration', { allowArrowFunctions: true }],
    // this option enforces minimum and maximum identifier lengths (variable
    // names, property names etc.)
    'id-length': 0,
    // require identifiers to match the provided regular expression
    'id-match': 0,
    // specify tab or space width for your code
    indent: [1, 2, { SwitchCase: 1 }],
    // specify whether double or single quotes should be used in JSX attributes
    'jsx-quotes': [1, 'prefer-single'],
    // enforce spacing between keys and values in object literal properties
    'key-spacing': 1,
    // disallow mixed 'LF' and 'CRLF' as linebreaks
    'linebreak-style': 1,
    // enforce empty lines around comments
    'lines-around-comment': 1,
    // specify the maximum depth that blocks can be nested
    'max-depth': 1,
    // specify the maximum length of a line in your program
    'max-len': [1, 80, 2],
    // specify the maximum depth callbacks can be nested
    'max-nested-callbacks': [1, 3],
    // limits the number of parameters that can be used in the function
    // declaration.
    'max-params': [1, 3],
    // specify the maximum number of statement allowed in a function
    'max-statements': 1,
    // require a capital letter for constructors
    'new-cap': 1,
    // disallow the omission of parentheses when invoking a constructor with no
    // arguments
    'new-parens': 1,
    // require or disallow an empty newline after variable declarations
    'newline-after-var': 1,
    // disallow use of the Array constructor
    'no-array-constructor': 1,
    // disallow use of bitwise operators
    'no-bitwise': 1,
    // disallow use of the continue statement
    'no-continue': 1,
    // disallow comments inline after code
    'no-inline-comments': 0,
    // disallow if as the only statement in an else block
    'no-lonely-if': 1,
    // disallow mixed spaces and tabs for indentation
    'no-mixed-spaces-and-tabs': 1,
    // disallow multiple empty lines
    'no-multiple-empty-lines': [1, { max: 1 }],
    // disallow negated conditions
    'no-negated-condition': 1,
    // disallow nested ternary expressions
    'no-nested-ternary': 1,
    // disallow the use of the Object constructor
    'no-new-object': 1,
    // disallow use of unary operators, ++ and --
    'no-plusplus': 1,
    // disallow use of certain syntax in code
    'no-restricted-syntax': 0,
    // disallow space between function identifier and application
    'no-spaced-func': 1,
    // disallow the use of ternary operators
    'no-ternary': 0,
    // disallow trailing whitespace at the end of lines
    'no-trailing-spaces': 1,
    // disallow dangling underscores in identifiers
    'no-underscore-dangle': 1,
    // disallow the use of ternary operators when a simpler alternative exists
    'no-unneeded-ternary': 1,
    // require or disallow padding inside curly braces
    'object-curly-spacing': [1, 'always'],
    // require or disallow one variable declaration per function
    'one-var': [1, 'never'],
    // require assignment operator shorthand where possible or prohibit it
    // entirely
    'operator-assignment': [1, 'always'],
    // enforce operators to be placed before or after line breaks
    'operator-linebreak': 1,
    // enforce padding within blocks
    'padded-blocks': [1, 'never'],
    // require quotes around object literal property names
    'quote-props': [1, 'as-needed'],
    // specify whether backticks, double or single quotes should be used
    quotes: [1, 'single', 'avoid-escape'],
    // Require JSDoc comment
    'require-jsdoc': 0,
    // enforce spacing before and after semicolons
    'semi-spacing': 1,
    // require or disallow use of semicolons instead of ASI
    semi: [1, 'never'],
    // sort variables within the same declaration block
    'sort-vars': 0,
    // require a space after certain keywords
    'space-after-keywords': 1,
    // require or disallow a space before blocks
    'space-before-blocks': 1,
    // require or disallow a space before function opening parenthesis
    'space-before-function-paren': [1, 'never'],
    // require a space before certain keywords
    'space-before-keywords': 1,
    // require or disallow spaces inside parentheses
    'space-in-parens': 1,
    // require spaces around operators
    'space-infix-ops': 1,
    // require a space after return, throw, and case
    'space-return-throw-case': 1,
    // require or disallow spaces before/after unary operators
    'space-unary-ops': 1,
    // require or disallow a space immediately following the // or /* in a
    // comment
    'spaced-comment': 1,
    // require regex literals to be wrapped in parentheses
    'wrap-regex': 1,

    //
    // ECMAScript 6
    //
    // require braces in arrow function body
    'arrow-body-style': 1,
    // require parens in arrow function arguments
    'arrow-parens': [1, 'as-needed'],
    // require space before/after arrow function's arrow
    'arrow-spacing': 1,
    // verify calls of super() in constructors
    'constructor-super': 1,
    // enforce spacing around the * in generator functions
    'generator-star-spacing': [1, 'after'],
    // disallow arrow functions where a condition is expected
    'no-arrow-condition': 0,
    // disallow modifying variables of class declarations
    'no-class-assign': 1,
    // disallow modifying variables that are declared using const
    'no-const-assign': 1,
    // disallow duplicate name in class members
    'no-dupe-class-members': 1,
    // disallow use of this/super before calling super() in constructors.
    'no-this-before-super': 1,
    // require let or const instead of var
    'no-var': 1,
    // require method and property shorthand syntax for object literals
    'object-shorthand': 1,
    // suggest using arrow functions as callbacks
    'prefer-arrow-callback': 1,
    // suggest using const declaration for variables that are never modified
    // after declared
    'prefer-const': 1,
    // suggest using Reflect methods where applicable
    'prefer-reflect': 0,
    // suggest using the spread operator instead of .apply().
    'prefer-spread': 1,
    // suggest using template literals instead of strings concatenation
    'prefer-template': 1,
    // disallow generator functions that do not have yield
    'require-yield': 1
  }
}