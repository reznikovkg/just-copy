<template>
  <div class = "container">
    <div class = "tab" >
      <div v-for = "tab in tabs_desc" v-bind:key = "tab">
        <button v-if = "tab[0] == activeTab" class = "tab__button active" @click="setDescription(tab)">{{ tab[0] }}</button>
        <button v-else class = "tab__button" @click="setDescription(tab)">{{ tab[0] }}</button>
      </div>
    </div>
    <div class = "tab__description">
        <h3>{{ this.activeTab }}</h3>
        <p>{{ this.activeDescription }}</p>
    </div>
  </div>
</template>
<script >
  export default {
    data(){
      return {
        activeTab: this.tabs_desc[0][0],
        activeDescription: this.tabs_desc[0][1],
      }
    },
    props:{
      tabs_desc:{
        type: Array,
        requared: true,
      }
    },
    methods: {
      setDescription(tab){
        this.activeDescription = tab[1];
        this.activeTab = tab[0];
      }
    },
  }
</script> 
<style src = "./css/style.css" scoped>
</style>
