const http = require('http');
http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'application/json'});
    let output = {
        name: 'alejo',
        years: 23,
        url: req.url
    }
    res.write(JSON.stringify(output));
    // res.write('Hello World');
    res.end();
})
.listen(8080)
console.log('Listen port 8080');
