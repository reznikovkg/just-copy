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
        lastId: state => state.modals.length,
        getModalContent: state => id => state.modals[id].content,
        getModalState: state => id => state.modals[id].isShown,
    },
    mutations: {
        addModalToStore: (state, payload) => {
            state.modals = [
                ...state.modals,
                {
                    id: state.modals.length,
                    content: payload,
                    isShown: true,
                }
            ]
        },
        changeState: (state, payload) => {
            state.modals[payload].isShown = !state.modals[payload].isShown;
        },
        removeModal: (state, payload) => {
            state.modals.splice(payload, 1);
        },
    },
    actions: {
        addModal: (context, payload) => {
            context.commit('addModalToStore', payload);
        },
        changeVisibility: (context, payload) => {
            context.commit('changeState', payload);
        },
        removeModalAction: (context, payload) => {
            context.commit('removeModal', payload);
        },
    }
}
