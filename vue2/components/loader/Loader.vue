<template>
  <div class="loader" v-if="loading" :style="positionStyles">
    <span class="loader__percents" v-if="percents !== false">{{ percents + '%' }}</span>
    <button class="loader__button" v-if="showStopBtn">stop</button>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'LoaderComponent',
  model: {
    prop: 'loading',
    event: 'prevent'
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    percents: {
      type: [Number, Boolean],
      default: 0
    },
    isGlobal: {
      type: Boolean,
      default: false
    },
    showStopBtn: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      storeLoaderId: false
    }
  },
  computed: {
    positionStyles() {
      return {
        position: this.isGlobal ? 'fixed' : 'absolute'
      }
    }
  },
  methods: {
    // ...mapActions('loaders', {
    //   activateGlobalLoader: 'activateGlobalLoaderAction',
    //   deactivateGlobalLoader: 'deactivateGlobalLoaderAction',
    // }),
  }
}
</script>

<style lang="less" scoped>
.loader {
  top: 0;
  left: 0;
  z-index: 10000;

  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 35px;

  background-color: #000000D8;
  background-image: url("./images/loader.svg");
  background-position: center calc(50% - 35px);
  background-repeat: no-repeat;

  color: white;

  &__percents {
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>