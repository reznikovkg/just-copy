<template>
  <div style="width: 600px; margin: 12px;">
    <h2>Последняя выбранная игра: {{ getLastSelectedBoardGame }}</h2>
    <SelectComponent2 :items="boardGames" v-model="selectedBoardGameItem"></SelectComponent2>

    <h2>Последняя выбранная книга: {{ getLastSelectedBook }}</h2>
    <SelectComponent2 :items="books" v-model="selectedBookItem"></SelectComponent2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SelectComponent2 from "../../../components/SelectComponent/SelectComponent2.vue";

export default {
  name: "SelectPage",
  components: {
    SelectComponent2,
  },
  computed: {
    boardGames() {
      return this.$store.getters["dropdowns/getBoardGames"];
    },
    books() {
      return this.$store.getters["dropdowns/getBooks"];
    },
    ...mapGetters("dropdowns", [
      "getLastSelectedBoardGame",
      "getLastSelectedBook"
    ]),
    selectedBoardGameItem: {
      get() {
        return this.getLastSelectedBoardGame;
      },
      set(value) {
        this.setLastSelectedBoardGame(value);
      },
    },
    selectedBookItem: {
      get() {
        return this.getLastSelectedBook;
      },
      set(value) {
        this.setLastSelectedBook(value);
      },
    },
  },
  methods: {
    ...mapActions("dropdowns", [
      "setLastSelectedBoardGame",
      "setLastSelectedBook"
    ]),
  },
};
</script>

