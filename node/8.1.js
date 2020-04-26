const http = require('http')
const { Writable } = require('stream')
const url = process.argv[2]

http.get(url, response => {
    response.pipe(new bl((err, res) => {
        if(err) return console.log(err)
        console.log(res.length)
        console.log(res)
    }))
})

class bl extends Writable{
    constructor(fn){
        super()
        this.callback = fn
        this.buffer = []
    }

    _write(chunk, encoding, callback){
        this.buffer.push(chunk)
        callback()
    }

    end(){
        this.callback(null, Buffer.concat(this.buffer).toString())
    }

    destroy(error){
        this.callback(err)
    }
}