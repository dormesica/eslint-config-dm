
module.exports = {
    parserOptions: {
        'ecmaVersion': 6,
        'ecmaFeatures': {
            'jsx': true,
        },
        'sourceType': 'module',
    },
    rules: {
        // Possible Errors
        'for-direction': 'error',
        'getter-return': 'error',
        'no-async-promise-executor': 'error',
        'no-await-in-loop': 'error',
        'no-compare-neg-zero': 'warn',
        'no-cond-assign': ['warn', 'always'],
        'no-console': 'error',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-parens': ['error', {
            nestedBinaryExpressions: true,
            ignoreJSX: 'multi-line',
        }],
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-inner-declarations': ['error', 'both'],
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': ['error', {
            skipStrings: true,
            skipComments: false,
            skipRegExps: true,
            skipTemplates: true,
        }],
        'no-misleading-character-class': 'warn',
        'no-obj-calls': 'error',
        'no-prototype-builtins': 'off',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'warn',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'require-atomic-updates': 'warn',
        'use-isnan': 'error',
        'valid-jsdoc': ['warn', {
            requireReturn: false,
            requireReturnType: true,
            matchDescription: '.+',  // require description
            requireParamDescription: true,
            requireReturnDescription: true,
            requireParamType: true
        }],
        'valid-typeof': 'error',

        // Best Practice
        'accessor-pairs': ['warn', {
            setWithoutGet: true,
            getWithoutSet: false,
        }],
        'array-callback-return': 'error',
        'block-scoped-var': 'error',
        'class-methods-use-this': 'warn',
        //'complexity': 'warn',
        'consistent-return': ['warn', { treatUndefinedAsUnspecified: false }],
        'curly': 'error',
        'default-case': 'error',
        //'dot-location': 'off', // TODO fill
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'guard-for-in': 'error',
        'max-classes-per-file': ['error', 1],
        'no-alert': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-div-regex': 'error',
        'no-else-return': ['error', { allowElseIf: false }],
        'no-empty-function': ['error', { 'allow': ['arrowFunctions'] }],
        'no-empty-pattern': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'off',  // working a lot with polyfills
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-coercion': 'error',
        'no-implicit-globals': 'off',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': ['warn', {
            'ignore': [1],
            'ignoreArrayIndexes': true,
        }],
        'no-multi-spaces': ['error', {
            'ignoreEOLComments': true,
        }],
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
    }
};
