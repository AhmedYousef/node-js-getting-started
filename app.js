const express  = require("express");
const app = express();
const port = 8099;

app.get("/", (req, res) => res.send("Msa Msa"));

app.listen(port, () => console.log(`App is listening on port ${port}!`));