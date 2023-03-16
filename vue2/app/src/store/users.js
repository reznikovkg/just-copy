import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    getCount: (state) => state.count
  },
  mutations: {
    setCount: (state, payload) => {
      state.count = payload
    },
    addCount: (state, payload) => {
      state.count += payload
    }
  },
  actions: {
    // setCount: (store, payload) => {
    //   state.count += payload
    // },
    addCount: ({ commit }, payload) => {
      commit('addCount', payload)
    }
  },
  modules: {

  }
}
