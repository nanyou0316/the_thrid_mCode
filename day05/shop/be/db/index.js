//1. 引入需要的第三方库
const mongoose = require('mongoose')
const { query } = require('express')

//2. 连接数据库    连接2005数据库
mongoose.connect('mongodb://localhost:27017/2005', {
    useNewUrlParser: true
}, error => {
    if (error) throw error
    console.log('数据库连接成功')
})

//3. 创建骨架 ---> 实质就是在做数据库的字段定义
const shopSchema = new mongoose.Schema({
    shopId: String,
    shopName: String,
    shopPic: String
})

//4. 创建模型
// mongoose.model(集合名称【复数】，骨架)   连接shops集合
const shopModel = mongoose.model('shops', shopSchema)

module.exports = {
    shop: {
        add(data) {
            return new Promise(async (resolve, reject) => {
                const docs = await this.query();
                const f = docs.data.some(item => item.shopId == data.shopId);
                if (f) {
                    //找到了
                    resolve({
                        status: 2,
                        msg: "商品已存在，请勿重复添加"
                    })
                } else {
                    //没有找到
                    const shopEnity = new shopModel(data)
                    shopEnity.save()
                    resolve({
                        status: 1,
                        msg: '添加成功'
                    })
                }
            })
        },
        del() { },
        update() { },
        query() {
            return new Promise((resolve, reject) => {
                shopModel.find({}, (err, docs) => {
                    if (err) {
                        reject({
                            status: 2,
                            msg: '数据查询失败'
                        })
                    } else {
                        resolve({
                            status: 1,
                            msg: "数据查询成功",
                            data: docs
                        })
                    }
                })
            })
        }
    }
}