<template>
  <div id="app">
    <div class="container">
      <div>
        <input v-model="inpValue" class="container__input" placeholder="введите название" />
        <select v-model="selectValue">
          <option :value="switchesTypes.SWITCH">switch</option>
          <option :value="switchesTypes.CHECKBOX">checkbox</option>
        </select>
        <button @click="() => addSW()">Добавить</button>
      </div>
      <div v-for="(sw) in getSwitches" :key="sw.id">
        <CheckBox v-if="sw.type === switchesTypes.CHECKBOX" :label="sw.name" v-model="sw.value" :disabled="sw.disabled" :id="sw.id"
          @change="change" @click="() => deleteSwitch(sw.id)"/>
        <SwitchButton v-else-if="sw.type === switchesTypes.SWITCH" :label="sw.name" v-model="sw.value" :id="sw.id" @change="change" />
        <button class="container__button" @click="() => deleteSwitch(sw.id)">delete switch</button>
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
    ...mapGetters(
      'switches',
      [
        'getSwitches'
      ]),
    switchesTypes() {
      return switchesTypes
    },
  },
  methods: {
    ...mapActions(
      'switches',
      [
        'fetchAllSwitches',
        'deleteSwitch',
        'changeSwitch',
        'addSwitch'
      ]),
    change(id) {
      this.changeSwitch({id});
    },
    addSW() {
      this.addSwitch({_switch: { name: this.inpValue, type: this.selectValue, value: false, disabled: false }})
    },
  },
  mounted() {
    this.fetchAllSwitches()
  }
};
</script>

<style lang="less">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__input {
    width: 200px
  }

  &__button {
    margin-left: 40px;
  }
}
</style>
