import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    accordions: [
      {
        id: 0,
        items: [
          {
            header: 'Accordion 1 Item 1',
            content: '<img src="https://media.tenor.com/aMV0odd8Bw8AAAAC/frog-pepsi.gif" alt="frog pepsi"></img>',
            active: false,
          },
          {
            header: 'Accordion 1 Item 2',
            content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            active: false,
          },
          {
            header: 'Accordion 1 Item 3',
            content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            active: false,
          },
        ],
      },
      {
        id: 1,
        items: [
          {
            header: 'Accordion 2 Item 1',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            active: false,
          },
          {
            header: 'Accordion 2 Item 2',
            content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            active: false,
          },
          {
            header: 'Accordion 2 Item 3',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            active: false,
          },
        ],
      },
    ],
  },
  getters: {
    getAccordions: state => state.accordions
  },
  mutations: {
    toggleAccordionItem(state, { accordionId, index }) {
      const accordion = state.accordions.find(accordion => accordion.id === accordionId)
      accordion.items[index].active = !accordion.items[index].active
    },
  },
  actions: {
    toggleAccordionItem({ commit }, { accordionId, index }) {
      commit('toggleAccordionItem', { accordionId, index })
    },
  },
}