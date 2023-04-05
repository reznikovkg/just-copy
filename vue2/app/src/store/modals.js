import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const BASE_URL = "http://localhost:3000";

export default {
  namespaced: true,
  state: {
    modals: [],
  },
  getters: {
    getModals: ({ modals }) => modals,
  },
  mutations: {
    addModal: (state, payload) => {
      state.modals.push(payload);
    },
    removeModal: (state) => {
      state.modals.splice(state.modals.length - 1, 1);
    },
    setModals: (state, payload) => {
      state.modals = payload;
    },
  },
  actions: {
    fetchAllModalsAction: async (context) => {
      const res = await axios.get(`${BASE_URL}/modals`);
      context.commit("setModals", res.data);
    },
    addModalAction: async (context, payload) => {
      const res = await axios.post(`${BASE_URL}/modals`, payload);
      context.commit("addModal", res.data);
    },
    removeModalAction: async (context) => {
      const res = await axios.delete(`${BASE_URL}/modals`);
      if (res.status === 200) {
        context.commit("removeModal");
      }
    },
  },
};
