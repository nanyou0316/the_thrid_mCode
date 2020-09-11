import Vue from 'vue'
import Vuex from 'vuex'
// 把count下面的index.js文件引入进来，只有index.js一个文件可以省略
import count from './count'
// 把pages->user->store.js引入进来
import user from '../pages/user/store.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    // 里面的东西太多，抽离出来放在一个文件里面
    count, user
  }
})
