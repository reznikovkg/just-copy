<template>
  <div class="val-input-container">
    <ValueInput v-model="value" :step="0.1" :max="max" :min="min" />
    Min:<ValueInput :valueInput="min" @create="setMin"></ValueInput>
    Max:<ValueInput :valueInput="max" @create="setMax"></ValueInput>
  </div>
</template>

<script>
import ValueInput from "../value-input/ValueInput.vue"
export default {
  components: {
    ValueInput,
  },
  props: {
    value:{
		  default:0,
		  required:false
	  },
    maxValue: {
      default: 10,
      required: false,
    },
    minValue: {
      default: -10,
      required: false,
    }
  },
  data() {
    return {
      max: this.maxValue,
      min: this.minValue,
    }
  },
  methods: {
    setMax(max) {
      this.max = max;
    },
    setMin(min) {
      this.min = min;
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./styles/style.scss";
</style>