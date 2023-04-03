<template>
  <div class="loader" v-if="showLoader" :style="position">
    <span class="loader__percents" v-if="showPercents">{{ percents + '%' }}</span>
    <button class="loader__button" v-if="canBeStopped" @click.prevent="stop">Stop</button>
  </div>
</template>

<script>
export default {
  name: 'LoaderComponent',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    showPercents: {
      type: Boolean,
      default: false
    },
    percents: {
      type: Number,
      default: 0,
      validator(val) {
        return val >= 0 && val <= 100;
      }
    },
    canBeStopped: {
      type: Boolean,
      default: false
    },
    blockPage: {
      type: Boolean,
      default: false
    }
  },
  emits: ['stopped'],
  computed: {
    showLoader() {
      if(this.blockPage) {
        return this.$store.getters['loaders/isGlobalLoaderActive']
      } else {
        return this.loading
      }
    },
    position() {
      return {
        position: this.blockPage ? 'fixed' : 'absolute'
      }
    }
  },
  methods: {
    stop() {
      this.$emit('stopped');
    }
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

  background-color: #000000D8;
  background-image: url("./images/loader.svg");
  background-position: center calc(50% - 75px);
  background-repeat: no-repeat;

  color: white;

  &__percents {
    font-size: 20px;
    margin-bottom: 10px;
  }

  &__button {
    font-size: 20px;
    padding: 5px;
  }
}
</style>