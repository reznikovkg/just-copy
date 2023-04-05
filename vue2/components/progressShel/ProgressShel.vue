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
      showTip: Boolean,
      changeTime: {
        type: Number,
        default: 0.3
      },
      colorFunc: {
        type: Function,
        default: function () {
          return 'red'
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
      increase(change) {
        this.currValue = this.currValue + change;
        if(this.currValue > 100)
          this.currValue = 100;
        this.$emit("change", this.currValue);
      },
      decrease(change) {
        this.currValue = this.currValue - change;
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