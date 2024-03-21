import { defineConfig } from 'cypress'
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: 'https://mymtnngnxtgen-shop-staging.mtnnigeria.net/',
    specPattern: ["cypress/e2e/**/*.feature"],
    //experimentalSessionAndOrigin : true,
    experimentalSourceRewriting : false,
    experimentalModifyObstructiveThirdPartyCode : true,
    setupNodeEvents,    
    supportFile: "cypress/support/commands.ts",
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 60000,
    viewportWidth: 1200,
    viewportHeight: 860,
    video: false,
    requestTimeout: 2000,
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,
    scrollBehavior: false,
    slowTestThreshold: 1000,
    testIsolation: true,
    chromeWebSecurity: false,
    experimentalMemoryManagement : true
    
    },

      chromeWebSecurity: false,
      experimentalSourceRewriting : false,
      experimentalModifyObstructiveThirdPartyCode : true,
      experimentalMemoryManagement : true,
      watchForFileChanges: false, 
 
    
    env: {
      auth_username: "mahesh.kari7@gmail.com",
      auth_password: "Mahesh@kari7",
      invalid_username: "ramanjaneyuluaa@ekfrazo.in",
      invalid_password: "Ramani",
      auth_mpulse_username : "2349132059720",
      auth_mpulse_password : "Password@234",
      auth_selfservice_username : "",
      auth_selfservice_password : "",
      auth_mobile: "09132058971",//"09132059720", //09132058971 09132058413
      auth_facebookid: "",
      auth_facebookpwd: "",
      auth_googleAccountid: "ramanjaneyulu@ekfrazo.in",
      auth_googleAccountpwd: "Raman@123#",
      playauth_username: "2349132059720",
      playauth_password:"Password@1234",
      product_name:"5G router",
      user_email:"rajiini@ekfrazo.in",
      user_name:"Rajiini",
      user_password:"Raji@123",
      user_password1:"12m",
      confirm_Password:"Raji@123",
      first_name:"Rajeshwari",
      last_name:"M",
      forgotpasswordemail:"manoj@ekfrazo.in",

      accountID: "2000008810",
      excess_amount: "200",
      bulkemailID: "pankajkashyap2405@gmail.com",
      bulkemailPassword: "Tester@123"
    }
})
