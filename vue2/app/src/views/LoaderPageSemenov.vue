<template>
  <div>
    <h1>Loaders:</h1>
    <div style="padding: 5px">
      <Loader ref="loaderSemenov" />
      <button :class="['loader__button']" @click="() => loaderStart('default')">
        Default
      </button>
      <Loader ref="loader" />
      <button :class="['loader__button']" @click="() => loaderStart('fav')">
        Der Frosch
      </button>
      <Loader ref="loader" />
      <button :class="['loader__button']" @click="() => loaderStart('long')">
        Long Loading
      </button>
    </div>
  </div>
</template>
    
<script>
import Loader from "../../../components/loaderSemenov/LoaderSemenov.vue";
export default {
  name: "LoaderPage",
  components: {
    Loader,
  },
  methods: {
    loaderStart(loaderStyle) {
      this.$refs.loader.loaderStart(loaderStyle);
    },
  },
};
</script>

<style lang="less">
@import "../../../components/loaderSemenov/styles/styles.less";
</style>