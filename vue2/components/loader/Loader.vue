<template>
  <div style="padding: 5px">
    <button
      :class="['loader__button']"
      @click="() => loaderStart(loaderStyle)"
      :style="{
        backgroundColor: loaders[loaderStyle].buttonColor,
        width: loaders[loaderStyle].buttonWidth + 'px',
        height: loaders[loaderStyle].buttonHeight + 'px',
      }"
    >
      {{ loaders[loaderStyle].buttonText }}
    </button>
    <div v-if="isLoading" class="loader__div">
      <img :src="loaders[loaderStyle].loaderImage" class="loader__image" />
      <p class="loader__text">{{ loaders[loaderStyle].loaderText }}</p>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Loader",
  props: {
    loaderStyle: {
      type: String,
      default: "default",
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters("loaders", ["getLoaders"]),
    loaders() {
      return this.getLoaders;
    },
  },
  methods: {
    ...mapActions("loaders", ["addLoader"]),
    loaderStart(loaderName) {
      let loader = this.getLoaders[loaderName];
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, loader.loaderDuration * 1000);
    },
  },
};
</script>

<style lang="less">
@import "styles/styles.less";
</style>
