module.exports = {
  extends: ["airbnb"],
  plugins: ["jest"],
  rules: {
    "max-len": [
      "warn",
      160,
      2,
      {
        ignoreUrls: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true
      }
    ]
  }
};
