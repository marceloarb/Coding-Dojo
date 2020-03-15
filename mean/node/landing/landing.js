const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response) =>{
    if(request.url === '/'){
        fs.readFile('templates/index.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'content-type': 'text/html' });
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/ninjas'){
        fs.readFile('templates/ninja.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'content-type': 'text/html'});
            response.write(contents);
            response.end();

        })
    }
    else if (request.url === '/dojos/new'){
        fs.readFile('templates/dojo.html', 'utf8', function(errors,contents){
            response.writeHead(200, {'content-type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    
})

server.listen(6789);