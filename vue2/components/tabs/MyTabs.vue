<script >

import Button from "../button/Button.vue" //'../button/Button.vue'
import BodyTab from "../body-tab/BodyTab.vue" //'../body-tab/BodyTab.vue'
export default {
  components:{
    Button,
    BodyTab
  },
  data(){
    return {
      activeDescription:this.description[0],
    }
  },
  props:{
    tabs:{
      type:Array,
      requared:true,
     
    },

    description:{
      type:Array,
      requared:true,
    
    }
  },
  
  methods: {
    setDescription(desk){
      this.activeDescription= this.description[this.tabs.indexOf(desk)];
    }
  },
}

</script>
<template>
    <div class="tabs">
      <div class="tabs-wrapper">
        <div v-for="tab in tabs" v-bind:key="tab.id">
          <Button  @create="setDescription" :tab="tab"></Button>
        </div>
      </div>
      <BodyTab class="BodyTab" :description="activeDescription"></BodyTab>
    </div>
  </template>
  
<style src="./css/style.css" scoped>

</style>
