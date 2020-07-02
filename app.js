// const express = require("express");
// const app = express();

// app.get("/",(req, res) => {
//     res.send("Hello We are from express");
// });

// app.listen(3000);

const fs = require("fs");
const fileName = "target.txt";
fs.watch(fileName,() => console.log("File Changed !!"));