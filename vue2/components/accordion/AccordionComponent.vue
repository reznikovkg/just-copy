<template>
  <div class="accordion">
    <div v-for="(elem, index) in elems" :key="index">
      <button
          class="main"
          :class="{'main--active': activeElems[index]}"
          @click="$emit('updateElement', {aIndex: infoArrayIndex, index: index})"
          v-html="elem.title">
      </button>
      <p
          class="info"
          :class="{'info--expand': activeElems[index]}"
          v-html="elem.info">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionComponent',
  props: {
    elems: [],
    activeElems: [],
    infoArrayIndex: Number
  },
}
</script>

<style lang="less">
  @import "styles/style.less";
</style>
