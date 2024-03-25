const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
// URL pour l'environnement de préproduction
baseUrl: 'https://b-tech-ppd.birdz.com',
// URL pour l'environnement de production
// baseUrl: 'https://b-tech.birdz.com/',
  viewportWidth: 1280,
  viewportHeight: 710,
  defaultCommandTimeout	: 10000,
  },
  
});
