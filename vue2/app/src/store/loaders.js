import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        loaders: {}
    },
    getters: {
        getLoaders: ({loaders}) => loaders,
    },
    mutations: {
        updateLoader: (state, {loaderId, percent = 0}) => {
            state.loaders[loaderId] = percent;
        },
        removeLoader: (state, {loaderId}) => {
            delete state.loaders[loaderId]
        }
    },
    actions: {
        addLoaderAction(context) {
            const loaderId = '' + Date.now() + Math.floor(Math.random() * 1000000);
            context.commit('updateLoader', {loaderId});
            return loaderId;
        },
        updateLoaderAction(context, payload) {
            context.commit('updateLoader', payload);
        },
        removeLoaderAction (context, payload) {
            context.commit('removeLoader', payload);
        },
    }
}
