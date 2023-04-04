import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    progressValue: 100
  },
  getters: {
    getProgressValue: (state) => state.progressValue
  },
  mutations: {
    setProgressValue: (state, payload) => {
      state.progressValue = payload
    }
  },
  actions: {
    setProgressValue: ({ commit }, payload) => {
      commit('setProgressValue', payload)
    }
  },
}
