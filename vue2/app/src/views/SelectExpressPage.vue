<template>
  <div class="about">
    <h1>SelectExpress</h1>
    <div style="max-width: 400px">
      <h2>Сборка мороженого</h2>
      <h3>Ёмкость для мороженого: {{ getCurrentContainer}}</h3>
      <h3>Мороженое: {{ getCurrentIceCream}}</h3>
      <h3>Сироп: {{ getCurrentSyrup}}</h3>
      <h2>Выбор ёмкости</h2>
      <SelectComponent
        v-model="selectedContainer"
        :options="getContainers.options"
        :placeholder="getContainers.placeholder"
      >
      </SelectComponent>
      <h2>Выбор мороженого</h2>
      <SelectComponent
        v-model="selectedIceCream"
        :options="getIceCream.options"
        :placeholder="getIceCream.placeholder"
      >
      </SelectComponent>
      <h2>Выбор сиропа</h2>
      <SelectComponent
        v-model="selectedSyrup"
        :options="getSyrups.options"
        :placeholder="getSyrups.placeholder"
      >
      </SelectComponent>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SelectComponent from "../../../components/select/SelectComponent.vue";

export default {
  name: "SelectExpressView",
  components: {
    SelectComponent,
  },
  computed: {
    ...mapGetters("iceCream", [
      "getContainers",
      "getIceCream",
      "getSyrups",
      "getCurrentContainer",
      "getCurrentIceCream",
      "getCurrentSyrup",
    ]),
    selectedContainer: {
      get() {
        return this.getCurrentContainer;
      },
      set(val) {
        this.setCurrentContainer(val);
      },
    },
    selectedIceCream: {
      get() {
        return this.getCurrentIceCream;
      },
      set(val) {
        this.setCurrentIceCream(val);
      },
    },
    selectedSyrup: {
      get() {
        return this.getCurrentSyrup;
      },
      set(val) {
        this.setCurrentSyrup(val);
      },
    },
  },
  mounted() {
    this.loadContainers();
    this.loadIceCream();
    this.loadSyrups();
  },
  methods: {
    ...mapActions("iceCream", [
      "loadContainers",
      "loadIceCream",
      "loadSyrups",
      "setCurrentContainer",
      "setCurrentIceCream",
      "setCurrentSyrup",
    ]),
  },
};
</script>
