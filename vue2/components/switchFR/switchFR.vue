<template>
    <div class="switch" @click="switchChangeState">
        <input type="checkbox" :checked="getSwitchState">
        <span class="slider"></span>
    </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "switchFR",
  data() {
    return {
        switchId: 0,
    }
  },
  computed: {
    ...mapGetters("switchFR", [
      "getLength",
      "getState",
    ]),
    getSwitchState() {
        if (this.switchId != undefined)
            return this.getState(this.switchId);
    }
  },
  created() {
    this.switchId = this.getLength;
    this.addSwitch();
  },
  methods: {
    ...mapActions("switchFR",[
      "addNewSwitch",
      "changeState",
    ]),
    switchChangeState() {
        this.changeState(this.switchId);
        this.$emit("stateChanged", this.getState(this.switchId))
    },
    addSwitch() {
        this.addNewSwitch(false);
    },
    returnSwitchState() {
        return this.getState(this.switchId);
    },
  },
};
</script>

<style lang="less">
@import "styles.less";
</style>
