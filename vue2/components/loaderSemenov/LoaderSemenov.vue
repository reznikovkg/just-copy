<template>
  <div style="padding: 5px">
    <div v-if="isLoading" class="loader__div">
      <img :src="loader.loaderImage" class="loader__image" />
      <p class="loader__text">{{ loader.loaderText }}</p>
      <button class="loader__close-button" @click="loaderStop">CLOSE</button>
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
      loaderTimer: undefined,
      isLoading: false,
    };
  },
  mounted() {
    this.loader = this.loaders["default"];
  },
  computed: {
    ...mapGetters("loaderSemenov", [
      "getLoaders",
    ]),
    loaders() {
      return this.getLoaders;
    },
  },
  methods: {
    loaderStart(loaderName) {
      this.loader = this.loaders[loaderName];
      if (this.loader == undefined) this.loader = this.loaders["default"];

      this.isLoading = true;
      this.loaderTimer = setTimeout(() => {
        this.loaderStop();
      }, this.loader.loaderDuration * 1000);
    },
    loaderStop() {
      this.isLoading = false;
      clearTimeout(this.loaderTimer);
    },
  },
};
</script>

<style lang="less">
@import "styles/styles.less";
</style>
