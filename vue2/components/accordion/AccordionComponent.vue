<template>
  <div class="accordion">
    <div v-for="(elem, index) in elems(infoArrayIndex)" :key="index">
      <button class="element__main" :class="{'element__main--active': isActive(infoArrayIndex, index)}"
              @click="setActive({aIndex: infoArrayIndex, index: index})" v-html="elem.title"></button>
      <p class="element__info" :class="{'element__info--expand': isActive(infoArrayIndex, index)}"
         v-html="elem.info"></p>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex"

export default {
  name: 'AccordionComponent',
  props: {
    infoArrayIndex: Number
  },
  computed: {
    ...mapGetters('accordion', {elems: 'getElementsData', isActive: 'isElementActive'}),
  },
  methods: {
    ...mapMutations('accordion', {setActive: 'setElementActive'}),
  }
}
</script>

<style lang="less">
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

@font: Raleway;
@gray-color: #777;
@bg: #f1f1f1;

.accordion {
  background: @bg;
  width: 500px;
}

.element__info {
  font-family: @font;

  padding-top: 0;
  margin-top: 0;
  text-align: left;
  padding-left: 30px;
  margin-bottom: 2px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.3s ease-out;
  border-bottom: 1px solid @gray-color;

  &--expand {
    overflow-x: auto;
    transition: max-height 0.5s ease-in;
    max-height: 500px;
  }
}

.element__main {
  font-size: 16px;
  font-family: @font;

  border-radius: 3px;
  cursor: pointer;
  width: 100%;
  padding: 10px;
  text-align: left;
  border: none;
  outline: none;

  &:after {
    content: '˃';
    font-size: 13px;
    color: @gray-color;
    float: right;
    margin-left: 5px;
  }

  &--active:after {
    content: '˅';
  }
}
</style>
