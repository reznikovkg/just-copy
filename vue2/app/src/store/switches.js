import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced:true,
  state: {
    lastSelectedSwitch:"",
    switches: [
      {
        name: "switch1",
        value: "false",
      },
      {
        name: "switch2",
        value: "true",
      },
    ]
  },

  getters: {
    getSwitches: (state) => state.switches,
  },

  mutations: {
    addSwitch: (state, payload) => {
      state.switches.push(payload)
    },
    setLastSelectedSwitch: (state, payload) => {
      state.lastSelectedSwitch = payload
    }
  },

  actions: {
    addSwitch: ({ commit }, payload) => {
      commit('addSwitch', payload)
    },
    setLastSelectedSwitch: ({ commit }, payload) => {
      commit('setLastSelectedSwitch', payload)
    }
  },
});