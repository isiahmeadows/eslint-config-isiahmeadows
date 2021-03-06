"use strict"

// For maintaining compatibility with ES3 environments (at least in the output).

module.exports = {
    parserOptions: {ecmaVersion: 3},
    rules: {
        // ES3
        "comma-dangle": [2, "never"],
        "dot-notation": [2, {allowKeywords: false}],
        "quote-props": [2, "consistent-as-needed", {keywords: true}],

        // IE quirk
        "no-catch-shadow": 2,
    },
}
