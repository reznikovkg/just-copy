import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

const domen = "http://localhost:3000";

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
    deleteNotification: ({ commit }, payload) => {
      commit("deleteNotification", payload);
    },
    loadNotification:({commit},payload)=>{
      axios.get(domen+"/json/"+payload).then((response) => {
        commit("addNotification",{
            content:response.data.content,
            title:response.data.title
        })
      });
      commit("addId");
    }
  },
};
