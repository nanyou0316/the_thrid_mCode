const path = require('path')
const fs = require('fs')

//! 业务：在code目录下生成一个log目录，里面生成10个日志文件，文件中内容任意
// fs.mkdir(path.join(__dirname, './log'), err => {
//     if (err) throw err
//     for (let index = 1; index < 11; index++) {
//         fs.writeFileSync(path.join(__dirname, `./log/demo${index}.txt`), index, err => {
//             if (err) throw err
//         })

//     }
// })
// fs.readdir(path.join(__dirname, './log'), (err, files) => {
//     for (let index = 0; index < files.length; index++) {
//         console.log(files[index]);
//     }
// })
// for (let index = 1; index < 11; index++) {
//     fs.unlink(path.join(__dirname, `./log/demo${index}.txt`), err => {
//         if (err) throw err
//     })
// }
fs.rmdir(path.join(__dirname, './log'), err => {
    if (err) throw err
})