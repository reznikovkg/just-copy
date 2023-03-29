import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        Tabs: [
            { title: 'Tab 1', content: 'Tab 1 content' },
            { title: 'Tab 2', content: 'Tab 2 content' },
            { title: 'Tab 3', content: '<h1>A photo of a cute cat<h1><img src="https://image.winudf.com/v2/image/Y29tLmh3d3cyMDE0LkNhdF9zY3JlZW5zaG90c18xX2RlODExYmRi/screen-1.jpg?fakeurl=1&type=.jpg" alt="photo of a cute cat" style="width: 100%"></img>' },
        ],
        activeTab: 1
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