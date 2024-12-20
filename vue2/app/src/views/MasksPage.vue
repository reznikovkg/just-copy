<template>
  <div style="width: 300px">
    <MaskEntity primary_field_mask="Ent #*" email_mask="*@*.*" />
  </div>
</template>

<script>
import MaskEntity from "../../../components/Masks/MaskEntity.vue";

export default {
    name: "MasksPage",
    components: { MaskEntity },
}
</script>
