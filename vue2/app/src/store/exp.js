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
    removeProduct: (state, payload) => {
      const index = state.products.findIndex(item => (item.id === payload.id))

      if (state.products[index]) {
        delete state.products.splice(index, 1);
      }
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
      return axios.get(domen + '/json').then((response) => {
        commit('setProducts', response.data)
      })
    },
    removeProductAction: ({ commit }, payload) => {
      return axios.delete(domen + '/json/' + payload.id).then(() => {
        commit('removeProduct', payload)
      })
    }
  }
}
