module.exports = {
  "env": {
    "browser": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": [
    "@typescript-eslint",
    "react",
    "react-hooks",
    "import"
  ],
  "rules": {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "ignoreRestSiblings": true }],

    "no-unused-vars": "off",
    "import/no-default-export": "error",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "warn",
  }
}
