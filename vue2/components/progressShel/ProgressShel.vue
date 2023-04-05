<template>
  <div class="progress">
    <div 
      class="progress__outer" 
      :style="{
        width: `${progressWidth}px`,
        height: `${progressHeight}px`,
        background: innerStrokeColor
      }"
    >
      <div 
        class="progress__inner" 
        :style="{
          height: `${progressHeight}px`,
          width: `${currValue}%`,
          background: `${colorFunc(currValue)}`,
          transition: `${changeTime}s ${timingFunction}`
        }"
      >
      </div>
    </div>
    <div 
      class="progress__text" 
      :style="{
        display: showTip === false ? 'none' : '',
        color: `${textColor}`
      }"
    >
      {{ percent }}%
    </div>
  </div>
</template>
  
<script>
  export default {
    name: "ProgressShel",
    model: {
      prop: 'value',
      event: 'change'
    },
    props: {
      value: Number,
      textColor: String,
      innerStrokeColor: String,
      progressHeight: Number,
      progressWidth: Number,
      showTip: {
        type: Boolean,
        default: true
      },
      changeTime: {
        type: Number,
        default: 0.3
      },
      colorFunc: {
        type: Function,
        default: function () {
          return `hsl(${this.currValue * 1.2} 50% 50%)`;
        }
      },
      timingFunction: {
        type: String,
        default: "linear"
      }
    },
    data() {
      return {
        currValue: this.value
      }
    },
    computed: {
      percent() {
        return this.currValue.toFixed()
      },
    },
    methods: {
      changePercentage(change) {
        this.currValue = this.currValue + change;
        if(this.currValue > 100)
          this.currValue = 100;
        if(this.currValue < 0)
          this.currValue = 0;
        this.$emit("change", this.currValue);
      }
    }
  };
  </script>
  
  <style scoped lang="less">  
  @import "styles/styles.less";
  </style>