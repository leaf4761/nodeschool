const fs = require('fs')
const path = require('path')

const readDirAndFilter = (dir, filter, cb) => {
    fs.readdir(dir, (err, list) => {
        if(err) return cb(err)
    
        const filterFile = list.filter((file) => {
            if(fs.statSync(dir + '/' + file).isFile){
                return path.extname(file).slice(1) === filter
            }else{
                return false
            }
        })
        cb(null, filterFile)
    })
}

module.exports = readDirAndFilter