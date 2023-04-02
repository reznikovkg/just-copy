<template>
  <div style="padding: 5px">
    <div v-if="isLoading" class="loader__div">
      <img :src="loader.loaderImage" class="loader__image" />
      <p class="loader__text">{{ loader.loaderText }}</p>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "LoaderSemenov",
  props: {
    loaderStyle: {
      type: String,
      default: "default",
    },
  },
  data() {
    return {
      loader: {},
      isLoading: false,
    };
  },
  computed: {
    ...mapGetters("loaderSemenov", ["getLoaders"]),
    loaders() {
      return this.getLoaders;
    },
  },
  methods: {
    ...mapActions("loaderSemenov", ["addLoader"]),
    loaderStart(loaderName) {
      this.loader = this.getLoaders[loaderName];
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, this.loader.loaderDuration * 1000);
    },
  },
};
</script>

<style lang="less">
@import "styles/styles.less";
</style>
