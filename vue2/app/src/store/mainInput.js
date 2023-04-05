export default {
  namespaced: true,
  state: {
    maxValue: 10,
    minValue: -10,
    value: 0,
    step: 0.1,
  },
  getters: {
    getMax: (state) => state.maxValue,
    getMin: (state) => state.minValue,
    getValue: (state) => state.value,
    getStep: (state) => state.step,
  },
  mutations: {
    setMax: (state, payload) =>{ 
      state.maxValue = payload
  },
    setMin: (state, payload) => {
      state.minValue = payload
    },
    setValue: (state, payload) => {
      state.value = payload
    },
  },
  actions: {
    setMaxValue: ({ commit }, payload) => {
      commit("setMax", payload);
    },
    setMinValue: ({ commit }, payload) => {
      commit("setMin", payload);
    },
    setValue: ({ commit }, payload) => {
      commit("setValue", payload);
    },
  },
};
