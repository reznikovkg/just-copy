<template>
  <div class="about">
    <h1>Progress</h1>
    <div style="max-width: 500px;">
    <h2>Progress 1</h2>
    <ProgressBar
        v-model="progressOptions1"
        :showTip="true"
        ref="ProgressBar1"
    />
    <Button @click="() => this.$refs.ProgressBar1.decrease(10)">
        -10
    </Button>
    <Button @click="() => this.$refs.ProgressBar1.increase(10)">
        +10
    </Button>
    <h2>Progress 2</h2>
    <ProgressBar
        v-model="progressOptions2"
        :showTip="false"
        ref="ProgressBar2"
    />
    <Button @click="() => this.$refs.ProgressBar2.decrease(10)">
        -10
    </Button>
    <Button @click="() => this.$refs.ProgressBar2.increase(10)">
        +10
    </Button>
    <h2>Progress 3</h2>
    <ProgressBar
        v-model="progressOptions3"
        :showTip="true"
        :height="30"
        :colorFunc=color
        ref="ProgressBar3"
    />
    <Button @click="() => this.$refs.ProgressBar3.decrease(10)">
        -10
    </Button>
    <Button @click="() => this.$refs.ProgressBar3.increase(10)">
        +10
    </Button>
    <h2>Progress 4 (all props)</h2>
    <ProgressBar
        v-model="progressOptions4"
        :showTip="true"
        :height="30"
        :colorFunc=color
        :innerStrokeColor="'black'"
        :width="300"
        :changeTime="1"
        :timingFunction="'cubic-bezier(.29, 1.01, 1, -0.68)'"
        ref="ProgressBar4"
    />
    <Button @click="() => this.$refs.ProgressBar4.decrease(20)">
        -20
    </Button>
    <Button @click="() => this.$refs.ProgressBar4.increase(20)">
        +20
    </Button>
    <h2>Progress 5 (all props)</h2>
    <ProgressBar
        v-model="progressOptions5"
        :showTip="true"
        :height="30"
        :colorFunc=color
        :innerStrokeColor="'black'"
        :width="300"
        :changeTime="1"
        :timingFunction="'steps(6, end)'"
        ref="ProgressBar5"
    />
    <Button @click="() => this.$refs.ProgressBar5.decrease(20)">
        -20
    </Button>
    <Button @click="() => this.$refs.ProgressBar5.increase(20)">
        +20
    </Button>
    </div>
  </div>
</template>
  
  <script>
  import ProgressBar from "../../../components/progressShel/ProgressShel.vue";
  import Button from "../../../components/button/Button.vue";
  import { mapGetters, mapActions } from "vuex";
  
  export default {
    name: "SelectPage",
    components: {
      ProgressBar,
      Button
    },
    computed: {
      ...mapGetters('progress', [
        'getProgressValue'
      ]),
      progressOptions1: {
        get() {
          return this.getProgressValue;
        },
        set(val) {
          this.setProgressValue(val);
        }
      }
    },
    data() {
      return {
        progressOptions2: 80,
        progressOptions3: 0,
        progressOptions4: 12,
        progressOptions5: 25
      }
    },
    methods: {
      color(percentage) {
        return `hsl(${percentage * 1.2} 50% 50%)`;
      },
      ...mapActions('progress', [
        'setProgressValue'
      ]),
    }
  }
  </script>