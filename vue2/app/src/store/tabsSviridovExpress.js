import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
const domen = "http://localhost:3000";

export default {
    namespaced: true,
    state: {
        tabs: [],
        activeDescriptions: []
    },
    getters: {
        getTabs: state => state.tabs,
        getActiveDescriptions: state => state.activeDescriptions
    },
    mutations: {
        setActiveDescription: (state, {index, content}) => {
            state.activeDescriptions[index].content = content
        },
        loadTabs: (state, payload) => {
            state.tabs = payload
        },
        loadActiveDescriptions: (state, payload) => {
            state.activeDescriptions = payload
        },
    },
    actions: {
        setActiveDescription: ({ commit }, payload) => {
            commit('setActiveDescription', payload)
        },
        loadTabs: ({ commit }) => {
            axios.get(domen + "/json/tabs").then((response) => {
              commit("loadTabs", response.data);
            });
            axios.get(domen + "/json/activeDescriptions").then((response) => {
                commit("loadActiveDescriptions", response.data);
            });
        }
    },
};