const net = require('net')

const port = process.argv[2]

const formatDate = (date) => {
    const year = date.getFullYear().toString()
    const month = (+date.getMonth() + 1).toString().padStart(2, '0')
    const day = date.getDate().toString().padStart(2, '0')

    const hour = date.getHours().toString().padStart(2, '0')
    const min = date.getMinutes().toString().padStart(2, '0')

    return `${year}-${month}-${day} ${hour}:${min}`
}

const server = net.createServer((socket) => {
    socket.end(formatDate(new Date()) + '\n')
})

server.listen(port)