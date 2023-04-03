<template>
  <div class="notification-container">
    <NotificationComponent
      v-for="item in getNotifications"
      :key="item.id"
      :content="item.content"
      width="350"
    />
  </div>
</template>

<script>
import {  mapGetters } from "vuex";
import NotificationComponent from "../Notification/NotificationComponent.vue";

export default {
  components: { NotificationComponent },
  computed: {
    ...mapGetters("notificationsExp", [
        "getNotifications",
    ]),
  },
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
