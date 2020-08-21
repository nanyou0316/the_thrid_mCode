const fs = require('fs')
const path = require('path')
// const container = fs.readFileSync(path.join(__dirname, './data/demo.txt'), { encoding: 'utf-8' }, err => {
//     if (err) throw err
// });
//读写文件是异步的，当分开写的时候就要用同步操作
// console.log(container);
// fs.writeFileSync(path.join(__dirname, './data/demo.txt'), '\n 你好，世界', {
//     flag: 'a+'
// }, err => {
//     if (err) throw err
// })
fs.writeFile(path.join(__dirname, './log.txt'), '\n 987654321', { encoding: 'utf8', flag: 'a' }, err => {
    if (err) throw err
})