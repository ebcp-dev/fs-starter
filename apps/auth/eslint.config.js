const { FlatCompat } = require("@eslint/eslintrc");
const js = require("@eslint/js");
const { fixupConfigRules } = require("@eslint/compat");
const nx = require("@nx/eslint-plugin");
const typescriptParser = require("@typescript-eslint/parser");
const baseConfig = require("../../eslint.config.js");

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...fixupConfigRules(compat.extends("next")),
  ...fixupConfigRules(compat.extends("next/core-web-vitals")),
  ...baseConfig,
  ...nx.configs["flat/react-typescript"],
  {
    ignores: [".next/**/*"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"], // Apply this to TypeScript files
    languageOptions: {
      parser: typescriptParser, // Specify the parser
      parserOptions: {
        project: "./tsconfig.json", // Path to TypeScript config
        tsconfigRootDir: __dirname, // Resolve tsconfig correctly
        ecmaVersion: "latest", // Set ECMAScript version
        sourceType: "module", // For ES modules
      },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: true },
      ],
      "@typescript-eslint/no-unsafe-assignment": "error",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowExpressions: true },
      ],
      "@typescript-eslint/explicit-member-accessibility": [
        "error",
        { accessibility: "explicit" },
      ],
    },
  },
];
