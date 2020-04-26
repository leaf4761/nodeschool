const fs = require('fs')
const path = require('path')

const dir = process.argv[2]
const filter = process.argv[3]

fs.readdir(dir, (err, list) => {
    if(err) return console.log(err)

    list.filter((file) => {
        if(fs.statSync(dir + '/' + file).isFile){
            return path.extname(file).slice(1) === filter
        }else{
            return false
        }
    }).forEach(f => console.log(f))
})