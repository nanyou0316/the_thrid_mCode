import { initMovieReq, moreMovieReq } from 'Api'
export default {
  namespaced: true,
  state: {
    movies: [],
    movieIds: []
  },
  actions: {
    async getInitMovies({ commit }) {
      commit({
        type: 'GET_INIT_MOVIES',
        payload: await initMovieReq()
      })
    },
    async getMoreMovies({ commit }, payload) {
      commit({
        type: 'GET_MORE_MOVIES',
        payload: await moreMovieReq(payload)
      })
    }
  },
  mutations: {
    GET_INIT_MOVIES(state, { payload }) {
      state.movies = payload.movieList
      state.movieIds = payload.movieIds
    },
    GET_MORE_MOVIES(state,{payload}) {
      console.log('payload',payload);
      state.movies.push(...payload.coming)
    }
  }
}
