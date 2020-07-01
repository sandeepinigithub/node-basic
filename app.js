const {sum} = require("./helpers");
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello World from node js");
})

server.listen(3000);

const total = sum(10 ,20); //earlier it was helpers.sum(10,20)
console.log("TOTAL :",total);

