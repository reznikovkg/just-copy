<template>
  <div class="tabs">
    <div class="tabs-wrapper">
      <div v-for="tab in tabs" v-bind:key="tab.id">
        <button class="btn" @click="setDescription(tab)">
          {{ tab.name }}
        </button>
      </div>
    </div>
    <div class="BodyTab">
        <p>
          {{ this.activeDescription }}
        </p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      activeDescription:this.tabs[0].content,
    }
  },
  props:{
    tabs:{
      type:Array,
      requared:true,
    },
  },
  methods: {
    setDescription(desk){
      this.activeDescription=desk.content;
    }
  }
}
</script>
<style src="./css/style.css" scoped></style>