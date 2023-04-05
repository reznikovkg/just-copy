<template>
  <div class="accordion">
    <div v-for="(elem, index) in elems" :key="index">
      <button
          class="accordion__main"
          :class="{'accordion__main--active': activeElems[index]}"
          @click="emitUpdateElement(index)"
          v-html="elem.title">
      </button>
      <p
          class="accordion__info"
          :class="{'accordion__info--expand': activeElems[index]}"
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
  methods:{
    emitUpdateElement(index){
      this.$emit('updateElement', {aIndex: this.infoArrayIndex, index: index})
    }
  }
}
</script>

<style lang="less">
  @import "styles/style.less";
</style>
