import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    uniqueId: 0,
    notifications: [],
    interval: 3000,
  },
  getters: {
    getNotifications: (state) => state.notifications,
    getId: (state) => state.uniqueId,
    getNotificationsCount: (state) => state.notifications.length,
    getInterval: (state) => state.interval,
  },
  mutations: {
    addNotification: (state, payload) => {
      state.notifications = [
        ...state.notifications,
        {
          id: state.uniqueId,
          content: payload,
        },
      ];
    },
    addId: (state) => {
      state.uniqueId += 1;
    },
    deleteNotification: (state, payload) => {
      state.notifications = state.notifications.filter((x) => x.id != payload);
    },
  },
  actions: {
    addNotification: ({ commit }, payload) => {
      commit("addNotification", payload);
      commit("addId");
    },
    deleteNotification: ({ commit }, payload) => {
      commit("deleteNotification", payload);
    },
  },
};
