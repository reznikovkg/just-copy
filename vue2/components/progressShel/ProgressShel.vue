<template>
    <div class="progress-bar">
      <div class="progress-bar__outer" :style="outerBlockStyle">
          <div class="progress-bar__inner" :style="innerStyle"></div>
      </div>
      <div class="progress-bar__text" :style="textStyle">
        {{ percent }}%
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProgressShel",
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
      },
      changeTime: {
        type: Number,
        required: false,
        default: 0.3
      },
      timingFunction: {
        type: String,
        required: false,
        default: "linear"
      }
    },
    data() {
      return {
        currValue: this.value
      }
    },
    model: {
      prop: 'value',
      event: 'click'
    },
    computed: {
      percent() {
        return this.currValue.toFixed()
      },
      innerStyle() {
        return {
          height: `${this.height}px`,
          width: `${this.currValue}%`,
          background: `${this.colorFunc === null ? this.color() : this.colorFunc(this.currValue)}`,
          transition: `${this.changeTime}s ${this.timingFunction}`
        };
      },
      outerBlockStyle() {
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
      }
    },
    methods: {
      color() {
        return "red";
      },
      increase(change) {
        this.currValue = this.currValue + change > 100 ? 100 : this.currValue + change;
        this.$emit("change", this.currValue);
      },
      decrease(change) {
        this.currValue = this.currValue - change < 0 ? 0 : this.currValue - change;
        this.$emit("change", this.currValue);
      }
    }
  };
  </script>
  
  <style scoped lang="less">  
  @import "styles/styles.less";
  </style>