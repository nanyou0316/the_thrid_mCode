const fs = require('fs')
const path = require('path')
//读取
function fsRead(path) {
    return new Promise(
        function (resolve, reject) {
            fs.readFile(path, { flag: 'r', encoding: 'utf8' }, (err, data) => {
                if (err) {
                    // throw err
                    reject(err)
                } else {
                    // console.log('读取成功');
                    resolve(data)
                }
            })
        }
    )
};
//写入
function fsWrite(path, content) {
    return new Promise(
        function (resolve, reject) {
            fs.writeFile(path, content, { encoding: 'utf8', flag: 'a' }, err => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(err)
                    console.log('写入成功');
                }
            })
        }
    )
};
module.exports = { fsRead, fsWrite }