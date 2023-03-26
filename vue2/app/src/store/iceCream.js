import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const domen = "http://localhost:3000";

export default {
  namespaced: true,
  state: {
    containers: {},
    iceCream: {},
    syrups: {},
    currentContainer: "",
    currentIceCream: "",
    currentSyrup: "",
  },
  getters: {
    getContainers: (state) => state.containers,
    getIceCream: (state) => state.iceCream,
    getSyrups: (state) => state.syrups,
    getCurrentContainer: (state) => state.currentContainer,
    getCurrentIceCream: (state) => state.currentIceCream,
    getCurrentSyrup: (state) => state.currentSyrup,
  },
  mutations: {
    setContainers: (state, payload) => {
      state.containers = payload;
    },
    setIceCream: (state, payload) => {
      state.iceCream = payload;
    },
    setSyrups: (state, payload) => {
      state.syrups = payload;
    },
    setCurrentContainer: (state, payload) => {
      state.currentContainer = payload;
    },
    setCurrentIceCream: (state, payload) => {
      state.currentIceCream = payload;
    },
    setCurrentSyrup: (state, payload) => {
      state.currentSyrup = payload;
    },
  },
  actions: {
    loadContainers: ({ commit }) => {
      axios.get(domen + "/json/container").then((response) => {
        commit("setContainers", response.data);
      });
    },
    loadIceCream: ({ commit }) => {
      axios.get(domen + "/json/iceCream").then((response) => {
        commit("setIceCream", response.data);
      });
    },
    loadSyrups: ({ commit }) => {
      axios.get(domen + "/json/syrup").then((response) => {
        commit("setSyrups", response.data);
      });
    },
    setCurrentContainer: ({ commit }, payload) => {
      commit("setCurrentContainer", payload);
    },
    setCurrentIceCream: ({ commit }, payload) => {
      commit("setCurrentIceCream", payload);
    },
    setCurrentSyrup: ({ commit }, payload) => {
      commit("setCurrentSyrup", payload);
    },
  },
};
