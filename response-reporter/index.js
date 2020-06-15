const { REPORT_DIR, PORT, TARGET_URI } = process.env;
const Express = require("express");
const app = Express();
const proxy = require("express-http-proxy");
const writeFile = require("writefile");
const path = require("path");
const uuid = require("uuid").v4;

app.use('*', proxy(TARGET_URI, {
    userResHeaderDecorator(headers, _request, _response, _proxyRequest, _proxyResponse) {
        const report = {
            "openapi-cop-source-request": JSON.parse(headers["openapi-cop-source-request"]),
            "openapi-cop-validation-result": JSON.parse(headers["openapi-cop-validation-result"]),
        };

        writeFile(path.join(REPORT_DIR, `${uuid()}.json`), JSON.stringify(report));

        return headers;
    }
  }));

console.info("Listening on " + PORT);
app.listen(PORT);
