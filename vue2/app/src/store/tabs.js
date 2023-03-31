import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        tabs: [
            {
                tabs: [
                    { title: 'Tab 1', content: 'Tab 1 content' },
                    { title: 'Tab 2', content: 'Tab 2 content' },
                    { title: 'Tab 3', content: '<h1>A photo of a cute cat<h1><img src="https://image.winudf.com/v2/image/Y29tLmh3d3cyMDE0LkNhdF9zY3JlZW5zaG90c18xX2RlODExYmRi/screen-1.jpg?fakeurl=1&type=.jpg" alt="photo of a cute cat" style="width: 100%"></img>' },
                ],
                activeTab: 1,
            },
            {
                tabs: [
                    { title: 'Another Tab 1', content: 'Another Tab 1 content' },
                    { title: 'Another Tab 2', content: 'Another Tab 2 content' },
                    { title: 'Another Tab 3', content: 'Another Tab 3 content' },
                ],
                activeTab: 0,
            }
        ]
    },
    getters: {
        getTabs: state => {
            return state.tabs
        },
        getTabsCount: state => state.tabs.length
    },
    mutations: {
        addTab: (state, {index, tab}) => {
            state.tabs[index].tabs.push(tab)
        },
        setActiveTab: (state, {tabsIndex, tabIndex}) => {
            state.tabs[tabsIndex].activeTab = tabIndex
        },
    },
    actions: {
        addTab: ({ commit }, payload) => {
            commit('addTab', payload)
        },
        setActiveTab: ({ commit }, payload) => {
            commit('setActiveTab', payload)
        },
    },
}
