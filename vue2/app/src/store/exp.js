import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const domen = 'http://localhost:3000'

export default {
  namespaced: true,
  state: {
    products: []
  },
  getters: {
    getProducts: (state) => state.products
  },
  mutations: {
    setProducts: (state, payload) => {
      state.products = payload
    },
    // eslint-disable-next-line
    setProductById: (state, payload) => {
      // TODO 
      // const prodId = state.products.findIndex()

      // state.products[prodId] = {}
      // state.products = [...state.products]
    }
  },
  actions: {
    loadProducts: ({ commit }) => {
      axios.get(domen + '/json').then((response) => {
        commit('setProducts', response.data)
      })
    }
  }
}
