module.exports = {

  'globals': {

  },

  'rules': {

    // best-practices

    'accessor-pairs': 'off',                       // Enforces getter/setter pairs in objects
    'array-callback-return': 'error',              // Enforces return statements in callbacks of array's methods http://eslint.org/docs/rules/array-callback-return
    'block-scoped-var': 'error',                   // Treat var statements as if they were block scoped
    'complexity': ['off', 11],                     // Specify the maximum cyclomatic complexity allowed in a program
    'class-methods-use-this': ['error', {
      'exceptMethods': [
        'render',
        'getInitialState',
        'getDefaultProps',
        'getChildContext',
        'componentWillMount',
        'componentDidMount',
        'componentWillReceiveProps',
        'shouldComponentUpdate',
        'componentWillUpdate',
        'componentDidUpdate',
        'componentWillUnmount'
      ]
    }],  // Enforce that class methods use "this" http://eslint.org/docs/rules/class-methods-use-this
    'consistent-return': 'error',                  // Require return statements to either always or never specify values
    'curly': ['error', 'multi-line'],              // Specify curly brace conventions for all control statements
    'default-case': ['error', {'commentPattern': '^no default$'}],  // Require default case in switch statements
    'dot-notation': ['error', {'allowKeywords': true}],  // Encourages use of dot notation whenever possible
    'dot-location': ['error', 'property'],         // Enforces consistent newlines before or after dots http://eslint.org/docs/rules/dot-location
    'eqeqeq': ['error', 'always', {'null': 'ignore' }],  // Require the use of === and !== http://eslint.org/docs/rules/eqeqeq
    'guard-for-in': 'error',                       // Make sure for-in loops have an if statement
    'no-alert': 'warn',                            // Disallow the use of alert, confirm, and prompt
    'no-caller': 'error',                          // Disallow use of arguments.caller or arguments.callee
    'no-case-declarations': 'error',               // Disallow lexical declarations in case/default clauses http://eslint.org/docs/rules/no-case-declarations.html
    'no-div-regex': 'off',                         // Disallow division operators explicitly at beginning of regular expression http://eslint.org/docs/rules/no-div-regex
    'no-else-return': 'off',                       // Disallow else after a return in an if
    'no-empty-function': ['error', {'allow': ['arrowFunctions', 'functions', 'methods']}],  // Disallow empty functions, except for standalone funcs/arrows http://eslint.org/docs/rules/no-empty-function
    'no-empty-pattern': 'error',                   // Disallow empty destructuring patterns http://eslint.org/docs/rules/no-empty-pattern
    'no-eq-null': 'off',                           // Disallow comparisons to null without a type-checking operator
    'no-eval': 'error',                            // Disallow use of eval()
    'no-extend-native': 'error',                   // Disallow adding to native types
    'no-extra-bind': 'error',                      // Disallow unnecessary function binding
    'no-extra-label': 'error',                     // Disallow Unnecessary Labels http://eslint.org/docs/rules/no-extra-label
    'no-fallthrough': 'error',                     // Disallow fallthrough of case statements
    'no-floating-decimal': 'error',                // Disallow the use of leading or trailing decimal points in numeric literals
    'no-global-assign': ['error', {'exceptions': []}],  // Disallow reassignments of native objects or read-only globals http://eslint.org/docs/rules/no-global-assign
    'no-implicit-coercion': ['off', {'boolean': false, 'number': true, 'string': true, 'allow': []}],  // Disallow implicit type conversions http://eslint.org/docs/rules/no-implicit-coercion
    'no-implicit-globals': 'off',                  // Disallow var and named functions in global scope http://eslint.org/docs/rules/no-implicit-globals
    'no-implied-eval': 'error',                    // Disallow use of eval()-like methods
    'no-invalid-this': 'off',                      // Disallow this keywords outside of classes or class-like objects
    'no-iterator': 'error',                        // Disallow usage of __iterator__ property
    'no-labels': ['error', {'allowLoop': false, 'allowSwitch': false}],  // Disallow use of labels for anything other then loops and switches
    'no-lone-blocks': 'error',                     // Disallow unnecessary nested blocks
    'no-loop-func': 'error',                       // Disallow creation of functions within loops
    'no-magic-numbers': ['off', {'ignore': [], 'ignoreArrayIndexes': true, 'enforceConst': true, 'detectObjects': false}],  // Disallow magic numbers http://eslint.org/docs/rules/no-magic-numbers
    'no-multi-spaces': 'error',                    // Disallow use of multiple spaces
    'no-multi-str': 'error',                       // Disallow use of multiline strings
    'no-new': 'error',                             // Disallow use of new operator when not part of the assignment or comparison
    'no-new-func': 'error',                        // Disallow use of new operator for Function object
    'no-new-wrappers': 'error',                    // Disallows creating new instances of String, Number, and Boolean
    'no-octal': 'error',                           // Disallow use of (old style) octal literals
    'no-octal-escape': 'error',                    // Disallow use of octal escape sequences in string literals, such as var foo = 'Copyright \251';
    'no-param-reassign': ['error', {'props': true}],  // Disallow reassignment of function parameters disallow parameter object manipulation rule: http://eslint.org/docs/rules/no-param-reassign.html
    'no-proto': 'error',                           // Disallow usage of __proto__ property
    'no-redeclare': 'error',                       // Disallow declaring the same variable more then once
    'no-restricted-properties': ['error', {'object': 'arguments', 'property': 'callee', 'message': 'arguments.callee is deprecated,'}, {'property': '__defineGetter__', 'message': 'Please use Object.defineProperty instead.'}, {'property': '__defineSetter__', 'message': 'Please use Object.defineProperty instead.'}],  // Disallow certain object properties http://eslint.org/docs/rules/no-restricted-properties
    'no-return-assign': 'error',                   // Disallow use of assignment in return statement
    'no-script-url': 'error',                      // Disallow use of `javascript:` urls.
    'no-self-assign': 'error',                     // Disallow self assignment http://eslint.org/docs/rules/no-self-assign
    'no-self-compare': 'error',                    // Disallow comparisons where both sides are exactly the same
    'no-sequences': 'error',                       // Disallow use of comma operator
    'no-throw-literal': 'error',                   // Restrict what can be thrown as an exception
    'no-unmodified-loop-condition': 'off',         // Disallow unmodified conditions of loops http://eslint.org/docs/rules/no-unmodified-loop-condition
    'no-unused-expressions': ['error', {'allowShortCircuit': false, 'allowTernary': false}],  // Disallow usage of expressions in statement position
    'no-unused-labels': 'error',                   // Disallow unused labels http://eslint.org/docs/rules/no-unused-labels
    'no-useless-call': 'off',                      // Disallow unnecessary .call() and .apply()
    'no-useless-concat': 'error',                  // Disallow useless string concatenation http://eslint.org/docs/rules/no-useless-concat
    'no-useless-escape': 'error',                  // Disallow unnecessary string escaping http://eslint.org/docs/rules/no-useless-escape
    'no-void': 'error',                            // Disallow use of void operator http://eslint.org/docs/rules/no-void
    'no-warning-comments': ['off', {'terms': ['todo', 'fixme', 'xxx'], 'location': 'start'}],  // Disallow usage of configurable warning terms in comments: e.g. todo
    'no-with': 'error',                            // Disallow use of the with statement
    'prefer-promise-reject-errors': ['error', {'allowEmptyReject': true}],  // require using Error objects as Promise rejection reasons. http://eslint.org/docs/rules/prefer-promise-reject-errors
    'radix': 'error',                              // Require use of the second argument for parseInt()
    'vars-on-top': 'error',                        // Requires to declare all vars on top of their containing scope
    'wrap-iife': ['error', 'outside', {'functionPrototypeMethods': false}],  // Require immediate function invocation to be wrapped in parentheses http://eslint.org/docs/rules/wrap-iife.html
    'yoda': 'error',                               // Require or disallow Yoda conditions

    // errors

    'comma-dangle': ['warn', {
      'arrays': 'only-multiline',
      'objects': 'only-multiline',
      'imports': 'only-multiline',
      'exports': 'only-multiline',
      'functions': 'only-multiline',
    }],                                            // Require trailing commas in multiline object literals
    'no-await-in-loop': 'error',                   // Disallow await inside of loops. http://eslint.org/docs/rules/no-await-in-loop
    'no-compare-neg-zero': 'error',                // Disallow comparisons to negative zero. http://eslint.org/docs/rules/no-compare-neg-zero
    'no-cond-assign': ['error', 'always'],         // Disallow assignment in conditional expressions
    'no-console': ['warn', {'allow': ['log', 'info', 'warn', 'error']}],  // Disallow use of console
    'no-constant-condition': 'warn',               // Disallow use of constant expressions in conditions
    'no-control-regex': 'error',                   // Disallow control characters in regular expressions
    'no-debugger': 'error',                        // Disallow use of debugger
    'no-dupe-args': 'error',                       // Disallow duplicate arguments in functions
    'no-dupe-keys': 'error',                       // Disallow duplicate keys when creating object literals
    'no-duplicate-case': 'error',                  // Disallow a duplicate case label.
    'no-empty': 'error',                           // Disallow empty statements
    'no-empty-character-class': 'error',           // Disallow the use of empty character classes in regular expressions
    'no-ex-assign': 'error',                       // Disallow assigning to the exception in a catch block
    'no-extra-boolean-cast': 'error',              // Disallow double-negation boolean casts in a boolean context http://eslint.org/docs/rules/no-extra-boolean-cast
    'no-extra-parens': ['off', 'all', {'conditionalAssign': true, 'nestedBinaryExpressions': false, 'returnAssign': false}],  // Disallow unnecessary parentheses http://eslint.org/docs/rules/no-extra-parens
    'no-extra-semi': 'error',                      // Disallow unnecessary semicolons
    'no-func-assign': 'error',                     // Disallow overwriting functions written as function declarations
    'no-inner-declarations': 'error',              // Disallow function or variable declarations in nested blocks
    'no-invalid-regexp': 'error',                  // Disallow invalid regular expression strings in the RegExp constructor
    'no-irregular-whitespace': 'warn',             // Disallow irregular whitespace outside of strings and comments
    'no-obj-calls': 'error',                       // Disallow the use of object properties of the global object (Math and JSON) as functions
    'no-prototype-builtins': 'error',              // Disallow use of Object.prototypes builtins directly http://eslint.org/docs/rules/no-prototype-builtins
    'no-regex-spaces': 'error',                    // Disallow multiple spaces in a regular expression literal
    'no-sparse-arrays': 'error',                   // Disallow sparse arrays
    'no-template-curly-in-string': 'error',        // Disallow template literal placeholder syntax in regular strings http://eslint.org/docs/rules/no-template-curly-in-string
    'no-unexpected-multiline': 'error',            // Avoid code that looks like two expressions but is actually one http://eslint.org/docs/rules/no-unexpected-multiline
    'no-unreachable': 'error',                     // Disallow unreachable statements after a return, throw, continue, or break statement
    'no-unsafe-finally': 'error',                  // Disallow return/throw/break/continue inside finally blocks http://eslint.org/docs/rules/no-unsafe-finally
    'no-unsafe-negation': 'error',                 // Disallow negating the left operand of relational operators http://eslint.org/docs/rules/no-unsafe-negation
    'use-isnan': 'error',                          // Disallow comparisons with the value NaN
    'valid-jsdoc': 'off',                          // Ensure JSDoc comments are valid http://eslint.org/docs/rules/valid-jsdoc
    'valid-typeof': ['error', {'requireStringLiterals': true}],  // Ensure that the results of typeof are compared against a valid string http://eslint.org/docs/rules/valid-typeof


    // node

    'callback-return': 'off',                      // Enforce return after a callback
    'global-require': 'warn',                      // Require all requires be top-level http://eslint.org/docs/rules/global-require
    'handle-callback-err': 'off',                  // Enforces error handling in callbacks (node environment)
    'no-mixed-requires': ['off', false],           // Disallow mixing regular variable and require declarations
    'no-new-require': 'error',                     // Disallow use of new operator with the require function
    'no-path-concat': 'error',                     // Disallow string concatenation with __dirname and __filename http://eslint.org/docs/rules/no-path-concat
    'no-process-env': 'off',                       // Disallow use of process.env
    'no-process-exit': 'off',                      // Disallow process.exit()
    'no-restricted-modules': 'off',                // Restrict usage of specified node modules
    'no-sync': 'off',                              // Disallow use of synchronous methods (off by default)

    // style

    'array-bracket-spacing': ['warn', 'never'],    // Enforce spacing inside array brackets
    'block-spacing': ['error', 'always'],          // Enforce spacing inside single-line blocks http://eslint.org/docs/rules/block-spacing
    'brace-style': ['error', '1tbs', {'allowSingleLine': true}],  // Enforce one true brace style
    'camelcase': ['warn', {'properties': 'never'}],  // Require camel case names
    'comma-spacing': ['error', {'before': false, 'after': true}],  // Enforce spacing before and after comma
    'comma-style': ['error', 'last'],              // Enforce one true comma style
    'computed-property-spacing': ['error', 'never'],  // Disallow padding inside computed properties
    'consistent-this': 'off',                      // Enforces consistent naming when capturing the current execution context
    'eol-last': ['error', 'always'],               // Enforce newline at the end of file, with no multiple empty lines
    'func-call-spacing': ['error', 'never'],       // Enforce spacing between functions and their invocations http://eslint.org/docs/rules/func-call-spacing
    'func-name-matching': ['off', {'includeCommonJSModuleExports': false}],  // Requires function names to match the name of the variable or property to which they are assigned http://eslint.org/docs/rules/func-name-matching
    'func-names': 'warn',                          // Require function expressions to have a name http://eslint.org/docs/rules/func-names
    'func-style': ['off', 'expression'],           // Enforces use of function declarations or expressions http://eslint.org/docs/rules/func-style TODO: enable
    'id-blacklist': 'off',                         // Blacklist certain identifiers to prevent them being used http://eslint.org/docs/rules/id-blacklist
    'id-length': 'off',                            // This option enforces minimum and maximum identifier lengths (variable names, property names etc.)
    'id-match': 'off',                             // Require identifiers to match the provided regular expression
    'indent': ['error', 2, {'SwitchCase': 1, 'VariableDeclarator': 1, 'outerIIFEBody': 1}],  // This option sets a specific tab width for your code http://eslint.org/docs/rules/indent
    'jsx-quotes': ['warn', 'prefer-double'],       // Specify whether double or single quotes should be used in JSX attributes http://eslint.org/docs/rules/jsx-quotes
    'key-spacing': ['warn', {'beforeColon': false, 'afterColon': true}],  // Enforces spacing between keys and values in object literal properties
    'keyword-spacing': ['error', {'before': true, 'after': true, 'overrides': {'return': {'after': true}, 'throw': {'after': true}, 'case': {'after': true}}}],  // Require a space before & after certain keywords
    'line-comment-position': ['off', {'position': 'above', 'ignorePattern': '', 'applyDefaultPatterns': true}],  // Enforce position of line comments http://eslint.org/docs/rules/line-comment-position TODO: enable?
    'linebreak-style': ['error', 'unix'],          // Disallow mixed 'LF' and 'CRLF' as linebreaks http://eslint.org/docs/rules/linebreak-style
    'lines-around-comment': 'off',                 // Enforces empty lines around comments
    'lines-around-directive': ['error', {'before': 'always', 'after': 'always'}],  // Require or disallow newlines around directives http://eslint.org/docs/rules/lines-around-directive
    'max-depth': ['off', 4],                       // Specify the maximum depth that blocks can be nested
    'max-len': ['warn', 120, 2, {'ignoreUrls': true, 'ignoreComments': true, 'ignoreStrings': true, 'ignoreTemplateLiterals': true}],  // Specify the maximum length of a line in your program http://eslint.org/docs/rules/max-len
    'max-lines': ['off', {'max': 300, 'skipBlankLines': true, 'skipComments': true}],  // Specify the max number of lines in a file http://eslint.org/docs/rules/max-lines
    'max-nested-callbacks': 'off',                 // Specify the maximum depth callbacks can be nested
    'max-params': ['off', 3],                      // Limits the number of parameters that can be used in the function declaration.
    'max-statements': ['off', 10],                 // Specify the maximum number of statement allowed in a function
    'max-statements-per-line': ['off', {'max': 1}],  // Restrict the number of statements per line http://eslint.org/docs/rules/max-statements-per-line
    'multiline-ternary': ['off', 'never'],         // Require multiline ternary http://eslint.org/docs/rules/multiline-ternary TODO: enable?
    'new-cap': ['error', {'newIsCap': true, 'newIsCapExceptions': [], 'capIsNew': false, 'capIsNewExceptions': ['Immutable.Map', 'Immutable.Set', 'Immutable.List']}],  // Require a capital letter for constructors
    'new-parens': 'error',                         // Disallow the omission of parentheses when invoking a constructor with no arguments http://eslint.org/docs/rules/new-parens
    'newline-after-var': 'off',                    // Allow/disallow an empty newline after var statement
    'newline-before-return': 'off',                // Http://eslint.org/docs/rules/newline-before-return
    'newline-per-chained-call': ['error', {'ignoreChainWithDepth': 4}],  // Enforces new line after each method call in the chain to make it more readable and easy to maintain http://eslint.org/docs/rules/newline-per-chained-call
    'no-array-constructor': 'error',               // Disallow use of the Array constructor
    'no-bitwise': 'error',                         // Disallow use of bitwise operators http://eslint.org/docs/rules/no-bitwise
    'no-continue': 'error',                        // Disallow use of the continue statement http://eslint.org/docs/rules/no-continue
    'no-inline-comments': 'off',                   // Disallow comments inline after code
    'no-lonely-if': 'error',                       // Disallow if as the only statement in an else block http://eslint.org/docs/rules/no-lonely-if
    'no-mixed-operators': ['warn', {'groups': [['+', '-', '*', '/', '%', '**'], ['&', '|', '^', '~', '<<', '>>', '>>>'], ['==', '!=', '===', '!==', '>', '>=', '<', '<='], ['&&', '||'], ['in', 'instanceof']], 'allowSamePrecedence': true}],  // Disallow un-paren'd mixes of different operators http://eslint.org/docs/rules/no-mixed-operators
    'no-mixed-spaces-and-tabs': 'error',           // Disallow mixed spaces and tabs for indentation
    'no-multi-assign': ['error'],                  // disallow use of chained assignment expressions. http://eslint.org/docs/rules/no-multi-assign
    'no-multiple-empty-lines': ['warn', {'max': 2, 'maxEOF': 1}],  // Disallow multiple empty lines and only one newline at the end
    'no-negated-condition': 'off',                 // Disallow negated conditions http://eslint.org/docs/rules/no-negated-condition
    'no-nested-ternary': 'error',                  // Disallow nested ternary expressions
    'no-new-object': 'error',                      // Disallow use of the Object constructor
    'no-plusplus': 'error',                        // Disallow use of unary operators, ++ and -- http://eslint.org/docs/rules/no-plusplus
    'no-restricted-syntax': ['error', 'ForInStatement', 'ForOfStatement', 'LabeledStatement', 'WithStatement'],  // Disallow certain syntax forms http://eslint.org/docs/rules/no-restricted-syntax
    'no-spaced-func': 'error',                     // Disallow space between function identifier and application
    'no-tabs': 'error',                            // Disallow tab characters entirely
    'no-ternary': 'off',                           // Disallow the use of ternary operators
    'no-trailing-spaces': 'warn',                  // Disallow trailing whitespace at the end of lines
    'no-underscore-dangle': ['error', {'allowAfterThis': true}],  // Disallow dangling underscores in identifiers
    'no-unneeded-ternary': ['error', {'defaultAssignment': false}],  // Disallow the use of Boolean literals in conditional expressions also, prefer `a || b` over `a ? a : b` http://eslint.org/docs/rules/no-unneeded-ternary
    'no-whitespace-before-property': 'error',      // Disallow whitespace before properties http://eslint.org/docs/rules/no-whitespace-before-property
    'nonblock-statement-body-position': ["warn", "beside"],  // enforce the location of single-line statements. http://eslint.org/docs/rules/nonblock-statement-body-position
    'object-curly-spacing': ['warn', 'never'],     // Require padding inside curly braces
    'object-curly-newline': ['off', {'ObjectExpression': {'minProperties': 0, 'multiline': true}, 'ObjectPattern': {'minProperties': 0, 'multiline': true}}],  // Enforce line breaks between braces http://eslint.org/docs/rules/object-curly-newline TODO: enable once https://github.com/eslint/eslint/issues/6488 is resolved
    'object-property-newline': ['error', {'allowMultiplePropertiesPerLine': true}],  // Enforce "same line" or "multiple line" on object properties. http://eslint.org/docs/rules/object-property-newline
    'one-var': ['error', 'never'],                 // Allow just one var statement per function
    'one-var-declaration-per-line': ['error', 'always'],  // Require a newline around variable declaration http://eslint.org/docs/rules/one-var-declaration-per-line
    'operator-assignment': ['error', 'always'],    // Require assignment operator shorthand where possible or prohibit it entirely http://eslint.org/docs/rules/operator-assignment
    'operator-linebreak': 'off',                   // Enforce operators to be placed before or after line breaks
    'padded-blocks': ['warn', 'never'],           // Enforce padding within blocks
    'quote-props': ['warn', 'always', {'keywords': false, 'unnecessary': true, 'numbers': false}],  // Require quotes around object literal property names http://eslint.org/docs/rules/quote-props.html
    'quotes': ['warn', 'single', {'avoidEscape': true}],  // Specify whether double or single quotes should be used
    'require-jsdoc': 'off',                        // Do not require jsdoc http://eslint.org/docs/rules/require-jsdoc
    'semi': ['error', 'always'],                   // Require or disallow use of semicolons instead of ASI
    'semi-spacing': ['error', {'before': false, 'after': true}],  // Enforce spacing before and after semicolons
    'sort-keys': ['off', 'asc', {'caseSensitive': false, 'natural': true}],  // Requires object keys to be sorted
    'sort-vars': 'off',                            // Sort variables within the same declaration block
    'space-before-blocks': 'error',                // Require or disallow space before blocks
    'space-before-function-paren': ['warn', {'anonymous': 'always', 'named': 'always', 'asyncArrow': 'always'}],  // Require or disallow space before function opening parenthesis http://eslint.org/docs/rules/space-before-function-paren
    'space-in-parens': ['error', 'never'],         // Require or disallow spaces inside parentheses
    'space-infix-ops': 'error',                    // Require spaces around operators
    'space-unary-ops': ['error', {'words': true, 'nonwords': false, 'overrides': {}}],  // Require or disallow spaces before/after unary operators http://eslint.org/docs/rules/space-unary-ops
    'spaced-comment': ['warn', 'always', {'exceptions': ['-', '+'], 'markers': ['=', '!']}],           // space here to support sprockets directives}],  // Or /* in a comment
    'template-tag-spacing': ['warn', 'never'],     // Require or disallow spacing between template tags and their literals. http://eslint.org/docs/rules/template-tag-spacing
    'unicode-bom': ['error', 'never'],             // Require or disallow the Unicode Byte Order Mark http://eslint.org/docs/rules/unicode-bom
    'wrap-regex': 'off',                           // Require regex literals to be wrapped in parentheses

    // variables

    'init-declarations': 'off',                    // Enforce or disallow variable initializations at definition
    'no-catch-shadow': 'off',                      // Disallow the catch clause parameter name being the same as a variable in the outer scope
    'no-delete-var': 'error',                      // Disallow deletion of variables
    'no-label-var': 'error',                       // Disallow labels that share a name with a variable http://eslint.org/docs/rules/no-label-var
    'no-restricted-globals': 'off',                // Disallow specific globals
    'no-shadow': 'error',                          // Disallow declaration of variables already declared in the outer scope
    'no-shadow-restricted-names': 'error',         // Disallow shadowing of names such as arguments
    'no-undef': 'error',                           // Disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef-init': 'error',                      // Disallow use of undefined when initializing variables
    'no-undefined': 'off',                         // Disallow use of undefined variable http://eslint.org/docs/rules/no-undefined TODO: enable?
    'no-unused-vars': ['warn', {'vars': 'local', 'args': 'after-used'}],  // Disallow declaration of variables that are not used in the code
    'no-use-before-define': 'error',               // Disallow use of variables before they are defined

    // es6

    'arrow-body-style': ['error', 'as-needed', {'requireReturnForObjectLiteral': false}],  // Enforces no braces where they can be omitted http://eslint.org/docs/rules/arrow-body-style TODO: enable requireReturnForObjectLiteral?
    'arrow-parens': ['warn', 'always', {'requireForBlockBody': true}],  // Require parens in arrow function arguments http://eslint.org/docs/rules/arrow-parens
    'arrow-spacing': ['error', {'before': true, 'after': true}],  // Require space before/after arrow function's arrow http://eslint.org/docs/rules/arrow-spacing
    'constructor-super': 'error',                  // Verify super() callings in constructors
    'generator-star-spacing': ['error', {'before': false, 'after': true}],  // Enforce the spacing around the * in generator functions http://eslint.org/docs/rules/generator-star-spacing
    'no-class-assign': 'error',                    // Disallow modifying variables of class declarations http://eslint.org/docs/rules/no-class-assign
    'no-confusing-arrow': ['error', {'allowParens': true}],  // Disallow arrow functions where they could be confused with comparisons http://eslint.org/docs/rules/no-confusing-arrow
    'no-const-assign': 'error',                    // Disallow modifying variables that are declared using const
    'no-dupe-class-members': 'error',              // Disallow duplicate class members http://eslint.org/docs/rules/no-dupe-class-members
    'no-duplicate-imports': 'error',               // Disallow importing from the same path more than once http://eslint.org/docs/rules/no-duplicate-imports
    'no-new-symbol': 'error',                      // Disallow symbol constructor http://eslint.org/docs/rules/no-new-symbol
    'no-restricted-imports': 'off',                // Disallow specific imports http://eslint.org/docs/rules/no-restricted-imports
    'no-this-before-super': 'error',               // Disallow to use this/super before super() calling in constructors. http://eslint.org/docs/rules/no-this-before-super
    'no-useless-computed-key': 'error',            // Disallow useless computed property keys http://eslint.org/docs/rules/no-useless-computed-key
    'no-useless-constructor': 'error',             // Disallow unnecessary constructor http://eslint.org/docs/rules/no-useless-constructor
    'no-useless-rename': ['error', {'ignoreDestructuring': false, 'ignoreImport': false, 'ignoreExport': false}],  // Disallow renaming import, export, and destructured assignments to the same name http://eslint.org/docs/rules/no-useless-rename
    'no-var': 'error',                             // Require let or const instead of var
    'object-shorthand': ['warn', 'always', {'ignoreConstructors': false, 'avoidQuotes': true}],  // Require method and property shorthand syntax for object literals http://eslint.org/docs/rules/object-shorthand
    'prefer-arrow-callback': ['warn', {'allowNamedFunctions': false, 'allowUnboundThis': true}],  // Suggest using arrow functions as callbacks
    'prefer-const': ['warn', {'destructuring': 'any', 'ignoreReadBeforeAssign': true}],  // Suggest using of const declaration for variables that are never modified after declared
    'prefer-destructuring': ['off', {'array': true, 'object': true}, {'enforceForRenamedProperties': false}],  // Prefer destructuring from arrays and objects. http://eslint.org/docs/rules/prefer-destructuring
    'prefer-numeric-literals': 'error',            // Disallow parseInt() in favor of binary, octal, and hexadecimal literals http://eslint.org/docs/rules/prefer-numeric-literals
    'prefer-reflect': 'off',                       // Suggest using Reflect methods where applicable http://eslint.org/docs/rules/prefer-reflect TODO: enable?
    'prefer-rest-params': 'error',                 // Use rest parameters instead of arguments http://eslint.org/docs/rules/prefer-rest-params
    'prefer-spread': 'error',                      // Suggest using the spread operator instead of .apply() http://eslint.org/docs/rules/prefer-spread
    'prefer-template': 'warn',                     // Suggest using template literals instead of string concatenation http://eslint.org/docs/rules/prefer-template
    'require-yield': 'error',                      // Disallow generator functions that do not have yield http://eslint.org/docs/rules/require-yield
    'rest-spread-spacing': ['error', 'never'],     // Enforce spacing between object rest-spread http://eslint.org/docs/rules/rest-spread-spacing
    'sort-imports': ['off', {'ignoreCase': false, 'ignoreMemberSort': false, 'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']}],  // Import sorting http://eslint.org/docs/rules/sort-imports
    'symbol-description': 'error',                 // Require a Symbol description http://eslint.org/docs/rules/symbol-description
    'template-curly-spacing': 'error',             // Enforce usage of spacing in template strings http://eslint.org/docs/rules/template-curly-spacing
    'yield-star-spacing': ['error', 'after'],      // Enforce spacing around the * in yield* expressions http://eslint.org/docs/rules/yield-star-spacing

    // imports
    'import/no-unresolved': ['error', {'commonjs': true, 'caseSensitive': true}],  // Static analysis: ensure imports point to files/modules that can be resolved https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    'import/named': 'error',                       // Ensure named imports coupled with named exports https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/named.md#when-not-to-use-it
    'import/default': 'off',                       // Ensure default import coupled with default export https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/default.md#when-not-to-use-it
    'import/namespace': 'error',                   // Https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/namespace.md
    'import/export': 'error',                      // Helpful warnings: disallow invalid exports, e.g. multiple defaults https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
    'import/no-named-as-default': 'off',           // TODO: enable? Do not allow a default import name to match a named export https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default.md
    'import/no-named-as-default-member': 'error',  // Warn on accessing default export property names that are also named exports https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-as-default-member.md
    'import/no-deprecated': 'off',                 // Disallow use of jsdoc-marked-deprecated imports https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/tests/**', 'karma.conf.js'], 'optionalDependencies': false}],  // Forbid the use of extraneous packages https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-mutable-exports': 'error',          // Forbid mutable exports https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
    'import/no-commonjs': 'off',                   // Module systems: disallow require() https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-commonjs.md
    'import/no-amd': 'error',                      // Disallow AMD require/define https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
    'import/no-nodejs-modules': 'off',             // No Node.js builtin modules https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-nodejs-modules.md TODO: enable?
    'import/first': ['error', 'absolute-first'],   // Style guide: disallow non-import statements appearing before import statements https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
    'import/imports-first': 'off',                 // Disallow non-import statements appearing before import statements https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/imports-first.md deprecated: use `import/first`
    'import/no-duplicates': 'error',               // Disallow duplicate imports https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
    'import/no-namespace': 'off',                  // Disallow namespace imports https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-namespace.md
    'import/extensions': ['error', 'always', {'js': 'never', 'jsx': 'never'}],  // Ensure consistent use of file extension within the import path https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/order': ['off', {'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'], 'newlines-between': 'never'}],  // Enforce a convention in module import order https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md TODO: enable?
    'import/newline-after-import': 'error',        // Require a newline after the last import/require in a group https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
    'import/prefer-default-export': 'warn',        // Require modules with a single export to use a default export https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
    'import/no-restricted-paths': 'off',           // Restrict which files can be imported in a given folder https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-restricted-paths.md
    'import/max-dependencies': ['off', {'max': 10}],  // Forbid modules to have too many dependencies https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/max-dependencies.md
    'import/no-absolute-path': 'error',            // Forbid import of modules using absolute paths https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
    'import/no-dynamic-require': 'error',          // Forbid require() calls with expressions https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-internal-modules': ['off', {'allow': []}],  // Prevent importing the submodules of other modules https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-internal-modules.md
    'import/unambiguous': 'warn',                  // Warn if a module could be mistakenly parsed as a script by a consumer leveraging Unambiguous JavaScript Grammar https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/unambiguous.md this should not be enabled until this proposal has at least been *presented* to TC39. At the moment, it's not a thing.
    'import/no-webpack-loader-syntax': 'error',    // Forbid Webpack loader syntax in imports https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
    'import/no-unassigned-import': 'off',          // Prevent unassigned imports https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unassigned-import.md importing for side effects is perfectly acceptable, if you need side effects.
    'import/no-named-default': 'error',            // Prevent importing the default as if it were named https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
    'import/no-anonymous-default-export': ['off', {'allowArray': false, 'allowArrowFunction': false, 'allowAnonymousClass': false, 'allowAnonymousFunction': false, 'allowLiteral': false, 'allowObject': false}],  // Reports if a module's default export is unnamed https://github.com/benmosher/eslint-plugin-import/blob/d9b712ac7fd1fddc391f7b234827925c160d956f/docs/rules/no-anonymous-default-export.md

    // strict

    'strict': ['error', 'never'],                  // Babel inserts `'use strict';` for us

    // react

    'react/display-name': ['off', {'ignoreTranspilerName': false}],  // Prevent missing displayName in a React component definition https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    'react/forbid-prop-types': ['error', {'forbid': ['any', 'array', 'object']}],  // Forbid certain propTypes (any, array, object) https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
    'react/jsx-boolean-value': ['error', 'never'],  // Enforce boolean attributes notation in JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],  // Validate closing bracket location in JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-closing-bracket-location.md
    'react/jsx-curly-spacing': ['error', 'never', {'allowMultiline': true}],  // Enforce or disallow spaces inside of curly braces in JSX attributes https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    'react/jsx-handler-names': ['off', {'eventHandlerPrefix': 'handle', 'eventHandlerPropPrefix': 'on'}],  // Enforce event handler naming conventions in JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
    'react/jsx-indent-props': ['error', 2],        // Validate props indentation in JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
    'react/jsx-key': 'off',                        // Validate JSX has key prop when in array or iterator https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-key.md
    'react/jsx-max-props-per-line': ['off', {'maximum': 1}],  // Limit maximum of props on a single line in JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    'react/jsx-no-bind': ['error', {'ignoreRefs': true, 'allowArrowFunctions': true, 'allowBind': false}],  // Prevent usage of .bind() in JSX props https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
    'react/jsx-no-duplicate-props': ['error', {'ignoreCase': true}],  // Prevent duplicate props in JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    'react/jsx-no-literals': 'off',                // Prevent usage of unwrapped JSX strings https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-literals.md
    'react/jsx-no-undef': 'error',                 // Disallow undeclared variables in JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    'react/jsx-pascal-case': ['error', {'allowAllCaps': true, 'ignore': []}],  // Enforce PascalCase for user-defined JSX components https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
    'react/sort-prop-types': ['off', {'ignoreCase': true, 'callbacksLast': false, 'requiredFirst': false}],  // Enforce propTypes declarations alphabetical sorting https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
    'react/jsx-sort-prop-types': 'off',            // Deprecated in favor of react/jsx-sort-props
    'react/jsx-sort-props': ['off', {'ignoreCase': true, 'callbacksLast': false, 'shorthandFirst': false, 'shorthandLast': false}],  // Enforce props alphabetical sorting https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    'react/jsx-uses-react': ['error'],             // Prevent React to be incorrectly marked as unused https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    'react/jsx-uses-vars': 'error',                // Prevent variables used in JSX to be incorrectly marked as unused https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    'react/no-danger': 'warn',                     // Prevent usage of dangerous JSX properties https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger.md
    'react/no-deprecated': ['error'],              // Prevent usage of deprecated methods https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-deprecated.md
    'react/no-did-mount-set-state': ['error'],     // Prevent usage of setState in componentDidMount https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    'react/no-did-update-set-state': ['error'],    // Prevent usage of setState in componentDidUpdate https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    'react/no-direct-mutation-state': 'off',       // Prevent direct mutation of this.state https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-direct-mutation-state.md
    'react/no-is-mounted': 'error',                // Prevent usage of isMounted https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-is-mounted.md
    'react/no-multi-comp': ['error', {'ignoreStateless': true}],  // Prevent multiple component definition per file https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    'react/no-set-state': 'off',                   // Prevent usage of setState https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    'react/no-string-refs': 'error',               // Prevent using string references https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
    'react/no-unknown-property': 'error',          // Prevent usage of unknown DOM property https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    'react/prefer-stateless-function': 'error',    // Require ES6 class declarations over React.createClass https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-es6-class.md Require stateless functions when not using lifecycle methods, setState or ref https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    'react/prop-types': ['error', {'ignore': [], 'customValidators': []}],  // Prevent missing props validation in a React component definition https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    'react/react-in-jsx-scope': 'error',           // Prevent missing React when using JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    'react/require-extension': ['off', {'extensions': ['.jsx', '.js']}],  // Restrict file extensions that may be required https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md deprecated in favor of import/extensions
    'react/require-render-return': 'error',        // Require render() methods to return something https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-render-return.md
    'react/self-closing-comp': 'error',            // Prevent extra closing tags for components without children https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    'react/jsx-space-before-closing': ['error', 'always'],  // Enforce spaces before the closing bracket of self-closing JSX elements https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-space-before-closing.md
    'react/sort-comp': ['error', {'order': ['static-methods', 'lifecycle', '/^on.+$/', '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/', 'everything-else', '/^render.+$/', 'render']}],  // Enforce component methods order https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
    'react/jsx-wrap-multilines': ['error', {'declaration': true, 'assignment': true, 'return': true}], // Prevent missing parentheses around multilines JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
    'react/jsx-first-prop-new-line': ['error', 'multiline'],  // Require that the first prop in a JSX element be on a new line when the element is multiline https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-first-prop-new-line.md
    'react/jsx-equals-spacing': ['error', 'never'],  // Enforce spacing around jsx equals signs https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md
    'react/jsx-indent': ['error', 2],              // Enforce JSX indentation https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
    'react/jsx-no-target-blank': 'error',          // Disallow target="_blank" on links https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-target-blank.md
    'react/jsx-filename-extension': ['error', {'extensions': ['.jsx']}],  // Only .jsx files may have JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-no-comment-textnodes': 'error',     // Prevent accidental JS comments from being injected into JSX as text https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-comment-textnodes.md
    'react/no-render-return-value': 'error',       // Disallow using React.render/ReactDOM.render's return value https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-render-return-value.md
    'react/require-optimization': ['off', {'allowDecorators': []}],  // Require a shouldComponentUpdate method, or PureRenderMixin https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-optimization.md
    'react/no-find-dom-node': 'error',             // Warn against using findDOMNode() https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
    'react/forbid-component-props': ['off', {'forbid': []}],  // Forbid certain props on Components https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-component-props.md
    'react/no-danger-with-children': 'error',      // Prevent problem with children and props.dangerouslySetInnerHTML https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-danger-with-children.md
    'react/no-unused-prop-types': ['error', {'customValidators': [], 'skipShapeProps': true}],  // Prevent unused propType definitions https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unused-prop-types.md
    'react/style-prop-object': 'error',            // Require style prop value be an object or var https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/style-prop-object.md
    'react/no-unescaped-entities': 'error',        // Prevent invalid characters from appearing in markup https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unescaped-entities.md
    'react/no-children-prop': 'error',             // Prevent passing of children as props https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-children-prop.md

  }
};
