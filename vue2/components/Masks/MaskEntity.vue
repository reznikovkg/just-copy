<template>
  <div class="mask_entity">
    <div
        v-for="(field, id) in fields"
        class="mask_entity__field"
        :class="{mask_entity__field__error: errors.includes(field.input_id)}"
    >
      <div class="mask_entity__label" >
        {{field.displayName}}
      </div>
      <input
          class="mask_entity__input"
          :id="field.input_id"
      >
    </div>
    <div
      class="mask_entity__validate_button"
      @click="validate"
    >
      Валидация
    </div>
  </div>
</template>

<script>
export default {
    name: "MaskEntity",
    data(){
      return {errors: []}
    },
    computed:{
        fields(){
          let fields = [];
          let id=0
          for (const key in this.$attrs){
            if (key.endsWith("_mask")) {
              const newField = {
                name: key.slice(0, key.length - 5),
                mask: this.$attrs[key],
                input_id: `${this._uid}_${id++}`
              }
              const displayName = newField.name.replace('_', ' ')
              newField.displayName = displayName.charAt(0).toUpperCase() + displayName.slice(1)
              fields.push(newField)
            }
          }
          return fields
        },
    },
    methods: {
      validate(){
        let newErrors = []
        for (const id in this.fields) {
          const field = this.fields[id]
          const text = document.getElementById(field.input_id).value
          if (!this.validateByMask(text, field.mask)){
            newErrors.push(field.input_id)
          }
        }
        this.errors = newErrors
      },
      validateByMask(text, mask){
        let textIndex = 0;
        let maskIndex = 0;
        const digits = "0123456789"

        while (maskIndex < mask.length) {
          switch (mask[maskIndex]){
            case "*":{
              if (maskIndex === mask.length - 1) {
                return true;
              }
              const nextMaskChar = mask[++maskIndex];
              while (textIndex < text.length){
                textIndex++;
                if (
                    (nextMaskChar === "#" && digits.includes(text[textIndex]))
                    || nextMaskChar === text[textIndex]
                ) {
                  break
                }
              }
              break
            }
            case "#":{
              if (!digits.includes(text[textIndex])){
                return false
              }
              while (digits.includes(text[textIndex]) && textIndex < text.length) {
                textIndex++
              }
              maskIndex++
              break
            }
            default: {
              if (textIndex >= text.length || text[textIndex] !== mask[maskIndex]) {
                return false;
              }
              textIndex++;
              maskIndex++;
            }
          }
        }
        return textIndex === text.length;
      },
    }
}
</script>

<style lang="less">
  @import "styles/style.less";
</style>