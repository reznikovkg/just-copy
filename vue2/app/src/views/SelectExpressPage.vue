<template>
  <div class="about">
    <h1>SelectExpress</h1>
    <div style="max-width: 400px">
      <div>
        <h2>Набор:</h2>
        <div v-for="(element, index) in getSelectedElements" :key="index">
          <h3>{{ getIceCreamSelects[index].name }}: {{ element }}</h3>
        </div>
      </div>
      <div v-for="(select, index) in getIceCreamSelects" :key="index">
        <h2>{{ select.name }}</h2>
        <SelectComponent
          v-model="getSelectedElements[index]"
          :options="select.options"
          :placeholder="select.placeholder"
          @on-selected-option-changed="($event) => onSelectedElementChanged($event, index)"
        >
        </SelectComponent>
      </div>
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
      "getIceCreamSelects", 
      "getSelectedElements"]),
  },
  mounted() {
    this.loadIceCreamSelects();
  },
  methods: {
    ...mapActions("iceCream", [
      "loadIceCreamSelects",
      "setSelectedElementByIndex",
    ]),
    onSelectedElementChanged(e, index) {
      this.setSelectedElementByIndex({ index: index, value: e });
    },
  },
};
</script>
