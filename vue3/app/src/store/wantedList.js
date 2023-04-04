import axios from 'axios'
import { domain } from '../constants'


export default {
    namespaced: true,
    getters: {
        getRatingById: () => async payload => {
            let response = await axios.get(`${domain}/rating/${payload}`)
            return response.data.rating
        }
    },
    actions: {
        saveRatingById: async(_, payload) => {
            await axios.post(`${domain}/rating/${payload.id}?rating=${payload.rating}`)
        }
    }
}
