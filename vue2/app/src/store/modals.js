import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        modals: []
    },
    getters: {
        getModals: ({modals}) => modals,
    },
    mutations: {
        addModal: (state, payload) => {
            state.modals.push(payload);
        },
        removeModal: (state, payload) => {
            state.modals.splice(payload, 1);
        },
    },
    actions: {
        addModalAction: (context, payload) => {
            context.commit('addModal', payload);
        },
        removeModalAction: (context, payload) => {
            context.commit('removeModal', payload);
        },
    }
}
