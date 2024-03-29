import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        tabs: [
            {
                content: [
                    ["Москва", "Москва – столица России, многонациональный город на Москве-реке в западной части страны."], 
                    ["Санкт-Петербург", "Санкт-Петербург – русский портовый город на побережье Балтийского моря, который в течение двух веков служил столицей Российской империи.",], 
                    ["Екатеринбург", "Екатеринбург – город в России, расположенный к востоку от Уральских гор."], 
                    ["Калининград", "Калининград – город в России, расположенный между Польшей и Литвой на побережье Балтийского моря."],
                    ["Воронеж", "Воронеж — город на юге Центральной России, административный центр Воронежской области. Расположен на берегах реки Воронеж, в 12 километрах от её впадения в Дон."],
                    ["Севастополь", "Севастополь — город на юго-западе Крымского полуострова, на побережье Чёрного моря."],
                ],
            },
            {
                content: [
                    ["Вкладка1", "Информация 1."], 
                    ["Вкладка2", "Информация 2.",], 
                    ["Вкладка3", "Информация 3."], 
                ],
            },
            {
                content: [],
            }
        ]
    },
    getters: {
        getTabs: state => {
            return state.tabs
        }
    }
}