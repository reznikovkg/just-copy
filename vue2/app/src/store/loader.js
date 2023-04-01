import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state:
    {
        loaders:
        {
            "default":
            {
                buttonText: "Default",
                buttonWidth: "100",
                buttonHeight: "75",
                buttonColor: "#2c2c2c",
                loaderImage: "https://cdn-icons-png.flaticon.com/512/6356/6356630.png",
                loaderText: "Loading...",
                loaderDuration: "3"
            },
            "red":
            {
                buttonText: "Red",
                buttonWidth: "100",
                buttonHeight: "75",
                buttonColor: "#c22a2a",
                loaderImage: "https://cdn-icons-png.flaticon.com/512/25/25220.png",
                loaderText: "Loading",
                loaderDuration: "2"
            },
            "long":
            {
                buttonText: "Long Pause",
                buttonWidth: "100",
                buttonHeight: "75",
                buttonColor: "#2c2c2c",
                loaderImage: "https://cdn-icons-png.flaticon.com/512/7794/7794282.png",
                loaderText: "Loading...",
                loaderDuration: "10"
            },
            "wide":
            {
                
                buttonText: "Wide button",
                buttonWidth: "400",
                buttonHeight: "100",
                buttonColor: "#2c2c2c",
                loaderImage: "https://cdn-icons-png.flaticon.com/512/6356/6356470.png",
                loaderText: "Loading...",
                loaderDuration: "2"
            },
            "blank":
            {
                buttonText: "",
                buttonWidth: "50",
                buttonHeight: "35",
                buttonColor: "#2c2c2c",
                loaderImage: "https://cdn-icons-png.flaticon.com/512/6356/6356630.png",
                loaderText: "Loading...",
                loaderDuration: "3"
            },
            "rus":
            {
                buttonText: "На русском",
                buttonWidth: "200",
                buttonHeight: "76",
                buttonColor: "#2c2c2c",
                loaderImage: "https://cdn-icons-png.flaticon.com/512/6356/6356630.png",
                loaderText: "Загрузка...",
                loaderDuration: "3"
            },
            "fav":
            {
                buttonText: "лягушка",
                buttonWidth: "200",
                buttonHeight: "76",
                buttonColor: "#33f008",
                loaderImage: "https://psv4.userapi.com/c532036/u55205033/docs/d6/f9e851b894b9/file.gif?extra=142kM56E9wZzmCkLUMG1LskSxD4ATxn4V-S41qNMvp_TJ0TH8nIX0I1l56XRusjWy6BYsR7x6fun6_Kc5gJZhstvhYSLMGD1YP68O7hSNj88GBz8keFB-6d9z359S0oxIiRmN2wMJrj5JQSS1eLwqhrT",
                loaderText: "Загрузка...",
                loaderDuration: "3"
            }
        }
    },
    getters: {
        getLoaders: state => {
            return state.loaders
        },
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