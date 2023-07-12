const http = require('http');
const fs = require('fs');
let port = 8000;

function requestHandler(req, res){
    console.log(req.url);
    let filePath;
    switch(req.url){
        case '/':
            filePath = './home.html';
            break;
        case '/about':
            filePath = './about.html';
            break;
        default:
            filePath = './404.html';
    }
    fs.readFile(filePath, (err, data) => {
        if(err){
            res.end('<h1>Error</h1>');
            return;
        }
        res.end(data);
    });
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('Server is running at Port:', port);
});