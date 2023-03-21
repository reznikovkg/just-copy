import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    lastSelectedBerry:"",
    berries: [
        {
          name: "Голубика",
          value: "blueberry",
          color: "Синий"
        },
        {
          name: "Ежевика",
          value: "blackberry",
          color: "Чёрный"
        },
        {
          name: "Вишня",
          value: "cherry",
          color: "Красный"
        },
        {
          name: "Смородина",
          value: "currant",
          color: "Чёрный"
        },
        {
          name: "Клюква",
          value: "cranberry",
          color: "Красный"
        },
        {
          name: "Крыжовник",
          value: "gooseberry",
          color: "Зелёный"
        },
        {
          name: "Малина",
          value: "raspberry",
          color: "Красный"
        },
        {
          name: "Клубника",
          value: "strawberry",
          color: "Красный"
        },
      ]
  },
  getters: {
    getBerries: (state) => state.berries,
    getLastSelectedBerry: (state) => state.lastSelectedBerry
  },
  mutations: {
    addBerry: (state, payload) => {
      state.berries.push(payload)
    },
    setLastSelectedBerry: (state, payload) => {
      state.lastSelectedBerry = payload
    }
  },
  actions: {
    addBerry: ({ commit }, payload) => {
      commit('addBerry', payload)
    },
    setLastSelectedBerry: ({ commit }, payload) => {
      commit('setLastSelectedBerry', payload)
    }
  },
}
