import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        modalUsers: [
            {
                id: "1",
                name: "Nikita",
                age: 21,
                task: "beautiful modal"
            },
            {
                id: "2",
                name: "Sasha",
                age: 21,
                task: "handsome modal"
            },
            {
                id: "3",
                name: "Ilya",
                age: 20,
                task: "huge modal"
            },
            {
                id: "4",
                name: "Pasha",
                age: 23,
                task: "obvious modal"
            }
        ],
        selectedModalUser: {}
    },
    getters: {
        getModalUsers: (state) => state.modalUsers,
        getSelectedModalUser: (state) => state.selectedModalUser
    },
    actions: {
        getModalUser: ({commit}, payload) => {
            commit('getModalUser', payload)
        },
        addModalUser: ({commit}, payload) => {
            commit('addModalUser', payload)
        },
        deleteModalUser: ({commit}, payload) => {
            commit('deleteModalUser', payload)
        }
    },
    mutations: {
        getModalUser: (state, payload) => {
            return state.modalUsers.find(u => u.id === payload)
        },
        addModalUser: (state, payload) => {
            const newId = state.modalUsers.length ? (+state.modalUsers[state.modalUsers.length - 1].id + 1 + "") : "1"
            state.modalUsers.push({id: newId,...payload})
        },
        deleteModalUser: (state, payload) => {
            state.modalUsers = state.modalUsers.filter(u => u.id !== payload)
        },
    }
}
