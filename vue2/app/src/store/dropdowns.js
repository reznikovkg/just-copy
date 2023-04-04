import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default {
  namespaced: true,
  state: {
    lastSelectedBoardGame: "",
    boardGames: ["Имаджинариум", "Каркассон", "Монополия", "Мачи Коро"],
    lastSelectedBook: "",
    books: ["Мы", "Скотный двор", "1984", "О дивный новый мир"],
  }, 
  getters: {
    getBoardGames: ({ boardGames }) => boardGames,
    getBooks: ({ books }) => books,
    getLastSelectedBoardGame: ({ lastSelectedBoardGame }) =>
      lastSelectedBoardGame,
    getLastSelectedBook: ({ lastSelectedBook }) => 
       lastSelectedBook,
  },
  mutations: {
    setLastSelectedBoardGame: (state, payload) => {
      state.lastSelectedBoardGame = payload;
    },
    setLastSelectedBook: (state, payload) => {
      state.lastSelectedBook = payload;
    },
  },
  actions: {
    setLastSelectedBoardGame: (context, payload) => {
      context.commit("setLastSelectedBoardGame", payload);
    },
    setLastSelectedBook: (context, payload) => {
      context.commit("setLastSelectedBook", payload);
    },
  },
};
