import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    // COUNT_ADD (state, action) {
    // 把action参数里面的payload解构出来
    COUNT_ADD (state, { payload }) {
      // action接受actions里面方法携带的参数
      // action==={type: "COUNT_ADD", payload: "7"}
      // console.log('action', action)
      // state.count++
      state.count += Number(payload) // input里面的是字符串
    },
    COUNT_JIAN (state) {
      state.count--
    }
  },
  actions: {
    increment ({ commit }, payload) {
      // payload接受组件传递过来的参数
      // commit是用于发送action给mutations
      console.log('执行了', payload)
      commit({
        type: 'COUNT_ADD', // 动作的类型，这个词一般都是大写
        payload
      })
    },
    decrement ({ commit }) {
      console.log('执行了')
      commit({
        type: 'COUNT_JIAN'
      })
    }
  },
  modules: {}
})
