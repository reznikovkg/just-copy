import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const domen = 'http://localhost:3000'

export default {
  namespaced: true,
  state: {
    progress: []
  },
  getters: {
    getProgress: (state) => state.progress
  },
  mutations: {
    setProgress: (state, payload) => {
      state.progress = payload
    }
  },
  actions: {
    loadProgress: ({ commit }) => {
      axios.get(domen + '/json').then((response) => {
        commit('setProgress', response.data)
      })
    }
  }
}
