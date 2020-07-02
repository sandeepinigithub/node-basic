const express = require("express");
const app = express();

app.get("/",(req, res) => {
    res.send("Hello We are from express");
});

app.listen(3000);