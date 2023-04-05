import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        uniqueId:0,
        activeAccordion:0,
        accordion:[
            {
              title: "First Title",
              content: "First content", 
              open: false
            },
            {
              title: "Second Title",
              content: "Second Content", 
              open: false
            },
            {
              title: "Third Title",
              content: "Third  Content", 
              open: false
            }
        ],
               
    },
    getters: {
        getUniqueId: (state) => {
            return state.uniqueId
        },
        getAccordion: (state) => {
            return state.accordion
        },
        getActiveAccordion:(state)=>{
            return state.activeAccordion
        }
    },
    mutations: {
        setActiveIndex: (state,payload) => {
            state.activeAccordion=payload
        },
        changeOpen:(state,payload)=>{
            state.accordion = state.accordion.map((accordion__item,  i) => {
                if(i === payload) {
                  accordion__item.open = !accordion__item.open;
                }
                return accordion__item;
              })
        }
    },
    actions: {
        setActiveIndex: ({commit}, payload) => {
            commit('setActiveIndex', payload)
        },
        changeOpen: ({commit}, payload) => {
            commit('changeOpen', payload)
        }
    }

}
