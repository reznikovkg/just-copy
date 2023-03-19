import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
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
    getBerries: (state) => state.berries
  },
  mutations: {
    addBerry: (state, payload) => {
      state.berries.push(payload)
    }
  },
  actions: {
    addBerry: ({ commit }, payload) => {
      commit('addBerry', payload)
    }
  },
  modules: {

  }
}
