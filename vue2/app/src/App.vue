<template>
  <MyTabs :tabs="tabs" :description="description"></MyTabs>
 </template>
<script >
import MyTabs from "../../components/tabs/MyTabs.vue"
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
<style scoped></style>
