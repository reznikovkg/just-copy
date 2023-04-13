import Vue from 'vue'
import Vuex from 'vuex'
import { switchesTypes } from "@/constants";

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        ToggleSwitches: [
            {
                name: "switch1",
                type: switchesTypes.SWITCH,
                value: false
            },
            {
                name: "checkbox1",
                type: switchesTypes.CHECKBOX,
                value: false
            },
            {
                name: "switch2",
                type: switchesTypes.SWITCH,
                value: true
            },
            {
                name: "checkbox2",
                type: switchesTypes.CHECKBOX,
                value: false
            },
        ]
    },
    getters: {
        getToggleSwitches: (state) => state.ToggleSwitches,
    },
    mutations: {
        addToToggleSwitches: (state, payload) => {
            state.ToggleSwitches.push({ ...payload, value: true})
        },
        deleteFromToggleSwitches: (state, payload) => {
            state.ToggleSwitches = state.ToggleSwitches.filter(sw => sw.name !== payload)
        },
        changeSwitch: (state, payload) => {
            const switchIndex = state.ToggleSwitches.findIndex(sw => sw.name === payload);
            state.ToggleSwitches = state.ToggleSwitches.map((sw, i) => {
                if (i === switchIndex) {
                    return {
                        ...sw,
                        value: !sw.value
                    }
                }
                else {
                    return sw;
                }
            })
        },
    },
    actions: {
        addToToggleSwitches: ({ commit }, payload) => {
            commit('addToToggleSwitches', payload)
        },
        deleteFromToggleSwitches: ({ commit }, payload) => {
            commit('deleteFromToggleSwitches', payload)
        },
        changeSwitch: ({ commit }, payload) => {
            commit('changeSwitch', payload)
        }
    },
};
