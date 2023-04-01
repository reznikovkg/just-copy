<template>
  <div>
    <MyTabs :tabs="tabs"/>
  </div>
</template>

<script>
import MyTabs from "../../components/tabs/MyTabs.vue"
export default {
  components: {
    MyTabs
  },
  data() {
      return {
        tabs:[{name: 'Профиль', content: 'Информация о профиле!'},
        {name: 'Избранное', content: 'Информация об избранном!'},
        {name: 'Настройки', content: 'Информация о настройках!'}
        ]
      }
  },
}
</script>