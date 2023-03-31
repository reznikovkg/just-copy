import Vue from 'vue'
import Vuex from 'vuex'
import {API_BASE} from "@/constants";
import axios from "axios";

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        modalUsers: [],
        selectedModalUser: {}
    },
    getters: {
        getModalUsers: (state) => state.modalUsers,
        getSelectedModalUser: (state) => state.selectedModalUser
    },
    actions: {
        fetchAllModalUsers: async ({ commit }) => {
            const modalUsers = await axios.get(`${API_BASE}/users`);
            commit('setModalUsers', modalUsers.data)
        },
        fetchModalUser: async ({commit}, payload) => {
            const modalUser = await axios.get(`${API_BASE}/user?id=${payload}`);
            commit('setModalUser', modalUser.data)
        },
        addModalUser: async ({commit}, payload) => {
            const modalUsers = await axios.post(`${API_BASE}/addUser`, payload);
            commit('setModalUsers', modalUsers.data)
        },
        deleteModalUser: async ({commit}, payload) => {
            const modalUsers = await axios.delete(`${API_BASE}/removeUser?id=${payload}`);
            commit('setModalUsers', modalUsers.data)
        }
    },
    mutations: {
        setModalUsers: (state, payload) => {
            state.modalUsers = payload
        },
        setModalUser: (state, payload) => {
            state.selectedModalUser = payload
        }
    }
}
