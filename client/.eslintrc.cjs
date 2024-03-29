module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": [
      "warn", // or "error" to make it an error
      {
        vars: "all",
        args: "none",
        ignoreRestSiblings: false,
        varsIgnorePattern: "^_", // Ignore variables starting with an underscore
        argsIgnorePattern: "^_",
        caughtErrors: "none",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
};
