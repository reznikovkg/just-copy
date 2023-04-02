<template>
  <div class="loader" v-if="this.loading">
    <span class="loader__percents">{{ this.percents + '%' }}</span>
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
    percents: {
      type: Number,
      default: 50
    },
  },
  emits: [],
  methods: {}
}
</script>

<style lang="less" scoped>
.loader {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;

  width: 100vw;
  height: 100vh;

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
}
</style>