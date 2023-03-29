import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        Tabs: [
            { title: 'Another Tab 1', content: 'Another Tab 1 content' },
            { title: 'Another Tab 2', content: 'Another Tab 2 content' },
            { title: 'Another Tab 3', content: 'Another Tab 3 content' },
        ],
        activeTab: 0
    },
  
    getters: {
        getTabs: state => state.Tabs,
        getActiveTab: state => state.activeTab
    },
    mutations: {
        addTab: (state, payload) => {
            state.Tabs.push(payload)
        },
        setActiveTab: (state, payload) => {
            state.activeTab = payload
        },
    },
    actions: {
        addTab: ({ commit }, payload) => {
            commit('addTab', payload)
        },
        setActiveTab: ({ commit }, payload) => {
            commit('setActiveTab', payload)
        }
    },
}