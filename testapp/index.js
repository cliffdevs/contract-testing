const Express = require("express");
const PORT = 8080;

const app = Express();

app.get("/hello/:name", (req, res) => {
    res.status(200).json({ message: "Hello, " + req.params.name });
});

console.info("Express app listening on port " + PORT);
app.listen(PORT);
