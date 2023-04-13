const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'i7b9k1',
  watchForFileChanges: true,

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    supportFile: false,
    specPattern: 'cypress/components/*.spec.{js,jsx,ts,tsx}',
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
