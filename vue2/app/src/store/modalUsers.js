import Vue from 'vue'
import Vuex from 'vuex'
import {API_BASE} from "@/constants";
import axios from "axios";

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        modalUsers: []
    },
    getters: {
        getModalUsers: (state) => state.modalUsers
    },
    actions: {
        // setCount: (store, payload) => {
        //   state.count += payload
        // },
        fetchAllModalUsers: async ({ commit }) => {
            const modalUsers = await axios.get(API_BASE);
            commit('setModalUsers', modalUsers.data)
        },
        fetchModalUser: async ({commit}, payload) => {
            const modalUsers = await axios.get(API_BASE);
        }

    },
    mutations: {
        setModalUsers: (state, payload) => {
            state.modalUsers = payload
        },
        addCount: (state, payload) => {
            state.count += payload
        }
    },
    modules: {

    }
}
