import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

const domen = "http://localhost:3000"

export default {
  namespaced: true,
  state: {
    accordions: [],
  },
  getters: {
    getAccordions: state => state.accordions
  },
  mutations: {
    toggleAccordionItem(state, { accordionId, index }) {
      const accordion = state.accordions.find(accordion => accordion.id === accordionId)
      accordion.items[index].active = !accordion.items[index].active
    },
    loadAccordions: (state, payload) => {
        state.accordions = payload
    },
  },
  actions: {
    toggleAccordionItem({ commit }, { accordionId, index }) {
      commit('toggleAccordionItem', { accordionId, index })
    },
    loadAccordions: ({ commit }) => {
        axios.get(domen + "/json").then((response) => {
          commit("loadAccordions", response.data);
        });
      },
  },
}