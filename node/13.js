const http = require('http')
const url = require('url')

const getTime = (date) => {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds()
    }
}

const server = http.createServer((req, res) => {
    const u = url.parse(req.url)
    const time = u.query.split('=')[1]
    
    if(u.pathname === '/api/parsetime'){
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'})
        res.end(JSON.stringify(getTime(new Date(time))))
    }else if(u.pathname === '/api/unixtime'){
        res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'})
        res.end(JSON.stringify({unixtime: new Date(time).getTime()}))
    }
    
})

server.listen(process.argv[2])