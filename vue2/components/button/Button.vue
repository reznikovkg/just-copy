<script >

export default{
  props:{
    tab:{
       default: "",
       required: false
    }
  },
  methods:{
    click(){
      this.$emit("create",this.tab)
    }
  }
}
</script>

<template>
  <button class="btn" @click="click">
    
    {{ this.tab }}
  </button>
</template>

<style src="./css/style.css" scoped>
</style>
