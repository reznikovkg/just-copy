import Vue from 'vue'
import Vuex from 'vuex'
import users from './users'
Vue.use(Vuex)

export default new Vuex.Store({
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
    setCount: ({ commit }, payload) => {
      commit('setCount', payload)
    },
    addCount: ({ commit }, payload) => {
      commit('addCount', payload)
    }
  },
  modules: {
    users
  }
})