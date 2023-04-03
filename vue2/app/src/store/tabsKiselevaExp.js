import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

const domen = "http://localhost:3000";

export default {
    namespaced: true,
    state: {
        tabs: []
    },
    getters: {
        getTabs: state => {
            return state.tabs
        },
    },
    mutations: {
        loadTabs: (state, tabs) => {
          state.tabs = tabs
        },
    },
    actions: {
        loadTabs: ({ commit }) => {
            axios.get(domen + "/json").then((response) => {
            commit("loadTabs", response.data);
            });
        },
    },
}