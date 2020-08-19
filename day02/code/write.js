const fs = require('fs');
const path = require('path');

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
}

// async function writeFile() {
//     await writeFs(path.join(__dirname, './data/f1.txt'), '我是文件1里面的内容\n');
//     await writeFs(path.join(__dirname, './data/f1.txt'), '我是文件2里面的内容\n');
//     await writeFs(path.join(__dirname, './data/f1.txt'), '我是文件3里面的内容\n');

// };
// writeFile()