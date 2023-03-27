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
    setSelectedElements: (state, payload) => {
      state.selectedElements = payload;
    },
  },
  actions: {
    loadIceCreamSelects: ({ commit }) => {
      axios.get(domen + "/json").then((response) => {
        commit("setIceCreamSelects", response.data);
      });
    },
    setSelectedElement: ({ commit }, payload) => {
      commit("setSelectedElements", payload);
    },
  },
};
