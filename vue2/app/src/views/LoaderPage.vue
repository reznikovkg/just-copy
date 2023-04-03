<template>
  <div class="loader-blocks">
    <div class="loader-blocks__block">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, molestiae.</div>
      <div>Accusantium aliquid atque ipsa laudantium maxime possimus tenetur vero voluptatem.</div>

      <button @click.prevent="blocking1(3000)">Load block</button>
      <LoaderComponent
          :loading="loading1"
          :percents="loading1Value"
          showPercents
      />
    </div>
    <div class="loader-blocks__block">
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse, molestiae.</div>
      <div>Accusantium aliquid atque ipsa laudantium maxime possimus tenetur vero voluptatem.</div>

      <button @click.prevent="blocking2(3000)">Load page</button>
      <LoaderComponent
          :loading="loading2"
          canBeStopped
          blockPage
          @stopped="stopBlocking2()"
      />
    </div>
  </div>
</template>

<script>
import LoaderComponent from '../../../components/loader/Loader.vue'

export default {
  name: 'LoaderPage',
  components: {
    LoaderComponent
  },
  data () {
    return {
      loading1: false,
      loading1Value: 0,
      loading2: false,
      loading2Timeout: 0,
    }
  },
  methods: {
    blocking1(time) {
      this.loading1 = true;
      this.loading1Value = 0;

      this.loaderTimeout = setTimeout(() => {
        this.loading1Value = 99;

        this.loaderTimeout = setTimeout(() => {
          this.loading1 = false
        }, 1000)
      }, time - 1000)
    },
    blocking2(time) {
      this.loading2 = true;

      this.loading2Timeout = this.loaderTimeout = setTimeout(() => {
        this.loading2 = false
      }, time)
    },
    stopBlocking2() {
      this.loading2 = false;
      clearTimeout(this.loading2Timeout);
    }
  },
}
</script>

<style lang="less">
  .loader-blocks {
    padding: 10px;

    &__block {
      position: relative;
      overflow: hidden;
      min-height: 200px;
      padding: 15px;
      margin-bottom: 15px;
      background-color: #f6f6f6;
      border: 1px solid #dbdbdb;
     }
  }
</style>
