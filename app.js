const http = require('http');

const server = http.createServer((req, res) => {
    console.log('INCOMING REQUEST');
    console.log(req.method, req.url);

    if (req.method === 'POST') {
        let body = '';
        req.on('end', ()=>{
            console.log(body);
            let userName = body.split('=')[1].split('+').join(' ');
            console.log(userName);
            res.end(`<h1>${userName}</h1>`);
        })
        req.on("data", chunk => {
            body += chunk;
        })
       
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.end('<form method="POST"><input type="text" name="userName"></input><button type="submit">Create User</button></form>');
    }
});

server.listen(5000);