/*
 * @Descripttion: 
 * @Author: taoman
 * @Date: 2020-12-14 13:56:42
 * @LastEditors: taoman
 * @LastEditTime: 2021-03-25 11:26:54
 */
module.exports = {
    root: true,
    env: {
      node: true
    },
    extends: [
      "plugin:vue/essential",
      "eslint:recommended",
      "@vue/typescript/recommended",
      "@vue/prettier",
      "@vue/prettier/@typescript-eslint"
    ],
    parserOptions: {
      ecmaVersion: 2020
    },
    rules: {
      "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
      // "eslintIntegration": true,
      // "editor.formatOnSave": true,
      // "stylelintIntegration": true,
      // "semi": false,
  
      "prettier/prettier": "warn",
      "comma-dangle": ["error", "never"],
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/ban-ts-ignore": "warn",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/interface-name-prefix": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-namespace": "off",
      "@typescript-eslint/no-this-alias": [
        "error",
        {
          "allowDestructuring": true, // Allow `const { props, state } = this`; false by default
          "allowedNames": ["_this"] // Allow `const _this = this`; `[]` by default
        }
      ],
      "semi": 0,
      "no-unused-vars":'off',
      "prettier.endOfLine": 0,
      // eslintIntegration: false
      'prettier/prettier': 'off',
      "wrap_attributes": 0,
      'prefer-const': 'off'
    }
  };