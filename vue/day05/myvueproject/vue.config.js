//这个文件修改一定要从新运行 yarn serve 
//webpack 采用的是Common.js 所以用module.exports

// 1.服务器配置
// 2.路径别名
// 3.关闭eslint
const path=require('path')
module.exports = {
  // 1.服务器配置
  devServer: {
    open: true, //自动打来浏览器
    hot: true, //自动刷新   热更新【热加载】
    port: 9000, //定义端口

    //前端跨域--反向代理  http-proxy-middleware
    //cli内置了http-proxy-middleware
    //选择域名后面的第一个路径作为符号 /ajax
    // https://m.maoyan.com/ajax/movieOnInfoList
    proxy: {
      //标识符
      //1.有统一的标识符
      //   "/ajax": {
      //     target: "https://m.maoyan.com", //目标源
      //     changeOrigin:true //表示使用我们当前服务器域名，协议和端口来代替目标源的
      //   },
      //2.没有统一的标识符
      "/api": {
        target: "https://m.maoyan.com",
        changeOrigin: true,
        pathRewrite: {
          //路径重写
          "^/api": "",
        },
      },
    },
  },
  // 2.路径别名
  chainWebpack: (config) => {
    config.resolve.alias
      //用前面的别名代替后面的路径
      .set("assets", path.join(__dirname, "./src/assets"))
      .set("comp", path.join(__dirname, "./src/components"));
  },
  // 3.关闭eslint
  lintOnSave:false
};
