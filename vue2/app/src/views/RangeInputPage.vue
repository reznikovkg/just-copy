<template>
  <div class="num-input-container">
    <NumberInput v-model.lazy="current"
                 @create="setCurrent"
                 :step="step"
                 :max="max" 
                 :min="min" />
    max
    <NumberInput :value="max"
                 @create="setMax"/>
    min
    <NumberInput :value="min"
                 @create="setMin"/>
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
        setMin: 'setMinValue',
        setCurrent:'setCurrentValue'
      }),
  },
  computed: {
    ...mapGetters('range',
      {
        current:'getCurrent',
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