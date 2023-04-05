<script>
export default {
  data() {
    return {
      tempValue: 0,
    };
  },
  props: {
    StasValueInput: {
      type: Number,
      default: 0,
      required: false,
    },
    max: {
      type: Number,
      default: Number.POSITIVE_INFINITY,
      required: false,
    },
    min: {
      type: Number,
      default: Number.NEGATIVE_INFINITY,
      required: false,
    },
    step: {
      type: Number,
      default: 1,
      required: false,
    },
  },
  computed: {
    isLockPlus() {
      return this.max <= Number(this.tempValue.toFixed(2));
    },
    isLockMinus() {
      return this.min >= Number(this.tempValue.toFixed(2));
    },
    inp() {
      return Number(this.tempValue.toFixed(2));
    },
  },
  mounted() {
    this.tempValue = this.StasValueInput;
  },
  methods: {
    valInp(event) {
      const parsedValue = parseFloat(event.target.value);
      if (isNaN(parsedValue)) {
        event.target.value = this.tempValue;
      } else {
        if (parsedValue <= this.max && parsedValue >= this.min)
          this.tempValue = parsedValue;
        else this.tempValue = parsedValue < this.min ? this.min : this.max;
      }
      this.$emit("create", Number(this.tempValue));
    },
    increment() {
      const step = Number(this.step);
      if (!this.isLockPlus) {
        this.tempValue += step;
        this.$emit("create", this.tempValue);
      }
    },
    decrement() {
      const step = Number(this.step);
      if (!this.isLockMinus) {
        this.tempValue -= step;
        this.$emit("create", this.tempValue);
      }
    },
  },
};
</script>

<template>
  <div class="value-input">
    <button
      :class="{ 'value-input__operation-active': isLockMinus }"
      class="value-input__operation"
      @click="decrement"
    >
      -
    </button>
    <input
      :value="inp"
      type="text"
      @keyup.enter="valInp"
      @blur="valInp"
      class="value-input__value"
    />
    <button
      :class="{ 'value-input__operation-active': isLockPlus }"
      class="value-input__operation"
      @click="increment"
    >
      +
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "./styles/style.scss";
</style>
