<template>
    <div role="progressbar" 
         aria-valuenow="50" 
         aria-valuemin="0" 
         aria-valuemax="100" 
         class="el-progress el-progress--line">
        <div class="el-progress-bar">
            <div class="el-progress-bar__outer">
                <div class="el-progress-bar__inner" :style="progressStyle" ></div>
            </div>
        </div>
        <div class="el-progress__text">
          {{ progressValue }}%
        </div>
        <button id="decrement" @click="decrement">
          -10
        </button>
        <button id="increment" @click="increment">
          +10
        </button>
    </div>
</template>

<script>
export default {
  name: 'ProgressBar',
  data () {
    return {
      progressValue: 10,
    }
  },
  computed: {
    progressStyle() {
     return {
       width: `${this.progressValue}%`,
       backgroundColor: `hsl(${this.progressValue}, 100%, 50%)`,
     };
   }
  },
  methods: {
   increment() {
     if (this.progressValue < 100) {
       this.progressValue += 10;
     }
   },
   decrement() {
     if (this.progressValue > 0) {
       this.progressValue -= 10;
     }
   }
 }
}
</script>


<style scoped lang="less">
div {
   display: block;
   margin-bottom: 1;

   &.el-progress {
       position: relative;
       line-height: 1;

       &-bar {
           padding-right: 50px;
           display: inline-block;
           vertical-align: middle;
           width: 100%;
           margin-right: -55px;
           box-sizing: border-box;

           &__outer {
               height: 6px;
               border-radius: 100px;
               background-color: #ebeef5;
               overflow: hidden;
               position: relative;
               vertical-align: middle;
           }

           &__inner {
               position: absolute;
               left: 0;
               top: 0;
               height: 100%;
               text-align: right;
               border-radius: 100px;
               line-height: 1;
           }
       }

       &__text {
           font-size: 14.4px;
           color: rgb(96, 98, 102);
           display: inline-block;
           vertical-align: middle;
           margin-left: 10px;
           line-height: 1;
       }
   }
}
</style>