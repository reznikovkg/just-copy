import Vue from 'vue'
import Vuex from 'vuex'
import { switchesTypes } from "@/constants";

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    switchesVolgin: [
      {
        name: "switch1",
        type: switchesTypes.SWITCH,
        value: false,
        disabled: false
      },
      {
        name: "Blop",
        type: switchesTypes.CHECKBOX,
        value: true,
        disabled: false
      },
      {
        name: "switch2",
        type: switchesTypes.SWITCH,
        value: true,
        disabled: true
      },
      {
        name: "checkbox2",
        type: switchesTypes.CHECKBOX,
        value: false,
        disabled: false
      },
      {
        name: "switch3",
        type: switchesTypes.SWITCH,
        value: false,
        disabled: true
      },
    ]
  },
  getters: {
    getSwitchesVolgin: (state) => state.switchesVolgin,
  },
  mutations: {
    addSwitch: (state, payload) => {
      state.switchesVolgin.push({ ...payload, value: true, disabled: false })
    },
    deleteSwitch: (state, payload) => {
      state.switchesVolgin = state.switchesVolgin.filter(sw => sw.name !== payload)
    },
    changeSwitch: (state, payload) => {
      const switchIndex = state.switchesVolgin.findIndex(sw => sw.name === payload);
      state.switchesVolgin = state.switchesVolgin.map((sw, i) => {
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
