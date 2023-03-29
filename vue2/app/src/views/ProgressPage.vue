<template>
  <div class="about">
    <h1>Progress</h1>
    <div style="max-width: 500px;">
      <h2>Progress with percent and red line</h2>
      <ProgressBar
        v-model="progressOptions1"
        :showTip="true"
      > 
      </ProgressBar>
      <Button @click="() => decrease1(10)" >
        -10
      </Button>
      <Button @click="() => increase1(10)" >
        +10
      </Button>
      <h2>Progress without percent and red line</h2>
      <ProgressBar
        v-model="progressOptions2"
        :showTip="false"
      > 
      </ProgressBar>
      <Button @click="() => decrease2(10)" >
        -10
      </Button>
      <Button @click="() => increase2(10)" >
        +10
      </Button>
      <h2>Progress with percent and broad line and different colors</h2>
      <ProgressBar
        v-model="progressOptions3"
        :showTip="true"
        :height="50"
        :colorFunc=color
      > 
      </ProgressBar>
      <Button @click="() => decrease3(10)" >
        -10
      </Button>
      <Button @click="() => increase3(10)" >
        +10
      </Button>
      <h2>Progress with all props</h2>
      <ProgressBar
        v-model="progressOptions4"
        :showTip="true"
        :height="50"
        :colorFunc=color
        :innerStrokeColor="'black'"
        :width="400"
      > 
      </ProgressBar>
      <Button @click="() => decrease4(20)" >
        -20
      </Button>
      <Button @click="() => increase4(20)" >
        +20
      </Button>
    </div>
  </div>
</template>

<script>
  import ProgressBar from "../../../components/progress/Progress.vue";
  import Button from "../../../components/button/Button.vue";
    export default {
      name: "SelectPage",
      components: {
        ProgressBar,
        Button
      },
      data() {
        return {
          progressOptions1: 10,
          progressOptions2: 80,
          progressOptions3: 0,
          progressOptions4: 12
        }
      },
      methods: {
        increase1(change) {
          this.progressOptions1 = this.increase(this.progressOptions1, change);
        },
        decrease1(change) {
          this.progressOptions1 = this.decrease(this.progressOptions1, change);
        },
        increase2(change) {
          this.progressOptions2 = this.increase(this.progressOptions2, change);
        },
        decrease2(change) {
          this.progressOptions2 = this.decrease(this.progressOptions2, change);
        },
        increase3(change) {
          this.progressOptions3 = this.increase(this.progressOptions3, change);
        },
        decrease3(change) {
          this.progressOptions3 = this.decrease(this.progressOptions3, change);
        },
        increase4(change) {
          this.progressOptions4 = this.increase(this.progressOptions4, change);
        },
        decrease4(change) {
          this.progressOptions4 = this.decrease(this.progressOptions4, change);
        },
        increase(value, change) {
          value += change;
          if(value > 100) {
            value = 100;
          }
          return value;
        },
        decrease(value, change) {
          value -= change;
          if(value < 0){
            value = 0;
          }
          return value;
        },
        color(percentage) {
          var second = 13 + percentage * 4;
          if(second > 255) {
            var first = 350 - percentage * 2;
            return `rgb(${first}, 255, 0)`;
          }
          return `rgb(255, ${second}, 0)`;
        },
      }
    }
</script>