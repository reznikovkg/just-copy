<template>
  <div id="app">
    <CheckBox v-model="switch1" label="checkbox"/>
    <CheckBox v-model="switch3" label="checkbox2" :disabled="true"/>
    <SwitchButton v-model="switch1"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SwitchButton from "../../../components/switch/SwitchButton.vue";
import CheckBox from "../../../components/checkbox/Checkbox.vue";
export default {
  name: 'CustomCheckbox',
  components: {
    SwitchButton,
    CheckBox
  },
  data() {
    return {
      switch1: false,
      switch3: true
    };
  },
  computed: {
    switches() {
      return this.$store.getters['switches/getSwitches']
    },
    ...mapGetters('switches', [
      'getLastSelectedSwitch'
    ]),
    switch2: {
      get() {
        return this.getLastSelectedSwitch;
      },
      set(val) {
        this.setLastSelectedSwitch(val);
      }
    }
  },
  methods: {
    ...mapActions('switches', [
      'setLastSelectedSwitch'
    ]),
  },
};
</script>
<style lang="less">
#app {
  font-family: Lato, sans-serif;
}
</style>
  