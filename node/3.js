const fs = require('fs')

const fileName = process.argv[2]

const buf = fs.readFileSync(fileName).toString()
console.log(buf.split('\n').length - 1)