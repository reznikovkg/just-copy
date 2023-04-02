import Vue from 'vue'
import Vuex from 'vuex'
import berries from './berries'
import users from './users'
import exp from './exp'
import switches from "./switches";
import notifications from './notifications'
import modalUsers from "./modalUsers";
import tabs from './tabs'
import modals from "./modals";

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
    users,
    berries,
    exp,
    switches,
    notifications,
    tabs,
    modalUsers,
    modals,
  }
})
