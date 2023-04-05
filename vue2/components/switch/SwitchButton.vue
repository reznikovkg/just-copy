<template>
  <div class="switch-button" 
    :class="{ enabled: value,'switch-button--disabled': disabled}"
    @click="() => toggle()">
    <div class="switch-button__circle"/>
  </div>
</template>

<script>
export default {
  name: "SwitchButton",
  model: {
    prop: 'value',
    event: 'click'
  },
  props: {
    value: Boolean,
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    toggle() {
      if (!this.disabled) {
        this.$emit("change", this.label);
      }
    }
  }
}
</script>
<style scoped lang="less">
@import "styles/styles.less";
</style>
