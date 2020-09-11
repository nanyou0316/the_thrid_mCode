const path = require('path')
// 引入等比适配插件
const px2rem = require('postcss-px2rem')
// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})
function pathHandler (pathUrl) {
  return path.join(__dirname, pathUrl)
}
module.exports = {
  // lintOnSave: true,关闭eslint
  devServer: {
    // 反向代理,api都一样用这种方法
    proxy: {
      '/api': {// 域名后面的第一个地址作为标识符
        target: 'http://59.110.226.77:3000',
        changeOrigin: true
      }
    }
  },
  // 配置自适应,使用等比适配插件
  css: {
    loaderOptions: {
      postcss: {
        plugins: [postcss]
      }
    }
  },
  // 路径别名配置
  chainWebpack: config => {
    config.resolve.alias
      .set('@', pathHandler('./src'))
      .set('Api', pathHandler('./src/api'))
      .set('Assets', pathHandler('./src/assets'))
      .set('Comp', pathHandler('./src/components'))
      .set('Filter', pathHandler('./src/filters'))
      .set('Pages', pathHandler('./src/pages'))
      .set('Router', pathHandler('./src/router'))
      .set('Plugin', pathHandler('./src/plugins'))
      .set('Store', pathHandler('./src/store'))
      .set('Utils', pathHandler('./src/utils'))
  }
}
