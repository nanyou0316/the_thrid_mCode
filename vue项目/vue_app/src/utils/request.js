import axios from 'axios'
// import { getCookie } from 'Utils/cookie'
import qs from 'qs'
import { Toast } from 'vant'

const ins = axios.create({
  // baseURL: ''
  timeout: 4000
})
//! 设置拦截器
ins.interceptors.request.use(
  function (config) {
    //! token携带
    // const token = getCookie('token')
    // config.headers.common['authToken'] = token
    // config.headers.common['token'] = token
    // config.headers.common['Cookie'] = token
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      loadingType: 'spinner'
    })
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
ins.interceptors.response.use(
  function (res) {
    //! 将得到的结果做一个数据处理，数目默认是在结果的data里面
    return res.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default function request (options) {
  const {
    url,
    method = 'get',
    headers = {
      'Content-Type': 'application/json'
    },
    data
  } = options
  switch (method.toUpperCase()) {
    case 'GET':
      return ins.get(url, { params: data })
      break
    case 'POST':
      switch (headers['Content-Type']) {
        case 'application/json':
          return ins.post(url, data, { headers })
          break
        case 'application/x-www-form-urlencoded':
          //! qs/new URLSearchParams
          // const p = new URLSearchParams()
          // for (let key in data) {
          //   p.append(key,data[key])
          // }
          return ins.post(url, qs.stringify(data), { headers })
          break
        case 'multipart/form-data': {
          const params = new FormData()
          for (const key in data) {
            params.append(key, data[key])
          }
          return ins.post(url, params, { headers })
          break
        }
        default:
          return ins.post(url, data)
          break
      }
      break
    default:
      return ins(options)
      break
  }
}
