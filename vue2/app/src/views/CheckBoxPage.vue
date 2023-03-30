<template>
  <div id="app">
      <div v-for="(sw, index) in getSwitches" :key="sw.name">
          <CheckBox :label="sw.name" :value="sw.value" :disabled="sw.disabled" @change="change" />
          <div v-if="index === 0">
              <SwitchButton :label="sw.name" :value="sw.value" @change="change"/>
          </div>
      </div>
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
  computed: {
    ...mapGetters('switches', [
      'getSwitches'
    ]),
  },
  methods: {
      change(name) {
          this.changeSwitch(name);
      },
    ...mapActions('switches', [
      'addSwitch', 'deleteSwitch', 'changeSwitch'
    ]),
  },
};
</script>
<style lang="less">
#app {
  font-family: Lato, sans-serif;
}
</style>
  