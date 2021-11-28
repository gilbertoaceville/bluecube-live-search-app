module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "@react-icons",
        camel2DashComponentName: false,
        transformToDefaultImport: false,
        customName: require("path").resolve(__dirname, "./react-icons.js"),
      },
      "@react-icons",
    ],
  ],
};
