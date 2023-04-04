<template>
  <div
    class="select" 
  >
    <select v-model="selectedItem" style="display: none">
      <option :value="null" disabled hidden></option>
      <option v-for="(item, i) in items" :key="i" :value="selectedItem">
        {{ item }}
      </option>
    </select>
    <div
      class="select__button"
      @click="() => onSelectClick()"
      :class="{ 'select__button--opened': this.opened }"
    >
      {{ selectedItem || defaultValue }}
    </div>
    <transition name="select__fade">
      <div class="select__list" v-show="opened">
        <ul class="select__items">
          <li
            v-for="(item, i) in items"
            :key="i"
            class="select__item"
            :class="{
              'select__item--selected': selectedItem === item,
            }"
            @click="() => onItemClick(item)"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Select",
  model: {
    props: "selectedItem",
    event: "select-item-change",
  },
  props: {
    items: {
      type: Array,
    },
    defaultValue: {
      type: String,
      default: "Ничего не выбрано",
    },
  },
  data() {
    return {
      selectedItem: "",
      opened: false,
    };
  },
  methods: {
    onSelectClick() {
      this.opened = !this.opened;
    },
    onClickOutsideClose(e) {
      if (!this.$el.contains(e.target)) {
        this.opened = false;
      }
    },
    onItemClick(item) {
      this.opened = false;
      this.selectedItem = item;
      this.$emit("select-item-change", item);
    },
  },
  mounted() {
    document.addEventListener("click", this.onClickOutsideClose);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.onClickOutsideClose);
  },
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
