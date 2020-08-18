const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': ' text/html ;charset=utf8'
    })
    res.write('hello 范光磊');
    res.end()
}).listen('8888', () => {
    console.log("服务器启动了");
})