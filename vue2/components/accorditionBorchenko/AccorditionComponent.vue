<template>
  <div :class="open ? 'accordion__item--open' : 'accordion__item'" @click="$emit('clickHandler', index)">
    <button class="accordion__item--title">{{ accordion__item.title }}</button>
    <div class="accordion__item--hidden">
      <p>{{ accordion__item.content }}</p>
    </div>
  </div>
</template>
  
<script>
export default {
    name: 'AccordionItem',
    props: ['accordion__item', 'index', 'open']
}
</script>
  

<style scoped lang="less">
@import "styles/styles.less";
</style>
  