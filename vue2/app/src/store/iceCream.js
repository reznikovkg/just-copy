import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const domen = "http://localhost:3000";

export default {
  namespaced: true,
  state: {
    iceCreamSelects: [],
    selectedElements: [],
  },
  getters: {
    getIceCreamSelects: (state) => state.iceCreamSelects,
    getSelectedElements: (state) => state.selectedElements,
  },
  mutations: {
    setIceCreamSelects: (state, payload) => {
      state.iceCreamSelects = payload;
    },
    setSelectedElementByIndex: (state, payload) => {
      Vue.set(state.selectedElements, payload.index, payload.value);
    },
  },
  actions: {
    loadIceCreamSelects: ({ commit }) => {
      axios.get(domen + "/json").then((response) => {
        commit("setIceCreamSelects", response.data);
      });
    },
    setSelectedElementByIndex: ({ commit }, payload) => {
      commit("setSelectedElementByIndex", payload);
    },
  },
};
