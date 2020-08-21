const koa = require('koa');
const { HttpError } = require('koa');

const HOST = 'localhost';
const PORT = 4545;
const app = new koa();

app.use(async (ctx, next) => {
    //ctx 上下文对象 包含请求体和响应体
    ctx.body = {
        name: '饭哥',
        age: 18
    }
})
app.listen(PORT, HOST, () => {

    console.log(`The server is running at: http://${HOST}:${PORT}`);
})