
# RangeInput

This component allows to implement numeric input with minimum and maximum value restrictions 
## RangeInput
```js
<script>
import NumberInput from "../button/NumberInput.vue"

export default {
  components: {
    NumberInput
  },
  props:{
    maxValue:{
      default:10,
      required:false,
    },
    minValue:{
      default:-10,
      required:false,
    }
  },
  data(){
    return {
        max:this.maxValue,
        min:this.minValue
        
    }
  },
  methods:{
  setMax(max){
    this.max = max;
  },
  setMin(min){
    this.min = min;
  }
}

}
</script>

<template>
  <div class="num-input-container">
    <NumberInput :fixed="2" :step="0.1" :max="max" :min="min"/>
    max<NumberInput :valueInput="max" @create="setMax"></NumberInput>
    min<NumberInput :valueInput="min" @create="setMin"></NumberInput>
  </div>
</template>

<style  src="./css/style.css" scoped>

</style>
```

## NumberInput

```js
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
  ```
![фоточка](https://github.com/kirill-vatutin/just-copy/blob/number-input/vue2/components/range-input/DocAssets/2023-04-01_23-42-15.png)  
![фоточка2](https://github.com/kirill-vatutin/just-copy/blob/number-input/vue2/components/range-input/DocAssets/2023-04-01_23-41-36.png)  
![фоточка3](https://github.com/kirill-vatutin/just-copy/blob/number-input/vue2/components/range-input/DocAssets/2023-04-01_23-42-45.png)  


