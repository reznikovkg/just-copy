import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const domen = "http://localhost:3000";

export default {
  namespaced: true,
  state: {
    database: [],
    isLoaded: false,
  },
  getters: {
    getItems: (state) => state.database,
    getState: (state) => state.isLoaded,
  },
  mutations: {
    setItems: (state, payload) => {
        state.database = payload;
      },
    addItem: (state, payload) => {
        state.database.push(payload);
      },
      setLoaderState: (state, payload) => {
        state.isLoaded = payload
      }
  },
  actions: {
    async loadItems({ commit }) {
        commit("setLoaderState", false);
        let sleep = 1;
        commit("setItems", [])
        await axios.get(domen + "/json").then(async (response) => {
            for (let item of response.data) {
                // Симуляция нагруженной базы данных
                setTimeout(() => {commit("addItem", item);}, sleep * 1000);
                await new Promise(r => setTimeout(r, 1000));
            }
        });
        commit("setLoaderState", true)
    },
    setSelectedElementByIndex: ({ commit }, payload) => {
      commit("setSelectedElementByIndex", payload);
    },
  },
};