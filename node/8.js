const http = require('http')
const bl = require('bl')
const url = process.argv[2]
http.get(url, response => {
    // response.setEncoding('utf8')

    let buf = []
    response.on('data', data => {
        buf.push(data)
    })

    response.on('error', err => console.log(err))

    response.on('end', () => {
        const str = Buffer.concat(buf).toString()
        console.log(str.length)
        console.log(str)
    })

    // response.pipe(bl((err, data) => {
    //     console.log(data.toString())
    // }))
})