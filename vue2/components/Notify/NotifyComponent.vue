<template>
  <div class="notification-container">
    <NotificationComponent
      v-for="item in getNotifications"
      :key="item.id"
      :content="item.content"
      :width="'350'"
    >
    </NotificationComponent>
  </div>
</template>

<script>
import {  mapGetters } from "vuex";
import NotificationComponent from "../Notification/NotificationComponent.vue";
import NotificationComponent from "../Notification/NotificationComponent.vue";

export default {
    computed: {
        ...mapGetters("notifications", [
            "getNotifications",
        ]),
    },
    components: { NotificationComponent }
};
</script>

<style scoped lang="less">
@import "styles.less";
</style>
