<template>
  <div class="accordion">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="accordion__item"
    >
      <div
        class="accordion__header"
        @click="toggle(index)"
      >
        {{ item.header }}
        <span
          class="accordion__icon"
          :class="{ 'accordion__icon--active': item.active }"
        >
          &#9660;
        </span>
      </div>
      <div
        class="accordion__content"
        :class="{ 'accordion__content--active': item.active }"
        v-html="item.content"
      >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  methods: {
    toggle(index) {
      this.$emit('itemToggle', index)
    },
  },
}
</script>

<style lang="less" scoped>
@import './styles/styles.less';
</style>