module.exports = {
  "env": {
      "browser": true,
      "es2021": true
  },
  "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
  ],
  "overrides": [
  ],
  "parserOptions": {
      "ecmaVersion": 6,
      "sourceType": "module"
  },
  "plugins": ["react"],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
     }
  },
  rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", "ts", "tsx"] }], 
  }
}
