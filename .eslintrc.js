module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rures: {
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
  },
  plugins: ["prettier"],
};
