import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced:true,
  state: {
    switches: [
      {
        name: "switch1",
        value: false,
        disabled: false
      },
      {
        name: "switch2",
        value: true,
        disabled: true
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
    deleteSwitch: (state, payload) => {
      state.switches = state.switches.filter(sw => sw.name !== payload)
    },
    changeSwitch: (state, payload) => {
      const switchIndex = state.switches.findIndex(sw => sw.name === payload);
      state.switches = state.switches.map((sw, i) => {
        if (i === switchIndex) {
          return {
            ...sw,
            value: !sw.value
          }
        } else {
          return sw;
        }
      })
    },
  },
  actions: {
    addSwitch: ({ commit }, payload) => {
      commit('addSwitch', payload)
    },
    deleteSwitch: ({ commit }, payload) => {
      commit('deleteSwitch', payload)
    },
    changeSwitch: ({ commit }, payload) => {
      commit('changeSwitch', payload)
    }
  },
};