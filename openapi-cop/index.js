/** 
 * This file will start up an openapi-cop proxy with config passed in through environment variables.
 */
const { runProxy } = require("openapi-cop");
const { PORT, HOST, TARGET_URI, API_DOC, FORBID_ADDITIONAL_PROPS, SILENT_MODE_ENABLED } = process.env;

const startProxy = async () => await runProxy({
    port: PORT,
    host: HOST,
    targetUrl: TARGET_URI,
    apiDocFile: API_DOC,
    defaultForbidAdditionalProperties: FORBID_ADDITIONAL_PROPS,
    silent: SILENT_MODE_ENABLED
}).catch(err => {
    console.error("Error in proxy: " + err);
    throw err;
});

startProxy();