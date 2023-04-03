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
                loaderImage: "https://sun9-50.userapi.com/c532036/u55205033/docs/d6/852f90ebc129/file.gif?extra=w4I38Bqyvt0DeEsssoTu_bXIshbukT5I5kJ2mtabeK_okpuIpzpDguhOJZtp77-Bw4S0B3Al1gIAKkgQd39R43wM_xVXwI6j8P_jczE8yZ8HNjftSSZICN2-8w3yhHP4Ritb09xpDXT7Bso4FIreSD2p_lQ",
                loaderText: "Загрузка...",
                loaderDuration: "3"
            }
        }
    },
    getters: {
        getLoaders: state => state.loaders,
    },
}