<template>
  <div class="tabs">
    <div class="tabs__wrapper">
      <div v-for="(tab, index) in tabs" :key="index">
        <button class="tabs__btn" @click="() => setDescription(tab)">
          {{ tab.name }}
        </button>
      </div>
    </div>
    <div class="tabs__body">
      <p>
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type:Array,
      required:true
    },
    content: {
      type:String,
      required:true
    }
  },
  methods: {
    setDescription(desk){
      this.$emit('switched',desk.content)
    }
  },
}
</script>

<style lang="less" scoped>
 @import 'styles/styles.less';
</style>
