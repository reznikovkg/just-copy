<template>
	<div class="SwitchButton" :class="{ enabled: value }" @click="toggle">
	<div class="Circle"></div>
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
    toggle: function () {
      this.$emit("change", !this.value);
    }
  }
}
</script>
<style scoped lang="less">
@import "styles/styles.less";
</style>
