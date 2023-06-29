const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "ignoreVideos": false
  },

  e2e: {

    baseUrl: "https://example.cypress.io/",
    todoPage: "todo",
    actionsPage: "commands/actions",
    locationPage: "commands/location",

    envTag: "cypressQA",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', verifyDownloadTasks);
      require('cypress-mochawesome-reporter/plugin')(on);
    },
      // default viewport size for all tests
    viewportWidth: 1920,
    viewportHeight: 1080
    
  },
});
