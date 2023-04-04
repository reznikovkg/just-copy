import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    namespaced: true,
    state: {
        activeElements: [
            Array.from({length: 2}, () => false),
            Array.from({length: 2}, () => true)
        ],
        elementsData: [
            [
                {
                    title: "text",
                    info: "info"
                },
                {
                    title: "text1",
                    info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
                        " Proin augue ligula, mattis sit amet ipsum sed, commodo porta ante. Praesent eu elit ut neque ullamcorper ornare. " +
                        "Curabitur congue ultrices tempor. Ut non dignissim mauris, at ultrices enim. Curabitur pellentesque lacus eget velit fringilla, " +
                        "ut venenatis leo mattis. Quisque ullamcorper lectus rutrum felis aliquam, eget pulvinar libero maximus. " +
                        "Curabitur blandit metus ornare venenatis mollis. Sed malesuada auctor massa, non vestibulum nisi tincidunt quis."
                }
            ],
            [
                {
                    title: "text2",
                    info: "info2"
                },
                {
                    title: "<a href='https://en.wikipedia.org/wiki/Quokka'>quokka</a>",
                    info: "<img src='https://live-production.wcms.abc-cdn.net.au/119e113a1102ce984df0b3d77972931b?impolicy=wcms_crop_resize&cropH=808&cropW=1080&xPos=0&yPos=401&width=862&height=647' alt='a picture of a cute quokka'>"
                },
            ]
        ]
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
        setElementActive(state, {aIndex, index}) {
            Vue.set(state.activeElements[aIndex], index, !state.activeElements[aIndex][index])
        }
    },
    actions: {
        setElementActiveAction(context, {aIndex, index}) {
            context.commit('setElementActive', {aIndex: aIndex, index: index})
        }
    }
}
