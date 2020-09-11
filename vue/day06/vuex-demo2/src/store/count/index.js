export default {
  namespaced: true, //使用mapActions，mapState必须加
  state: { n: 0 },
  actions: {
    increment ({ commit }) {
      commit({
        type: 'INCREMENT'
      })
    },
    decrement ({ commit }) {
      commit({
        type: 'DECREMENT'
      })
    }
  },
  mutations: {
    INCREMENT (state) {
      state.n++
    },
    DECREMENT (state) {
      state.n--
    }
  }
}
