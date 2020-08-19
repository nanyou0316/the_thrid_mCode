const fs = require('fs')
const path = require('path')
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

// const r1 = fsRead('./data/demo.txt');
// r1.then(function (data) {
//     console.log(data);
// })
// async function readList() {
//     const f1 = await fsRead(path.join(__dirname, './data/demo.txt'));
//     const f2 = await fsRead(path.join(__dirname, './data/demo2.txt'));
//     const f3 = await fsRead(path.join(__dirname, './data/demo3.txt'));
//     console.log(f1, f2, f3);
// }

// readList()
