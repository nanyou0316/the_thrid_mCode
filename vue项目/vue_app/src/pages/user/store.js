import { loginReq,picReq,registerReq } from 'Api'
import md5 from 'md5'
import router from 'Router'
import { Toast } from 'vant'
import { setCookie } from 'Utils/cookie'
console.log('router', router)
export default {
  namespaced: true,
  state: {
    loginData: {},
    pic:'',
    regRes: {}
  },
  actions: {
    // login ({ commit }, payload) {
    // 先做数据请求得到请求的结果
    // commit将结果发给mutation
    // loginReq(payload)
    //   .then(res => {
    //     commit({
    //       type: 'LOGIN',
    //       payload: res
    //     })
    //   })
    // 用async改写请求
    async login ({ commit }, payload) {
      commit({
        type: 'LOGIN',
        payload: await loginReq (payload)
      })
    },
    // 头像上传
    async getPic ({ commit },payload) {
      commit({
        type: 'GET_PIC',
        payload: await picReq(payload)
      })
    },
    // 注册
    async register ({ commit },{username,password,phone}) {
      setCookie('username', username, 7)
      commit({
        type: 'REGISTER',
        payload: await registerReq({username,password:md5(password),phone})
      })
    },
    // 登录
    async login ({commit},{username,password}) {
      commit({
        type: 'LOGIN',
        payload: await loginReq({username,password:md5(password)})
      })
    }
  },
  mutations: {
    // LOGIN (state, action) {结构action}
    // 登录
    LOGIN (state, { payload }) {
      state.loginData = payload
      if(payload.status===1){
        setCookie('userId',payload.userId,7)
        // setCookie('username',payload.username,7)
        setCookie('token',payload.token,7)
        router.push('/user')
      }
      if(payload.status===0){
        Toast.fail(payload.msg)
      }
      console.log(payload);
    },
    // 头像上传
    GET_PIC (state,{payload}) {
      console.log(payload)
      state.pic = 'https://elm.cangdu.org/img/' + payload.image_path
      setCookie('avatar',state.pic,7)

    },
    // 注册
    REGISTER(state,{payload}) {
      console.log(payload)
      if(payload.status===0){
        Toast.fail(payload.msg)
      }
      if(payload.status===1){
        router.push('/login')
      }
      state.regRes = payload
    }
  }
}
