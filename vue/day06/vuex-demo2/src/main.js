import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store, // 项目中所有组件都会得到一个$store属性
  render: h => h(App)
}).$mount('#app')
