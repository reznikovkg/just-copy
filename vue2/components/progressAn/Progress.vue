<template>
  <div class="progress-bar" :style="containerStyle">
    <div class="progress-bar__outer" :style="innerBlockStyle">
        <div class="progress-bar__inner" :style="innerStyle"></div>
    </div>
    <div class="progress-bar__text" :style="textStyle">
      {{ percent }}%
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    value: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 10
    },
    width: {
      type: Number,
      default: 200
    },
    showTip: {
      type: Boolean,
      required: false,
      default: true
    },
    colorFunc: {
      type: Function,
      required: false,
      default: null
    },
    innerStrokeColor: {
      type: String,
      required: false,
      default: "#d6efff"
    }
  },
  model: {
    prop: 'value',
    event: 'change'
  },
  computed: {
    percent() {
      return this.value.toFixed()
    },
    innerStyle() {
      return {
        height: `${this.height}px`,
        width: `${this.value}%`,
        background: `${this.colorFunc === null ? this.color() : this.colorFunc(this.value)}`
      };
    },
    innerBlockStyle() {
      return {
        width: `${this.width}px`,
        height: `${this.height}px`,
        background: this.innerStrokeColor
      };
    },
    textStyle() {
      if(this.showTip === false) {
        return {
          display: 'none'
        }
      }
      else return {}
    },
    containerStyle() {
      return {
        width: `${this.width}px`
      };
    }
  },
  methods: {
    color() {
      return "rgb(119,255,0)";
    },
    increase(change) {
      this.$emit(
        'change',
        this.value + change > 100 ? 100 : this.value + change
      )
    },
    decrease(change) {
      this.$emit(
        'change',
        this.value - change < 0 ? 0 : this.value - change
      )
    },
  }
};
</script>

<style scoped lang="less">  
@import "styles/styles.less";
</style>