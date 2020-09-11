import axios from 'axios'
export default {
  namespaced: true,// 命名空间必须加
  state: {
    username: '',
    phone: ''
  },
  actions: {
    getUserInfo ({ commit }) {
      axios
        .get('http://59.110.226.77:3000/api/user/getInfo', {
          params: {
            userID: '5e980ee6771cdf43999456b1',
            token:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJ1c2VybmFtZSI6Inl5YiIsInBhc3N3b3JkIjoieXliMTIzIiwiY3RpbWUiOjE1ODIyODk0MjU2NTQsImlhdCI6MTU4MjI4OTQyNX0.-2pV6kR39zsWyPoViM9vhZxxOGNs-uzKj5GFL6JYkWA'
          }
        })
        .then(res => {
          console.log('res', res)
          commit({
            type: 'GET_USER_INFO',
            payload: res.data.data
          })
        })
        .catch(error => {
          if (error) throw error
        })
    }
  },
  mutations: {
    GET_USER_INFO (state, action) {  // 必须用action接收参数 也可以把参数结构出来{payload}
      console.log(action)
      state.username = action.payload.username
      state.phone = action.payload.phone
    }
  }
}
