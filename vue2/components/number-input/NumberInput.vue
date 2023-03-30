<script>
export default {
    data() {
        return {
            localValue: this.valueInput,
        }
    },
    props: {
        fixed: {
            type:Number,
            default: 0,
            required: false,
        },
        valueInput: {
            type:Number,
            default: 0,
            required: false,
        },
        max: {
            type:Number,
            default: Number.POSITIVE_INFINITY,
            required: false
        },
        min: {
            type:Number,
            default: Number.NEGATIVE_INFINITY,
            required: false
        },
        step: {
            type:Number,
            default: 1,
            required: false
        }
    },
    computed: {
        isLockPlus: function () {
            return this.max <= Number(this.localValue.toFixed(this.fixed));
        },
        isLockMinus: function () {
            return this.min >= Number(this.localValue.toFixed(this.fixed));
        },
        current:function(){
            return Number(this.localValue.toFixed(this.fixed));
        }

    },
    methods: {
        formattedValue(event,l) {
            
            const parsedValue = parseFloat(event.target.value);
            if (isNaN(parsedValue)){
                event.target.value=this.localValue;
            }
            else if (parsedValue<this.min ) {
              this.localValue=this.min;
            }else if (parsedValue>this.max) {
                this.localValue=this.max;
            }
            else this.localValue=parsedValue;
            this.$emit("create", Number(this.localValue));
        },

        increment() {
            const fixed = this.fixed;
            const stepNumber = Number(this.step);
            const value = Number(this.localValue);
            if (Number(value.toFixed(fixed)) + stepNumber <= Number(this.max)) {
                this.localValue += stepNumber;
                this.$emit("create", this.localValue);
            }
        },
        decrement() {
            const fixed = this.fixed;
            const stepNumber = Number(this.step);
            const value = Number(this.localValue);
            if (Number(value.toFixed(fixed)) - stepNumber >= Number(this.min)) {
                this.localValue -= stepNumber;
                this.$emit("create", this.localValue);
            }
        },

    },
}
</script>
<template>
    <div class="number-input">

        <button :class="{ active: isLockMinus }" class="operation " @click="decrement">-</button>
        <input :value="current" type="text"
            @keyup.enter="formattedValue" @blur="formattedValue" class="value" />
        <button :class="{ active: isLockPlus }" class="operation" @click="increment">+</button>
    </div>
</template>


<style src="./css/style.css" scoped></style>
  