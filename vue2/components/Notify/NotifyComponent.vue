<template>
  <div class="notification-container">
    <notification
      v-for="item in getNotifications()"
      :key="item.id"
      :content="item.content"
      :width="'350'"
    >
    </notification>
  </div>
</template>

<script>
import {  mapGetters } from "vuex";
import NotificationComponent from "../Notification/NotificationComponent.vue";

export default {
  components: {
    notification: NotificationComponent,
  },


  data() {
    return {};
  },
  methods: {
    hideNotification(id) {
      this.list = this.list.filter((x) => x.id != id);
    },
    ...mapGetters("notifications", [
      "getNotifications",
    ]),
  },
};
</script>

<style scoped lang="less">
@import "styles.less";
</style>
