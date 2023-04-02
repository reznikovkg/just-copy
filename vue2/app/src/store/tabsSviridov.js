import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        tabs:[
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
    },
    getters: {
        getTabs: state => {
            return state.tabs
        },
    },
}
