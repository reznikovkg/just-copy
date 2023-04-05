import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    accordion: [
      {
        title: "First Title",
        content: "First content",
        open: false,
      },
      {
        title: "Second Title",
        content: "Second Content",
        open: false,
      },
      {
        title: "Third Title",
        content: "Third  Content",
        open: false,
      },
    ],
  },
  getters: {
    getAccordion: (state) => {
      return state.accordion;
    },
  },
  mutations: {
    changeOpen: (state, payload) => {
      console.log(payload);
      state.accordion = state.accordion.map((accordion__item, i) => {
        if (i === payload) {
          accordion__item.open = !accordion__item.open;
        }
        return accordion__item;
      });
    },
  },
  actions: {
    changeOpen: ({ commit }, payload) => {
      commit("changeOpen", payload);
    },
  },
};
