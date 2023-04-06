<template>
  <div class="accordionY">
    <div v-for="(elem, index) in elems" :key="index">
      <div class="accordion__item">
        <div
            class="accordion__main"
            :class="{'accordion__main--active': activeElems[index]}"
             @click="emitUpdateElement(index)"
            v-html="elem.title">
        </div>
        <p
            class="accordion__content"
            :class="{'accordion__content--expand': activeElems[index]}"
            v-html="elem.content"
            v-if=activeElems[index]>
        </p>
        <p 
            class="accordion__content"
            :class="{'accordion__content--expand': false}"
            v-html="elem.content"
            v-else>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionComponent',
  props: {
    elems: [],
    activeElems: [],
    contentArrayIndex: Number
  },
  methods:{
    emitUpdateElement(index){
      this.$emit('updateElement', {accordionIndex: this.contentArrayIndex, index: index})
    }
  }
}
</script>

<style lang="less">
  @import "styles/style.less";
</style>
