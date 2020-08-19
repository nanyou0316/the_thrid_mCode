const fs = require('fs')
const path = require('path')
//生成目录
// fs.mkdir(path,options?,errorCallBack)
// fs.mkdir(path.join(__dirname, './log'), err => {
//     if (err) throw err
// })

//删除目录
// fs.rmdir(path, errorCallBack)
//目录修改
// fs.rename(path.join(__dirname, './log'), path.join(__dirname, './data'), err => {
//     if (err) throw err
// })

//目录查询
fs.readdir(path.join(__dirname, './data'), (err, files) => {
    if (err) { throw err }
    else {
        console.log(files);
    }
})