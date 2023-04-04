import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const domen = 'http://localhost:3000'

export default {
    namespaced: true,
    state: {
        activeElements: [],
        elementsData: []
    },
    getters: {
        getElementsData: (state) => (aIndex) => {
            return state.elementsData[aIndex]
        },
        getActiveElements: (state) => (aIndex) => {
            return state.activeElements[aIndex]
        },
    },
    mutations: {
        setDataForElements(state, payload) {
            state.activeElements = payload[0].activeElements
            state.elementsData = payload[0].elementsData
        },
        setElementActive(state, {aIndex, index}) {
            Vue.set(state.activeElements[aIndex], index, !state.activeElements[aIndex][index])
        }
    },
    actions: {
        onLoaded({commit}, index) {
            axios.get(domen + '/acc?id=' + index).then((response) => {
                commit('setDataForElements', response.data)
            })
        },
        setElementActiveAction(context, {aIndex, index}) {
            context.commit('setElementActive', {aIndex: aIndex, index: index})
        }
    }
}
