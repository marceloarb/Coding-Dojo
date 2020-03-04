const http = require('http');
const fs = require('fs');
const server = http.createServer((request,response) =>{
    if(request.url === '/cars'){
        fs.readFile('templates/car.html', 'utf8', (errors,contents)=>{
            response.writeHead(200, {'content-type': 'text/html' });
            response.write(contents);
            response.end();
        })
    }
    else if(request.url === '/images/car1.jpg'){
        fs.readFile('./images/car1.jpg', (errors,contents)=>{
            response.writeHead(200, {'content-type': 'image/jpg'});
            response.write(contents);
            response.end();

        })
    }
    else if(request.url === '/stylesheets/style.css'){
        fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
            response.writeHead(200, {'Content-type': 'text/css'});
            response.write(contents);
            response.end();
        })
    }
    
    else if(request.url === '/cats'){
        fs.readFile('templates/cat.html', 'utf8', (errors,contents)=>{
            response.writeHead(200, {'content-type': 'text/html'});
            response.write(contents);
            response.end();

        })
    }

    else if (request.url === '/cars/new'){
        fs.readFile('templates/add.html', 'utf8', (errors,contents)=>{
            response.writeHead(200, {'content-type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    
})

server.listen(7077);