const { REPORT_DIR, PORT, TARGET_URI } = process.env;
const Express = require("express");
const app = Express();
const proxy = require("express-http-proxy");
const fs = require("fs");
const uuid = require("uuid").v4;

app.use('*', proxy(TARGET_URI, {
    userResHeaderDecorator(_headers, _request, _response, _proxyRequest, _proxyResponse) {
        const report = {
            "openapi-cop-source-request": _proxyResponse.getHeader("openapi-cop-source-request"),
            "openapi-cop-validation-result": _proxyResponse.getHeader("openapi-cop-validation-result"),
        };

        fs.writeFile(`${REPORT_DIR}/${uuid()}`, JSON.stringify(report), err => {
            if(err) {
                console.error(err);
            } else {
                console.debug("Serialized report file");
            }
        });

        return _headers;
    }
  }));

console.info("Listening on " + PORT);
app.listen(PORT);
