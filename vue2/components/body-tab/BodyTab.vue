<template>
    <div class="BodyTab">
        <label>
          {{ this.description }}
        </label>
    </div>
    </template>
<script>
export default{
    props:{
        description:{
            required:false,
            default:"Для данного элемента не нашлось описания"
        }
    }
}
</script>
<style src="./css/style.css" scoped></style>