const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "hcpa2y",
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
