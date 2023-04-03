<template>
    <div class="number-input">
        <button :class="{ 'number-input__operation--active': isLockMinus }"
                 class="number-input__operation"
                @click="decrement">-</button>
        <input :value="current" type="text"
               @keyup.enter="formattedValue"
               @blur="formattedValue"
            class="numper-input__value" />
        <button :class="{ 'number-input__operation--active': isLockPlus }"
                 class="number-input__operation"
                @click="increment">+
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 0,
        }
    },
    props: {
        valueInput: {
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
    mounted() {
        this.value = this.valueInput;
    },
    methods: {
        formattedValue(event) {
            const parsedValue = parseFloat(event.target.value);
            if (isNaN(parsedValue)) {
                event.target.value = this.value;
            }
            else {
                if (parsedValue <= this.max && parsedValue >= this.min) this.value = parsedValue;
                else this.value = parsedValue < this.min ? this.min : this.max;
            }
            this.$emit("create", Number(this.value));
        },
        increment() {
            const step = Number(this.step);
            if (!this.isLockPlus) {
                this.value += step;
                this.$emit("create", this.value);
            }
        },
        decrement() {
            const step = Number(this.step);
            if (!this.isLockMinus) {
                this.value -= step;
                this.$emit("create", this.value);
            }
        },
    },
}

</script>
<style lang="scss" scoped>
@import "./styles/style.scss";
</style>