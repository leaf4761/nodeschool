const http = require('http')

const url = process.argv[2]
http.get(url, response => {
    response.setEncoding('utf8')
    let msg = []
    response.on('data', data => {
        msg.push(data)
    })

    response.on('error', err => console.log(err))

    response.on('end', () => msg.forEach(m => console.log(m)))
})