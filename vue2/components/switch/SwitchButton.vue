<template>
  <div class="switch-button" :class="{ enabled: value }" @click="() => toggle()">
    <div class="switch-button_circle"></div>
  </div>
</template>

<script>
export default {
  name: "SwitchButton",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: Boolean
  },
  methods: {
    toggle() {
      this.$emit("change", !this.value);
    }
  }
}
</script>
<style scoped lang="less">
@import "styles/styles.less";
</style>
