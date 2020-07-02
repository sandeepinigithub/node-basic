// const express = require("express");
// const app = express();

// app.get("/",(req, res) => {
//     res.send("Hello We are from express");
// });

// app.listen(3000);

const fs = require("fs");
const fileName = "target.txt";

fs.readFile(fileName,(err, data) => {
    if (err) {
        conslose.log(err);
    }
    console.log(data.toString());
});

console.log("Nodejs Asynchronous Programming"); // This should come at bottom of above data but above data takes more time ,thats why it got executed first.