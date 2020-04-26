const fs = require('fs')
const fileName = process.argv[2]

fs.readFile(fileName, (err, data) => {
    if(err) return console.log(err)

    console.log(data.toString().split('\n').length - 1)
})