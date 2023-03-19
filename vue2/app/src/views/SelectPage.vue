<template>
  <div class="about">
    <h1>Select</h1>
    <div style="max-width: 400px;">
      <h2>Select without closing on select</h2>
      <SelectComponent
        v-model="selectedOption1"
        :options="berries"
        :close-on-select="false"
        no-data-message="Доступных ягод нет"
        placeholder="Выберите ягоду"
      >
      </SelectComponent>
      <h2>Select with closing on select</h2>
      <SelectComponent
        v-model="selectedOption2"
        :options="berries"
        :close-on-select="true"
        no-data-message="Доступных ягод нет"
        placeholder="Выберите ягоду"
      >
      </SelectComponent>
      <h2>Select with custom labels</h2>
      <SelectComponent
        v-model="selectedOption3"
        :options="berries"
        :custom-label="customLabel"
        no-data-message="Доступных ягод нет"
        placeholder="Выберите ягоду"
      >
      </SelectComponent>
      <h2>Select without options</h2>
        <SelectComponent
        v-model="selectedOption4"
        no-data-message="Доступных ягод нет"
        placeholder="Выберите ягоду"
      >
      </SelectComponent>
      <h2>Disabled select</h2>
      <SelectComponent
        v-model="selectedOption5"
        :options="berries"
        :disabled="true"
        :custom-label="customLabel"
        no-data-message="Доступных ягод нет"
        placeholder="Выберите ягоду"
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
      selectedOption1: "strawberry",
      selectedOption2: "strawberry",
      selectedOption3: "strawberry",
      selectedOption4: "strawberry",
      selectedOption5: "strawberry",
      selectedOption6: "strawberry",
    };
  },

  methods: {
    customLabel(option)
    {
      return (`${option.name} - ${option.color}`);
    }
  },

  computed: {

    berries(){
        return this.$store.getters['berries/getBerries']
    },
  },
};
</script>
