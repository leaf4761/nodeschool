const fs = require('fs')
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'})
    fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(process.argv[2])