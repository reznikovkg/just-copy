<template>
  <div class="num-input-container">
    <NumberInput :step="step" :max="max" :min="min" />
    max<NumberInput :valueInput="max" @create="setMax"></NumberInput>
    min<NumberInput :valueInput="min" @create="setMin"></NumberInput>
  </div>
</template>

<script>
import NumberInput from "../../../components/number-input/NumberInput.vue"
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    NumberInput,
  },
  methods: {
    ...mapActions('range',
      {
        setMax: 'setMaxValue',
        setMin: 'setMinValue'
      }),
  },
  computed: {
    ...mapGetters('range',
      {
        max: 'getMax',
        min: 'getMin',
        step: 'getStep'
      }),
  }
}
</script>

<style lang="scss" scoped>
.num-input-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>