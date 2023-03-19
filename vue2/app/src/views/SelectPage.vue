<template>
  <div class="about">
    <h1>Select</h1>
    <div>
      <SelectComponent
        v-model="selectedOption"
        :options="meals"
        :close-on-select="false"
        :disabled="false"
        :custom-label="customLabel"
        no-data-message="Доступных приёмов пищи нет"
        placeholder="Выберите приём пищи"
      >
      </SelectComponent>
    </div>
  </div>
</template>

<script>
import SelectComponent from "../../../components/select/SelectComponent.vue";

export default {
  name: "SelectPage",
  components: {
    SelectComponent,
  },
  data() {
    return {
      selectedOption: "dinner",
    };
  },

  methods: {
    customLabel(option)
    {
      return (`${option.name} - ${option.value}`);
    }
  },

  computed: {
    meals() {
      return [
        {
          name: "Завтрак",
          value: "breakfast",
        },
        {
          name: "Обед",
          value: "lunch",
        },
        {
          name: "Ужин",
          value: "dinner",
        },
        {
          name: "Завтрак",
          value: "breakfast1",
        },
        {
          name: "Обед",
          value: "lunch1",
        },
        {
          name: "Ужин",
          value: "dinner1",
        },
      ];
    },
  },
};
</script>
