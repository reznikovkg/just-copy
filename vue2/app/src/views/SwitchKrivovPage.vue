<template>
  <div id="app">
    <div class="container">
      <div>
        <select v-model="selectValue">
          <option :value="switchesTypes.SWITCH">switch</option>
          <option :value="switchesTypes.CHECKBOX">checkbox</option>
        </select>
        <input v-model="giveName" class="container__input" placeholder="введите название" />
        <button @click="() => addSW()">Добавить</button>
      </div>
      <div v-for="(sw) in getSwitchList" :key="sw.name">
        <Checkbox v-if="sw.type === switchesTypes.CHECKBOX" :label="sw.name" v-model="sw.value"
          @change="change" />
        <SwitchButton v-else-if="sw.type === switchesTypes.SWITCH" :label="sw.name" v-model="sw.value" @change="change" />
        <button class="container__button" @click="() => deleteFromSwitchList(sw.name)">delete switch</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SwitchButton from "../../../components/SwitchButton-Krivov/SwitchButton.vue";
import Checkbox from "../../../components/CheckBox-Krivov/CheckBox.vue";
import { switchesTypes } from "@/constants";
export default {
  name: 'CustomCheckbox',
  data: () => ({
    giveName: "",
    selectValue: switchesTypes.SWITCH
  }),
  components: {
    SwitchButton,
    Checkbox
  },
  computed: {
    ...mapGetters(
      'switchList',
      [
        'getSwitchList'
      ]),
    switchesTypes() {
      return switchesTypes
    },
  },
  methods: {
    ...mapActions(
      'switchList',
      [
        'addToSwitchList',
        'deleteFromSwitchList',
        'changeSwitch'
      ]),
    change(name) {
      this.changeSwitch(name);
    },
    addSW() {
      this.addToSwitchList({ name: this.giveName, type: this.selectValue })
    },
  },
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