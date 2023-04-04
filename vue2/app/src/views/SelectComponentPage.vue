<template>
<div style="width: 600px; margin: 12px;">
<h2>Последняя выбранная игра: {{ getLastSelectedBoardGame }}</h2>
<Select :items="boardGames" v-model="selectedBoardGameItem"></Select> 

<h2>Последняя выбранная книга: {{ getLastSelectedBook }}</h2>
<Select :items="books" v-model="selectedBookItem"></Select>
</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Select from "../../../components/SelectComponent/Select.vue";

export default {
  name: "SelectPage",
  components: { 
    Select,
  },
  computed: {
    boardGames() {
      return this.$store.getters["dropdowns/getBoardGames"];
    },
    books() {
      return this.$store.getters["dropdowns/getBooks"];
    },
    ...mapGetters("dropdowns", ["getLastSelectedBoardGame", "getLastSelectedBook"]),
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
    ...mapActions("dropdowns", ["setLastSelectedBoardGame", "setLastSelectedBook"]),
  },
};
</script>

