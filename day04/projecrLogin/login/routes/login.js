const router = require('koa-router')()
router.prefix('/api/user')

const { TimeoutError } = require('got')
const { json } = require('body-parser')

router.post('/login', async ctx => {
    await ctx.render('login', {
        data: JSON.stringify({
            name: 'zhangsan',
            age: 18,
            shenfen: '班长'
        })
    })
})
module.exports = router



const router = require('koa-router')();

router.prefix('/api/user');

router.post('/login', async ctx => {
    await ctx.render('login', {
        data: JSON.stringify({
            name: 'zhangsan',
            age: 18
        })
    })
})

module.exports = router






