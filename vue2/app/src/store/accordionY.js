import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        activeElements: [
            [ false, false, false ],
            [ true, true ]
        ],
        accordionData: [
            [
                {
                    title: "Болото",
                    content: "О нет! Здесь нет жабы, но полно лягушек. 👀",
                },
                {
                    title: "Лес",
                    content: "Ура! Вы нашли жабу! 🤝",
                },
                {
                    title: "Поле",
                    content: "Никаких жаб. Посмотрите выше. ☝"
                }
            ],
            [
                {
                    title: "Жаба, которая не сдала зачет",
                    content: "<img src='https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/31PCiCXBrUL._CR0,0,300,300_UX256.jpg'>"
                },
                {
                    title: "Пустой элемент",
                    content: "",
                }
            ]
        ]
    },
    getters: {
        getAccordionData: (state) => (accordionIndex) => {
            return state.accordionData[accordionIndex]
        },
        getActiveElements: (state) => (accordionIndex) => {
            return state.activeElements[accordionIndex]
        },
    },
    mutations: {
        setElementActive(state, {accordionIndex, index}) {
            Vue.set(state.activeElements[accordionIndex], index, !state.activeElements[accordionIndex][index])
        }
    },
    actions: {
        setElementActiveAction(context, {accordionIndex, index}) {
            context.commit('setElementActive', {accordionIndex: accordionIndex, index: index})
        }
    }
}
