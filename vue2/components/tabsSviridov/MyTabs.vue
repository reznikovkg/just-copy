<template>
  <div class="tabs">
    <div class="tabs__wrapper">
      <div v-for="tab in tabs" v-bind:key="tab.id">
        <button class="tabs__wrapper-btn" @click="() => setDescription(tab)">
          {{ tab.name }}
        </button>
      </div>
    </div>
    <div class = "tabs__body">
        <p>
          {{ this.activeDescription }}
        </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type:Array,
      required:true,
    },
  },
  data() {
    return {
      activeDescription: null
    }
  },
  methods: {
    setDescription(desk){
      this.activeDescription=desk.content;

    }
  },
  mounted() {
    this.activeDescription = this.tabs[0].content;
  }
}
</script>

<style lang="less" scoped>
 @import 'styles/styles.less';
</style>
