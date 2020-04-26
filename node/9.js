const http = require('http')
const bl = require('bl')
const urls = process.argv.slice(2)

let res = []
let count = 0;

const request = async (url, i) => {
    http.get(url, response => {
        response.pipe(bl((err, data) => {
            if(err) return console.log(err)
            res[i] = data.toString()
            count++;
            if(count == urls.length){
                res.forEach(r => console.log(r))
            }
        }))
    })
}

for(let i = 0; i < urls.length; i++){
    const url = urls[i]
    request(url, i)
}