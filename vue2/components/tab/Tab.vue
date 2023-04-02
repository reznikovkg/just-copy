<template>
    <div class="container">
      <div class="tab" >
        <div v-for="tab in content" v-bind:key="tab.id">
          <button class="tab__button" :class="{'tab__button__active':tab[0]==activeTab}" @click="()=>setDescription(tab)">{{ tab[0] }}</button>
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
          activeTab: null,
          activeDescription: null,
        }
      },
      methods: {
        setDescription(tab){
          this.activeDescription = tab[1];
          this.activeTab = tab[0];
        }
      },
      mounted()
      {
        this.activeTab = this.content[0][0];
        this.activeDescription = this.content[0][1];
      }
    }
  </script> 
  <style lang="less" scoped>
    @import 'style/style.less';
  </style>
  