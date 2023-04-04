<template>
  <div class="switch-button" 
    :class="{ enabled: checked }" 
    @click="() => change()">
    <div class="switch-button__circle"/>
  </div>
</template>

<script>
export default {
  name: "MySwitchButton",
  model: {
    prop: "checked",
    event: "change"
  },
  props: {
    checked: Boolean
  },
  methods: {
    change() {
      this.$emit("change", !this.checked);
    }
  }
}
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
