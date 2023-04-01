<template>
    <div class="number-input">
        <button :class="{ 'number-input__operation-active': isLockMinus }"
                class="number-input__operation"
                @click="decrement">-</button>
        <input  :value="current"
                type="text"
                @keyup.enter="formattedValue"
                @blur="formattedValue"
                class="numper-input__value" />
        <button :class="{'number-input__operation-active': isLockPlus }"
                class="number-input__operation"
                @click="increment">+
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            localValue: this.valueInput,
        }
    },
    props: {
        fixed: {
            type: Number,
            default: 0,
            required: false,
        },
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
            return this.max <= Number(this.localValue.toFixed(this.fixed));
        },
        isLockMinus() {
            return this.min >= Number(this.localValue.toFixed(this.fixed));
        },
        current() {
            return Number(this.localValue.toFixed(this.fixed));
        },
    },
    methods: {
        formattedValue(event) {
            const parsedValue = parseFloat(event.target.value);
            if (isNaN(parsedValue)) {
                event.target.value = this.localValue;
            }
            else {
                if (parsedValue <= this.max && parsedValue >= this.min) this.localValue = parsedValue;
                else this.localValue = parsedValue < this.min ? this.min : this.max;
            }
            this.$emit("create", Number(this.localValue));
        },
        increment() {
            const step = Number(this.step);
            if (!this.isLockPlus){
            this.localValue += step;
            this.$emit("create", this.localValue);
            }
        },
        decrement() {
            const step = Number(this.step);
            if (!this.isLockMinus){ 
            this.localValue -= step;
            this.$emit("create", this.localValue);
            }
        },

    },
}

</script>

<style src="./css/style.css" scoped></style>
  