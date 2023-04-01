<template>
  <div class="checkbox"
   :class="{enabled: value,'checkbox--disabled': disabled}" @click="() => check()">
    <div class="checkbox__labels">
      <label>
        {{label}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
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
    check () {
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
