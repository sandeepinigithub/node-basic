// const express = require("express");
// const app = express();

// app.get("/",(req, res) => {
//     res.send("Hello We are from express");
// });

// app.listen(3000);

const fs = require("fs");
const fileName = "target.txt";

const data = fs.readFileSync(fileName);
console.log(data.toString());

// fs.readFile(fileName,(err, data) => {
//     if (err) {
//         conslose.log(err);
//     }
//     console.log(data.toString());
// });

console.log("--->Nodejs Synchronous Programming"); 