<template>
  <div id="app">
    <MyPage />
  </div>
</template>

  
<script>
import MyPage from "@/components/MyPage.vue";

export default {
  components: {
    MyPage,
  },
};
</script>

 
<style scoped>
/* Импорт файла со стилями */
@import "@/styles.css";
</style>