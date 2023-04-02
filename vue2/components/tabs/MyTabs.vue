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
      activeDescription:this.tabs[0].content
    }
  },
  methods: {
    setDescription(desk){
      this.activeDescription=desk.content;

    }
  }
}
</script>

<style lang="scss" scoped>
 @import '../tabs/scss/style.scss';
</style>
