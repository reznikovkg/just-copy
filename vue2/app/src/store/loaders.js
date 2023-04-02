import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        globalLoaderActive: false
    },
    getters: {
        isGlobalLoaderActive: ({globalLoaderActive}) => globalLoaderActive
    },
    mutations: {
        activateGlobalLoader: (state) => {
            state.globalLoaderActive = true;
        },
        deactivateGlobalLoader: (state) => {
            state.globalLoaderActive = false;
        }
    },
    actions: {
        activateGlobalLoaderAction(context) {
            context.commit('activateGlobalLoader');
        },
        deactivateGlobalLoaderAction(context) {
            context.commit('deactivateGlobalLoader');
        },
    }
}
