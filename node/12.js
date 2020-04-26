const http = require('http')

const server = http.createServer((req, res) => {
    const buffer = []
    req.on('data', (chunk) => {
        buffer.push(chunk)
    })

    req.on('error', (err) => {
        console.log(err)
    })

    req.on('end', () => {
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'})
        res.end(Buffer.concat(buffer).toString().toUpperCase())
    })
})

server.listen(process.argv[2])