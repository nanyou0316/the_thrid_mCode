import { loginReq } from 'Api'
export default {
  namespaced: true,
  state: {
    loginData: {}
  },
  actions: {
    login ({ commit }, payload) {
      // 先做数据请求得到请求的结果
      // commit将结果发给mutation
      loginReq(payload)
        .then(res => {
          commit({
            type: 'LOGIN',
            payload: res
          })
        })
    }
  },
  mutations: {
    // LOGIN (state, action) {结构action
    LOGIN (state, { payload }) {
      state.loginData = payload
    }
  }
}
