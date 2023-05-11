const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'i7b9k1',
  watchForFileChanges: true,
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    supportFile: 'cypress/support/component.ts',
    specPattern: ['cypress/**/*.cy.{js,jsx,ts,tsx}'],
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/tests/**/*.spec.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
