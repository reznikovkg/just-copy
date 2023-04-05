import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
    namespaced: true,
    state: {
        uniqueId: 0,
        notifications: [],
        timeout: 5000,
    },
    getters: {
        getNotifications: (state) => state.notifications,
        getId: (state) => state.uniqueId,
        getNotificationsCount: (state) => state.notifications.length,
        getInterval: (state) => state.interval,
    },
    mutations: {
        addNotification: (state, payload = {}) => {
            state.notifications = [
                ...state.notifications,
                {
                    id: state.uniqueId,
                    title: payload.title,
                    content: payload.content,
                    timeout: payload.timeout
                },
            ];
        },
        deleteNotification: (state, payload) => {
            state.notifications = state.notifications.filter((n) => n.id != payload);
        },
        increaseId: (state) => {
            state.uniqueId++;
        },
    },
    actions: {
        addNotification: ({ commit }, payload) => {
            commit("addNotification", payload);
            commit("increaseId");
        },
        deleteNotification: ({ commit }, payload) => {
            commit("deleteNotification", payload);
        },
    }
}
