<template>
  <div class="tab">
    <div class="tab__buttons" >
      <div v-for="(tab, index) in content" :key="index">
        <button class="tab__button" 
          :class="{'tab__button__active':tab[0]==activeTab}" 
          @click="()=>setDescription(tab)">
            {{ tab[0] }}
        </button>
      </div>
    </div>
    <div class="tab__description">
      <h3>{{ this.activeTab }}</h3>
      <p>{{ this.activeDescription }}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Tab',
    props: {
      content: {
        type: Array,
        required: true,
      }
    },
    data() {
      return {
        activeTab: null,
        activeDescription: null,
      }
    },
    methods: {
      setDescription(tab) {
        this.activeDescription = tab[1];
        this.activeTab = tab[0];
      }
    },
    mounted() {
      if(this.content.length == 0) {
        this.activeTab = 'Нет данных';
        this.activeDescription = 'Нет данных.';
      }
      else {
        this.activeTab = this.content[0][0];
        this.activeDescription = this.content[0][1];
      }
    }
  }
</script> 

<style lang="less" scoped>
  @import 'style/style.less';
</style>
