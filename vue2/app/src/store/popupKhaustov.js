import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
	namespaced: true,
	state: {
		popups: [],
		lastId: 0,
		popupTypes: {
			default: {
				icon: "https://cdn-icons-png.flaticon.com/512/6974/6974462.png",
				title: "Уведомление!",
				text: "Уведомитесь",
				duration: "5"
			},
			danger: {
				icon: "https://cdn-icons-png.flaticon.com/512/497/497789.png",
				title: "DANGER!",
				text: "WATCH OUT!",
				duration: "10"
			},
			important: {
				icon: "https://cdn-icons-png.flaticon.com/512/179/179386.png",
				title: "Thats important",
				text: "Something really important",
				duration: "4"
			},
			info: {
				icon: "https://cdn-icons-png.flaticon.com/512/471/471662.png",
				title: "Info",
				text: "Take care!",
				duration: "3"
			},
			notification: {
				icon: "https://cdn-icons-png.flaticon.com/512/2645/2645897.png",
				title: "Duo,",
				text: "It's time for your daily Duolingo lesson!",
				duration: "1"
			},
		},
	},
	getters: {
		getPopupTypes: state => state.popupTypes,
		getPopupArray: state => state.popups,
		getLastId: state => state.lastId,
	},
	mutations: {
		addPopup: (state, payload) => {
			state.popups = [
				...state.popups,
				{
					id: state.lastId,
					content: payload,
				},
			];
			state.lastId += 1
		},
		removePopup: (state, payload) => {
			state.popups = state.popups.filter((x) => x.id != payload);
		}
	},
	actions: {
		addPopup: ({ commit }, payload) => {
			commit("addPopup", payload);
		},
		removePopup: ({ commit }, payload) => {
			commit("removePopup", payload);
		},
	},
}