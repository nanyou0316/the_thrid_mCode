import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './utils/rem.js' // 引入rem.js文件
import './utils/vantCompImport.js' // 引入vantCompImport.js文件
import myPlugin from './plugins' // 引入自定义插件
import md5 from 'md5' // 引入md5进行密码加密
import router from 'Router' // 引入路由文件
import '@/mixin'
Vue.prototype.$md5 = md5 // 挂载到原型上，其他地方都可以使用
Vue.use(myPlugin)
// 如果没有登入就进不了其他页面，跳登入页面


Vue.config.productionTip = false
new Vue({
  store, // 全局组件得到一个$store
  router, // 全局组件得到 $route $router 两个属性
  render: h => h(App)
}).$mount('#app')
