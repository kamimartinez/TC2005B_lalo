module.exports = {
  overrides: [
    {
      files: "*.ejs",
      options: { parser: "html" }, // Omitir el parser de HTML para evitar formateo
    },
  ],
};
