const { defineConfig } = require('cypress')

export default defineConfig({
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
    baseUrl: 'http://localhost:3000',
  },
})
