<template>
    <div class="checkbox" name="checkbox" :class="{ enabled: checked }" @click="() => change()">
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
@import "./styles/styles.less";
</style>
