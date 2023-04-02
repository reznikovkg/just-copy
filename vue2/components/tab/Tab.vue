<template>
  <div class="container">
    <div class="tab" >
      <div v-for="tab in content" v-bind:key="tab.id">
        <button v-if="tab[0]==activeTab" class="tab-button active" @click="()=>setDescription(tab)">{{ tab[0] }}</button>
        <button v-else class="tab-button" @click="()=>setDescription(tab)">{{ tab[0] }}</button>
      </div>
    </div>
    <div class="tab-description">
        <h3>{{ this.activeTab }}</h3>
        <p>{{ this.activeDescription }}</p>
    </div>
  </div>
</template>
<script >
  export default {
    props:{
      content:{
        type: Array,
        required: true,
      }
    },
    data(){
      return {
        activeTab: this.content[0][0],
        activeDescription: this.content[0][1],
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
<style lang="scss" scoped>
  @import '../tab/scss/style.scss';
</style>
