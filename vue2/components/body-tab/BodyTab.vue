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

<template>
 
<div class="BodyTab">
    <label>
      {{ this.description }}
    </label>
</div>
</template>

<style src="./css/style.css" scoped></style>