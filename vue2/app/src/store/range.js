export default {
  namespaced: true,
  state: {
    maxValue: 10,
    minValue: -10,
    currentValue: 0,
    step: 0.1
  },
  getters: {
    getMax: (state) => state.maxValue,
    getMin: (state) => state.minValue,
    getCurrent: (state) => state.currentValue,
    getStep: (state) => state.step,
  },
  mutations: {
    setMax: (state, payload) => state.maxValue= payload,
    setMin: (state, payload) => state.minValue= payload,
    setCurrent: (state, payload) => state.currentValue = payload,
  },
  actions: {
    setMaxValue: ({ commit }, payload) => {
      commit('setMax', payload);
    },
    setMinValue: ({ commit }, payload) => {
      commit('setMin', payload);
    },
    setCurrentValue: ({ commit }, payload) => {
      commit('setCurrent', payload);
    },
  },
}
