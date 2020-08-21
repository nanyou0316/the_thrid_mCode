const express = require('express');
const router = express.Router();
//引入数据库模块
const db = require('../db')
router
    .route('/shop')
    .post(async (req, res, next) => {
        const { status, msg } = await db.shop.add(req.body)
        res.json({
            status,
            msg
        })
    })
    .delete((req, res, next) => { res.json({ status: 1, msg: '请求成功' }) })
    .put((req, res, next) => { res.json({ status: 1, msg: '请求成功' }) })
    .get(async (req, res, next) => {
        const { status, msg, data } = await db.shop.query();
        res.json({ status, msg, data })
    })


module.exports = router