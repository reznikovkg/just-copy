import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    notifications: [],
    idGenerator: 0
  },
  mutations: {
    addNotification: function (state, payload) {
      state.notifications.push({
        id: ++state.idGenerator,
        title: payload.title,
        content: payload.content,
        type: payload.type,
        size: payload.size ?? "normal",
      });
      console.log(this)
      const idToDelete = state.idGenerator;
      if (payload.delay) {
        setTimeout(() => {
          state.notifications = state.notifications.filter(notification => notification.id!== idToDelete);
        }, payload.delay);
      }
    },
    removeNotification: (state, payload) => {
      state.notifications = state.notifications.filter(notification => notification.id!== payload);
    },
    clearNotifications: (state) => {
      state.notifications = [];
    }
  },
  getters: {
    getNotifications: (state) => state.notifications,
    getId: (state) => state.idGenerator,
  },
  actions: {
    addNotification: ({ commit }, payload) => {
      commit("addNotification", payload);
    },
    removeNotification: ({ commit }, payload) => {
      commit("removeNotification", payload);
    },
    clearNotifications: ({ commit }) => {
      commit("clearNotifications");
    }
  }
};
