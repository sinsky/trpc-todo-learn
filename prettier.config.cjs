/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 120,
  tabWidth: 2,
  singleQuote: false,
  semi: true,
  importOrder: ["<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSortSpecifiers: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
