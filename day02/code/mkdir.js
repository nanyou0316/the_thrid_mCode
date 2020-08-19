const fs = require('fs')
const path = require('path')

const { fsRead, fsWrite } = require('./writeAndread.js')
fs.readdir(path.join(__dirname, './data'), function (err, files) {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
        files.forEach(async function (filename, i) {
            let content = await fsRead(path.join(__dirname, './data/' + filename));
            await fsWrite(path.join(__dirname, './all.txt'), content)
        })

    }
})