export default {
    namespaced: true,
    state: {
        ratings: {}
    },
    getters: {
        getRatingById: state => payload => {
            return state.ratings[payload] || 0
        }
    },
    mutations: {
        saveRatingById: (state, payload) => {
            state.ratings[payload.id] = payload.rating
        }
    },
    actions: {
        saveRatingById: ({ commit }, payload) => {
            commit('saveRatingById', payload)
        }
    }
}
