import Vue from 'vue'
import Vuex from 'vuex'
import { switchesTypes } from "@/constants";

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    switchList: [
      {
        name: "switch1",
        type: switchesTypes.SWITCH,
        value: false
      },
      {
        name: "checkbox1",
        type: switchesTypes.CHECKBOX,
        value: false
      },
      {
        name: "switch2",
        type: switchesTypes.SWITCH,
        value: true
      },
      {
        name: "checkbox2",
        type: switchesTypes.CHECKBOX,
        value: false
      },
    ]
  },
  getters: {
    getSwitchList: (state) => state.switchList,
  },
  mutations: {
    addToSwitchList: (state, payload) => {
      state.switchList.push({ ...payload, value: true})
    },
    deleteFromSwitchList: (state, payload) => {
      state.switchList = state.switchList.filter(sw => sw.name !== payload)
    },
    changeSwitch: (state, payload) => {
      const switchIndex = state.switchList.findIndex(sw => sw.name === payload);
      state.switchList = state.switchList.map((sw, i) => {
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
    addToSwitchList: ({ commit }, payload) => {
      commit('addToSwitchList', payload)
    },
    deleteFromSwitchList: ({ commit }, payload) => {
      commit('deleteFromSwitchList', payload)
    },
    changeSwitch: ({ commit }, payload) => {
      commit('changeSwitch', payload)
    }
  },
};
