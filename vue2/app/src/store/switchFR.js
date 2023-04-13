export default {
  namespaced: true,
  state: {
    switches: [],
  },
  getters: {
    getSwitches: state => state.switches,
    getState: state => switchId => state.switches[switchId].value,
    getLength: state => state.switches.length,
  },
  mutations: {
    addSwitch: (state, payload) => {
      state.switches = [
        ...state.switches,
        {
          id: state.switches.length,
          value: payload,
        },
      ];
    },
    changeState: (state, payload) => {
      state.switches[payload].value = !state.switches[payload].value;
    },
  },
  actions: {
    addNewSwitch: ({ commit }, payload) => {
      commit("addSwitch", payload);
    },
    changeState: ({ commit }, payload) => {
      commit("changeState", payload);
    },
  },
};
