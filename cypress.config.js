const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {

    await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", browserify.default(config, {
        typescript: require.resolve("typescript")
        })
    );

    const envName = config.env.envName || 'local';
    const environmentFilename = `./env/${envName}.settings.json`;
    const settings = require(environmentFilename);

    if(settings.baseUrl) {
        config.baseUrl = settings.baseUrl;
    }

    if(settings.env) {
        config.env = {
            ...config.env,
            ...settings.env,
        }
    }
    return config;
}

module.exports = defineConfig({
    projectId: 'xha1xy',
    e2e: {
        specPattern: "**/*.feature",
        setupNodeEvents
    },
    video: false,
    defaultCommandTimeout: 6000,
    responseTimeout: 10000,
    requestTimeout: 6000
});