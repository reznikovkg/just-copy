<template>
  <div 
    class="test-tube" 
    :class="{ 'test-tube--selected': selected }" 
    @click="() => $emit('click')">
    <div 
      class="test-tube__layer" 
      v-for="(layer, index) in layers" 
      :key="index"
      :style="{ backgroundColor: layer, height: `${100 / capacity}%` }" />
  </div>
</template>

<script>
export default {
  name: "TestTube",
  props: {
    layers: {
      type: Array,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="less">
.test-tube {
  width: 3em;
  height: 15em;
  border: 2px solid black;
  border-radius: 1em;
  overflow: hidden;
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column-reverse;

  &--selected {
    border-color: blue;
  }

  &__layer {
    width: 100%;
  }
}
</style>
