import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'http://localhost:8080',
  },
});

// const { defineConfig } = require('cypress')

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'http://localhost:8080',
//   },
// })
