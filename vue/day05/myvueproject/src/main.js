import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
//按需导入vant组件  其他地方就可以使用
import {Button,Calendar,Cell} from 'vant'
Vue.use(Button)//按钮
Vue.use(Calendar)//日历
Vue.use(Cell)//日历

Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
