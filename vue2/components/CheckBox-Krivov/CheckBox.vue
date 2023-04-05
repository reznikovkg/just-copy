<template>
    <div class="checkbox" 
      :class="{ enabled: checked }" 
      @click="() => change()">
      <div class="checkbox__labels">
      <label>
        {{label}}
      </label>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MyCheckbox",
    model: {
      prop: "checked",
      event: "change"
    },
    props: {
      checked: Boolean,
      label: String
    },
    methods: {
      change() {
        this.$emit("change", !this.checked);
      }
    }
  }
  </script>
  
  <style scoped lang="less">
  @import "./styles/styles.less";
  </style>
  