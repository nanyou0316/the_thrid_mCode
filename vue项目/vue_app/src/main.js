import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './utils/rem.js'// 引入rem.js文件
import './utils/vantCompImport.js' // 引入vantCompImport.js文件
import myPlugin from './plugins'// 引入自定义插件
import md5 from 'md5'// 引入md5进行密码加密
Vue.prototype.$md5 = md5// 挂载到原型上，其他地方都可以使用
Vue.use(myPlugin)

Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
