const readFileAndFilter = require('./read-dir')

const fileDir = process.argv[2]
const filter = process.argv[3]
readFileAndFilter(fileDir, filter, (err, fileList) => {
    if(err) return console.log(err)
    fileList.forEach(f => console.log(f))
})