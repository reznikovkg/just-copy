<template>
    <div class="number-input">
        <button :class="{ 'number-input__operation--active': isLockMinus }"
                class="number-input__operation"
                @click="decrement">-</button>
        <input :value="current"
               @keyup.enter="formattedValue"
               @blur="formattedValue" type="text"
            class="number-input__value" />
        <button :class="{ 'number-input__operation--active': isLockPlus }"
                class="number-input__operation"
                @click="increment">+
        </button>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Number,
            default: 0,
            required: false,
        },
        max: {
            type: Number,
            default: Number.POSITIVE_INFINITY,
            required: false
        },
        min: {
            type: Number,
            default: Number.NEGATIVE_INFINITY,
            required: false
        },
        step: {
            type: Number,
            default: 1,
            required: false
        }
    },
    computed: {
        isLockPlus() {
            return this.max <= Number(this.value.toFixed(2));
        },
        isLockMinus() {
            return this.min >= Number(this.value.toFixed(2));
        },
        current() {
            return Number(this.value.toFixed(2));
        },
    },
    methods: {
        formattedValue(event) {
            const parsedValue = parseFloat(event.target.value);
            if (isNaN(parsedValue)) {
                event.target.value = this.current;
            }
            else {
                if (parsedValue <= this.max && parsedValue >= this.min) this.value = parsedValue;
                else this.$emit("change", Number(parsedValue < this.min ? this.min : this.max));
            }
        },
        increment() {
            const step = Number(this.step);
            if (!this.isLockPlus) {
                this.$emit("create", this.value + step);
            }
        },
        decrement() {
            const step = Number(this.step);
            if (!this.isLockMinus) {
                this.$emit("create", this.value - step);
            }
        },
    },
}

</script>
<style lang="scss" scoped>
@import "./styles/style.scss";
</style>

