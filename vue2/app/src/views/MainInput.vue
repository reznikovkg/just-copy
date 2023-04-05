<template>
  <div class="val-input-container">
    <ValueInput
      v-model="value"
      @create="setValue"
      :step="0.1"
      :max="max"
      :min="min"
    />
    Min:<ValueInput :value="min" @create="setMin" /> Max:<ValueInput
      :value="max"
      @create="setMax"
    />
  </div>
</template>

<script>
import ValueInput from "../../../components/value-input/ValueInput.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    ValueInput,
  },
  methods: {
    ...mapActions("mainInput", {
      setMax: "setMaxValue",
      setMin: "setMinValue",
      setValue: "setValue",
    }),
  },
  computed: {
    ...mapGetters("mainInput", {
      value: "getValue",
      max: "getMax",
      min: "getMin",
      step: "getStep",
    }),
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
