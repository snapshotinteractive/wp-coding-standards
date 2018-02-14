module.exports = {
  "root": true,
  "extends": [
    "eslint:recommended",
    "wordpress"
  ],
  "globals": {
    "wp": true
  },
  "env": {
    "node": true,
    "es6": true,
    "amd": true,
    "browser": true,
    "jquery": true
  },
  "parserOptions": {
    "ecmaFeatures": {
      "globalReturn": true,
      "generators": false,
      "objectLiteralDuplicateProperties": false,
      "experimentalObjectRestSpread": true
    },
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": [
    "import"
  ],
  "settings": {
    "import/core-modules": [],
    "import/ignore": [
      "node_modules",
      "\\.(coffee|scss|css|less|hbs|svg|json)$"
    ]
  },
  "rules": {
    "no-console": process.env.NODE_ENV === 'production' ? 2 : 0,
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "ignore"
      }
    ],
    "comma-spacing": "error",
    "comma-style": "error",
    "eqeqeq": "error",
    "func-call-spacing": "error",
    "indent": ["error", "tab", { "SwitchCase": 1 }],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "lines-around-comment": "off",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-mixed-operators": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-var": "error",
    "no-unused-vars": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-const": "error",
    "semi": "error",
    "semi-spacing": "error",
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-in-parens": ["error", "always"],
    "space-infix-ops": ["error", { "int32Hint": false }],
    "space-unary-ops": [
      "error",
      {
        "overrides": {
          "!": true
        }
      }
    ]
  }
}
