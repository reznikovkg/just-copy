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
      @keyup.enter="validate"
      @blur="validate"
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

<script>
export default {
  props: {
    value: {
      type: Number,
      required: true,
    },
    max: {
      type: Number,
      required: true,
    },
    min: {
      type: Number,
      required: true,
    },
    step: {
      type: Number,
      required: true,
    },
  },
  computed: {
    isLockPlus() {
      return this.max <=this.inp;
    },
    isLockMinus() {
      return this.min >=this.inp;
    },
    inp() {
      return +(this.value.toFixed(2))
      ;
    },
  },
  methods: {
    validate(event) {
      const value = +event.target.value;
      if (isNaN(value)) {
        event.target.value = this.value;
      } 
      else {
        if (value <= this.max && value >= this.min)
        this.$emit("change", +value);
        else  this.$emit("change", +value < this.min ? this.min : this.max);
      }
    },
    increment() {
      if (!this.isLockPlus) {
        this.$emit("create", this.inp+(+this.step));
      }
    },
      decrement() {
        if (!this.isLockMinus) {
          this.$emit("create", this.inp-(+this.step));
        }
    },
  },
};
</script>



<style lang="scss" scoped>
@import "./styles/style.scss";
</style>