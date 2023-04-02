<template>
  <div class="about">
    <div v-for="product in getProgress" :key="product.id">
        <ProgressBar
        v-model="product.value"
        :showTip="true"
        :height="50"
        :colorFunc=color
        :innerStrokeColor="'black'"
        :width="400"
        :ref=product.id
      > 
      </ProgressBar>
      <Button @click="() => decrease(String(product.id), 20)" >
        -20
      </Button>
      <Button @click="() => increase(String(product.id), 20)" >
        +20
      </Button>
    </div>
  </div>
</template>
  
<script>
  import { mapActions, mapGetters } from 'vuex';
  import Button from '../../../components/button/Button.vue'
  import ProgressBar from "../../../components/progress/Progress.vue";

  export default {
  name: 'ProgressExpressView',
  components: {
    Button,
    ProgressBar
  },
  computed: {
    ...mapGetters('progres', [
    'getProgress'
    ])
  },
  mounted () {
    this.loadProgress()
  },
  methods: {
    ...mapActions('progres', [
    'loadProgress'
    ]),
    color(percentage) {
      var second = 13 + percentage * 4;
      if(second > 255) {
      var first = 350 - percentage * 2;
        return `rgb(${first}, 255, 0)`;
      }
      return `rgb(255, ${second}, 0)`;
    },
    decrease(progressId, value) {
      this.$refs[progressId][0].decrease(value);
    },
    increase(progressId, value) {
      this.$refs[progressId][0].increase(value)
    }
  }
  }
</script>
  