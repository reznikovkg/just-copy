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
  },
  data() {
    return {
      max: this.maxValue,
      min: this.minValue,
    };
  },
  methods: {
    setMax(max) {
      this.max = max;
    },
    setMin(min) {
      this.min = min;
    },
  },
};
</script>

<template>
  <div class="val-input-container">
    <StasValueInput :step="0.1" :max="max" :min="min" />
    maximum:<StasValueInput :StasValueInput="max" @create="setMax" />
    minimum:<StasValueInput :StasValueInput="min" @create="setMin" />
  </div>
</template>


<style lang="scss" scoped>
.val-input-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

</style>
