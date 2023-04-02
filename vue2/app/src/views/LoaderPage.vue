<template>
  <div class="loader-blocks">
    <div class="loader-blocks__block">
      <h2>LOAD THIS BLOCK</h2>
      <button @click.prevent="blocking1()">click</button>
      <LoaderComponent
          v-model="block1"
          :percents="block1Percents"
      />
    </div>
    <div class="loader-blocks__block">
      <h2>LOAD THIS BLOCK</h2>
      <button @click.prevent="blocking2()">click</button>
      <LoaderComponent
          v-model="block2"
          :percents="block2Percents"
      />
    </div>
    <div class="loader-blocks__block">
      <h2>LOAD THE PAGE</h2>
      <button @click.prevent="blocking3()">click</button>
      <LoaderComponent
          v-model="block3"
          :percents="block3Percents"
          isGlobal
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
      block1: false,
      block1Percents: 0,
      block2: false,
      block2Percents: false,
      block3: false,
      block3Percents: 0,
    }
  },
  methods: {
    blocking1() {
      this.block1 = true;
      this.block1Percents = 0;
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => this.block1Percents = i, i * 30);
      }

      setTimeout(() => this.block1 = false, 3500)
    },
    blocking2() {
      this.block2 = true;
      setTimeout(() => this.block2 = false, 3500)
    },
    blocking3() {
      this.block3 = true;
      this.block3Percents = 0;
      for (let i = 0; i <= 100; i++) {
        setTimeout(() => this.block3Percents = i, i * 30);
      }

      setTimeout(() => this.block3 = false, 3500)
    }
  }
}
</script>

<style lang="less">
  .loader-blocks {
    display: flex;
    flex-direction: column;
    padding: 10px;

    &__block {
       padding: 20px;
       margin-bottom: 10px;
       border: 1px solid black;
       border-radius: 10px;
       position: relative;
       overflow: hidden;
     }
  }
</style>
