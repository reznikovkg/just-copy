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
        <div v-for="(sw) in getSwitchesVolgin" :key="sw.name">
          <CheckboxVolgin v-if="sw.type === switchesTypes.CHECKBOX" :label="sw.name" v-model="sw.value" :disabled="sw.disabled"
            @change="change" />
          <SwitchVolgin v-else-if="sw.type === switchesTypes.SWITCH" :label="sw.name" v-model="sw.value" @change="change" />
          <button class="container__button" @click="() => deleteSwitch(sw.name)">delete switch</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from "vuex";
  //import SwitchButton from "../../../components/switchVolgin";
  //import CheckBox from "../../../components/CheckboxVolgin";
  import SwitchVolgin from "../../../components/switchVolgin/SwitchVolgin.vue"
  import CheckboxVolgin from "../../../components/CheckboxVolgin/CheckboxVolgin.vue"

  import { switchesTypes } from "@/constants";
  export default {
    name: 'CustomCheckbox',
    data: () => ({
      inpValue: "",
      selectValue: switchesTypes.SWITCH
    }),
    components: {
      SwitchVolgin,
      CheckboxVolgin
    },
    computed: {
      ...mapGetters(
        'switchesVolgin',
        [
          'getSwitchesVolgin'
        ]),
      switchesTypes() {
        return switchesTypes
      },
    },
    methods: {
      ...mapActions(
        'switchesVolgin',
        [
          'addSwitch',
          'deleteSwitch',
          'changeSwitch'
        ]),
      change(name) {
        this.changeSwitch(name);
      },
      addSW() {
        this.addSwitch({ name: this.inpValue, type: this.selectValue })
      },
    },
  };
  </script>
  
  <style lang="less">
  .container {
    display: flex;
    flex-direction: column;
    align-items: left;
  
    &__input {
      width: 200px
    }
  
    &__button {
      margin-left: 40px;
    }
  }
  </style>
  