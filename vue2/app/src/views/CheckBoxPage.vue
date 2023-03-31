<template>
  <div id="app">
    <div class="container">
      <div>
        <input @change="e => setInputValue(e)" class="container__input" placeholder="enter name" />
        <select :value="selectValue" @change="e => setSelectValue(e)">
          <option :value="switchesTypes.SWITCH">switch</option>
          <option :value="switchesTypes.CHECKBOX">checkbox</option>
        </select>
        <button @click="() => addSW()">Добавить</button>
      </div>
      <div v-for="(sw) in getSwitches" :key="sw.name">
        <CheckBox v-if="sw.type === switchesTypes.CHECKBOX" :label="sw.name" :value="sw.value" :disabled="sw.disabled"
          @change="() => change(sw.name)" />
        <SwitchButton v-else-if="sw.type === switchesTypes.SWITCH" :label="sw.name" :value="sw.value"
          @change="() => change(sw.name)" />
        <button class="container__button" @click="() => deleteSwitch(sw.name)">delete switch</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SwitchButton from "../../../components/switch/SwitchButton.vue";
import CheckBox from "../../../components/checkbox/Checkbox.vue";
import { switchesTypes } from "@/constants";
export default {
  name: 'CustomCheckbox',
  data: () => ({
    inpValue: "",
    selectValue: switchesTypes.SWITCH
  }),
  components: {
    SwitchButton,
    CheckBox
  },
  computed: {
    switchesTypes() {
      return switchesTypes
    },
    ...mapGetters('switches', [
      'getSwitches'
    ]),
  },
  methods: {
    setSelectValue(e) {
      this.selectValue = e.target.value
    },
    setInputValue(e) {
      this.inpValue = e.target.value
    },
    change(name) {
      this.changeSwitch(name);
    },
    addSW() {
      this.addSwitch({ name: this.inpValue, type: this.selectValue })
    },
    ...mapActions('switches', [
      'addSwitch', 'deleteSwitch', 'changeSwitch'
    ]),
  },
};
</script>
<style>
</style>
  