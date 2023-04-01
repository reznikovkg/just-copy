<template>
  <div class="num-input-container">
    <NumberInput :fixed="2" :step="0.1" :max="max" :min="min"/>
    max<NumberInput :valueInput="max" @create="setMax"></NumberInput>
    min<NumberInput :valueInput="min" @create="setMin"></NumberInput>
  </div>
</template>

<script>
import NumberInput from "../number-input/NumberInput.vue"
export default {
  components: {
    NumberInput,
  },
  props:{
    maxValue:{
      default:10,
      required:false,
    },
    minValue:{
      default:-10,
      required:false,
    }
  },
  data(){
    return {
        max:this.maxValue,
        min:this.minValue,  
    }
  },
  methods:{
  setMax(max){
    this.max = max;
  },
  setMin(min){
    this.min = min;
  }
}
}
</script>

<style lang="scss" scoped>
   @import "./styles/style.scss";
</style>