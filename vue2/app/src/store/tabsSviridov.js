import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        tabs: [
            [
                {name: 'Профиль', content: 'Информация о профиле!'},
                {name: 'Избранное', content: 'Информация об избранном!'},
                {name: 'Настройки', content: 'Информация о настройках!'}
            ],
            [
                {name: 'Москва', content: 'Москва - столица России!'},
                {name: 'Казань', content: 'Казань - столица Татарстана!'},
                {name: 'Воронеж', content: 'Воронеж - столица Черноземья!'}
            ],
        ],
        activeDescriptions: [
           { content: 'Информация о профиле!'},
           { content: 'Москва - столица России!'}
        ]
    },
    getters: {
        getTabs: state => state.tabs,
        getActiveDescriptions: state => state.activeDescriptions
    },
    mutations: {
        setActiveDescription: (state, {index, content}) => {
            state.activeDescriptions[index].content = content
        },
    },
    actions: {
        setActiveDescription: ({ commit }, payload) => {
            commit('setActiveDescription', payload)
        },
    },
}
