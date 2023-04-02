import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        globalLoaderActive: false
    },
    getters: {
        isGlobalLoaderActive: ({globalLoaderActive}) => {
            return globalLoaderActive
        }
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
            context.commit('updateLoader');
        },
        deactivateGlobalLoaderAction(context) {
            context.commit('updateLoader');
        },
    }
}
