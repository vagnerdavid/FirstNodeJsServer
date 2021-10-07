const http = require('http');
const port = 4444;
const fs = require('fs');

const server = http.createServer((req, res) => {
    
    console.log(req.url);
    console.log(req.method);
    
    
    //router
    switch (true) {
        case req.url === '/' && req.method === 'GET':
            fs.readFile('./views/index.html', (err.file)=>{
                res.setHeader('Content-Type', 'text/html');
                res.end(file);
            });
            break;
        default:
            res.end('404 Not Found');
            //Majd ezt is küldöm állományba
    }
})

server.listen(port);
