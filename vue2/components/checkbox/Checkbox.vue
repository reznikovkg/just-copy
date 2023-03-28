<template>
  <div class="checkbox" :class="{enabled: value,'checkbox--disabled': disabled}" @click="() => check()"><label>{{label}}</label></div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  model: {
    prop: "value",
    event: "change"
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
    check () {
      this.$emit("change", !this.value);
    }
  }
}

</script>

<style scoped lang="less">
  @import "styles/styles.less";
</style>