const http = require('http');
const port = 4444;
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.write(`A lérés forrása : $(req.url}`)
    res.end("     vége");
})

server.listen(port);