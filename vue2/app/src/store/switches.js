import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import { API_BASE } from "@/constants";

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    switches: []
  },
  getters: {
    getSwitches: (state) => state.switches,
  },
  actions: {
    fetchAllSwitches: async ({ commit }) => {
      const switches = await axios.get(`${API_BASE}/switches`);
      commit('setSwitches', switches.data)
    },
    addSwitch: async ({commit}, payload) => {
      const switches = await axios.post(`${API_BASE}/addSwitch`, payload);
      commit('setSwitches', switches.data)
    },
    deleteSwitch: async ({commit}, payload) => {
      const switches = await axios.delete(`${API_BASE}/removeSwitch?id=${payload}`);
      commit('setSwitches', switches.data)
    },
    changeSwitch: async ({commit}, payload) => {
      const switches = await axios.post(`${API_BASE}/changeSwitch`, payload);
      commit('setSwitches', switches.data)
    }
  },
  mutations: {
    setSwitches: (state, payload) => {
      state.switches = payload
    }
  }
};
