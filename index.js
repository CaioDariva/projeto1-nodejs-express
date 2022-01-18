const http = require('http')

http.createServer((req, res) => {
    res.end('Hello World!')
}).listen(3000)

console.log('Servidor rodando em http://localhost:3000')