const nx = require("@nx/eslint-plugin");
const playwright = require("eslint-plugin-playwright");

const baseConfig = require("../../eslint.config.js");

module.exports = [
  playwright.configs["flat/recommended"],

  ...baseConfig,
  ...nx.configs["flat/react"],
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    // Override or add rules here
    rules: {},
  },
];
