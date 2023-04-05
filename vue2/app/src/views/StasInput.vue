<template>
  <div class="val-input-container">
    <StasValueInput 
      :value="current" 
      :step="0.1" 
      :max="max" 
      :min="min" 
      @change="(v)=>setCurrentValue(v)" 
      @create="(v)=>setCurrentValue(v)" />
    max:<StasValueInput 
      :value="max" 
      :step="1" 
      :max="inf" 
      :min="nInf" 
      @create="(v)=>setMax(v)" />
    min:<StasValueInput 
      :value="min" 
      :step="1" 
      :max="inf" 
      :min="nInf" 
      @create="(v)=>setMin(v)" />
  </div>
</template>
<script>
import StasValueInput from "../../../components/stasValueInput/StasValueInput.vue";
export default {
  components: {
    StasValueInput,
  },
  props: {
    maxValue: {
      default: 10,
      required: false,
    },
    minValue: {
      default: -10,
      required: false,
    },
    value: {
      default: 0,
      required: false,
    },
  },
  data() {
    return {
      current:this.value,
      max: this.maxValue,
      min: this.minValue,
      inf:Number.POSITIVE_INFINITY,
      nInf:Number.NEGATIVE_INFINITY,
    };
  },
  methods: {
    setMax(max) {
      this.max = max;
    },
    setMin(min) {
      this.min = min;
    },
    setCurrentValue(current){
      this.current=current;
    }
  },
};
</script>

<style lang="scss" scoped>
.val-input-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
</style>
