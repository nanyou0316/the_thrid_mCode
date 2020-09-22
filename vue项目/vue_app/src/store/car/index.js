// import { cateReq } from 'Api'
import { cateReq, listReq, detailReq, addCarReq, getCarReq, delCarReq } from '../../api'
export default {
  namespaced: true,
  state: {
    cates: [], // 分类页的数据
    // 分类做完了，下一步做列表的数据和请求
    lists: [], // 列表页数据
    details: '', // 详情页的数据
    addCarResult: '', // 添加购物车的结果
    cars: []// 购物车里面的数据(删除购物车的商品也是用这个数据)
  },
  actions: {
    // 分类的请求
    async getCates ({ commit }) {
      commit({
        type: 'GET_CATES',
        payload: await cateReq() // cateReq()调用分类请求，得到数据
      })
    },
    // 列表的请求，payload是四个按钮传递过来的参数
    async getLists ({ commit }, payload) {
      commit({
        type: 'GET_LISTS',
        payload: await listReq(payload)
      })
    },
    // 详情页的请求
    async getDetails ({ commit }, payload) {
      commit({
        type: 'GET_DETAILS',
        payload: await detailReq(payload)
      })
    },
    // 添加购物车
    async getAddCarResult ({ commit }, payload) {
      commit({
        type: 'GET_ADD_CAR_RESULT',
        payload: await addCarReq(payload)
      })
    },
    // 购物车里的数据
    async getCars ({ commit }) {
      commit({
        type: 'GET_CARS',
        payload: await getCarReq()
      })
    },
    // 删除购物车里的某件商品,这个payload是参数删除商品的ID
    async delCars ({ commit }, payload) {
      commit({
        type: 'DEL_CARS',
        // 下面的传递了两个参数，一个是删除的结果，另一个是删除商品的ID
        payload: {result: await delCarReq(payload),payload}
      })
    },
    // delCars ({ commit }, payload) {
    //   cell(commit, 'DEL_CARS', delCarReq, payload)
    // }
    // 全选控制每件商品
    flageChange({ commit },payload) {
      console.log(payload);
      commit({
        type:'FLAGR_CHANGE',
        payload
      })
    }
  },
  mutations: {
    // 分类的操作
    GET_CATES (state, { payload }) {
      console.log(payload)
      state.cates = payload.data.data.map(item => {
        item.text = item.name
        // 所使用的组件规定了就要text字段，所以必须修改
        delete item.name
        return item
      })
    },
    // 列表的数据
    GET_LISTS (state, { payload }) {
      state.lists = payload.data.content
    },
    // 详情的数据
    GET_DETAILS (state, { payload }) {
      state.details = payload
    },
    // 添加购物车
    GET_ADD_CAR_RESULT (state, { payload }) {
      state.addCarResult = payload
    },
    // 购物车里的数据
    GET_CARS (state, { payload }) {
      // state.cars = payload.data
      // 给购物车里面的每条数据放一个开关，控制是否选中
      state.cars = payload.data.map(item => { 
        item.checked=true
        return item 
      })
      // state.cars = []
    },
    // 购物车里的数据
    DEL_CARS (state, { payload:{payload} }) {
      
      console.log(payload)
      console.log('旧cars',state.cars)//此操作的上一次数据
      console.log('新payload',payload)
      state.cars = state.cars.filter(item => item.shopId !== payload)
    },
    // 全选控制每件商品
    FLAGR_CHANGE(state, {payload}){
      console.log(payload);
      state.cars.map(item => item.checked=payload)
    }
  }
}
// async function cell (commit,type,cb,data) {
//   return commit({
//     type,
//     payload: await cb(data)
//   })
// }
