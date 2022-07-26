const { defineConfig } = require("cypress")

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  viewportWidth: 1500,
  viewportHeight: 900,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
