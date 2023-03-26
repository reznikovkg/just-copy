<template>
  <div class="CheckBox" name="checkbox" :class="{ enabled: value }" @click="check" >
  </div>
</template>

<script>
export default {
  name: "CustomCheckbox",
  model: {
    prop: "value",
    event: "change"
  },
  props: {
    value: Boolean
  },
  methods: {
    check: function () {
      this.$emit("change", !this.value);
    }
  }
}


</script>


<style scoped lang="less">
  @import "styles/styles.less";
</style>