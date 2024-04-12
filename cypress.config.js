const { defineConfig } = require("cypress");
const { pa11y, prepareAudit } = require("@cypress-audit/pa11y");

module.exports = defineConfig({
  e2e: {
    defaultBrowser: "chrome",
    browser:"chrome",
    baseUrl: 'http://localhost:9080/ords/r/a11y_tasks/tasks',
    setupNodeEvents(on, config) {
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        pa11y: pa11y((pa11yReport) => {
          console.log(pa11yReport); // raw pa11y reports
        }),
      });
    },
    defaultCommandTimeout:10000
  },
});
