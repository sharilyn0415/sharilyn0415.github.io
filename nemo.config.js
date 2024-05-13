const path = require("path");

module.exports = {
  plugins: {
    view: {
      module: "nemo-view",
    },
  },
  output: {
    reports: path.resolve("test/functional", "report"),
  },
  profiles: {
    base: {
      tests: path.resolve("test/functional", "*test.js"),
      driver: {
        browser: "chrome",
      },
      data: {
        baseUrl: "https://sharilyn0415.github.io",
      },
      mocha: {
        timeout: 180000,
        reporter: "mochawesome",
        reporterOptions: {
          quiet: true,
        },
      },
    },
    chrome: {
      driver: {
        browser: "chrome",
      },
    },
  },
};
