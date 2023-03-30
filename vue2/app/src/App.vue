<script >

import MyTabs from "../../components/tabs/MyTabs.vue" //"./components/tabs/MyTabs.vue"
export default {
  components:{
    MyTabs
  },
  data() {
      return {
        tabs:["Профиль","Избранное","Настройки"],
        description:["Информация о профиле!","Информация об избранном!"],
      }
  },
}

</script>

<template>
  <div>
    <MyTabs :tabs="tabs" :description="description"></MyTabs>
  </div>
</template>

<style scoped></style>
