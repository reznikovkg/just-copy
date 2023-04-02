import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        loaders: {
            default: {
                loaderImage: "https://cdn-icons-png.flaticon.com/512/6356/6356630.png",
                loaderText: "Loading...",
                loaderDuration: "3"
            },
            red: {
                loaderImage: "https://cdn-icons-png.flaticon.com/512/25/25220.png",
                loaderText: "Loading",
                loaderDuration: "2"
            },
            long: {
                loaderImage: "https://cdn-icons-png.flaticon.com/512/7794/7794282.png",
                loaderText: "Loading...",
                loaderDuration: "10"
            },
            wide: {
                loaderImage: "https://cdn-icons-png.flaticon.com/512/6356/6356470.png",
                loaderText: "Loading...",
                loaderDuration: "2"
            },
            blank: {
                loaderImage: "https://cdn-icons-png.flaticon.com/512/6356/6356630.png",
                loaderText: "Loading...",
                loaderDuration: "3"
            },
            rus: {
                loaderImage: "https://cdn-icons-png.flaticon.com/512/6356/6356630.png",
                loaderText: "Загрузка...",
                loaderDuration: "3"
            },
            fav: {
                loaderImage: "https://psv4.userapi.com/c532036/u55205033/docs/d6/f9e851b894b9/file.gif?extra=142kM56E9wZzmCkLUMG1LskSxD4ATxn4V-S41qNMvp_TJ0TH8nIX0I1l56XRusjWy6BYsR7x6fun6_Kc5gJZhstvhYSLMGD1YP68O7hSNj88GBz8keFB-6d9z359S0oxIiRmN2wMJrj5JQSS1eLwqhrT",
                loaderText: "Загрузка...",
                loaderDuration: "3"
            }
        }
    },
    getters: {
        getLoaders: state => state.loaders,
        getLoadersNumber: state => state.loaders.length
    },
    mutations: {
        addLoader: (state, payload) => {
            state.loaders.push(payload)
        }
    },
    actions: {
        addTab: ({ commit }, payload) => {
            commit('addLoader', payload)
        }
    },
}