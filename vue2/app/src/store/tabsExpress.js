import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const domen = "http://localhost:3000";

export default {
  namespaced: true,
  state: {
    tabs: []
  },
  getters: {
    getTabs: state => state.tabs,
    getTabsCount: state => state.tabs.length
  },
  mutations: {
    loadTabs: (state, payload) => {
      state.tabs = payload
    },
  },
  actions: {
    loadTabs: ({ commit }) => {
      axios.get(domen + "/json/tabs").then((response) => {
        commit("loadTabs", response.data);
      });
    },
  },
};