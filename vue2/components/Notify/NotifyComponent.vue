<template>
  <div class="notification-container">
    <notification
      v-for="item in notifications"
      :key="item.id"
      :content="item.content"
      :width="350"
    >
    </notification>
  </div>
</template>

<script>
import NotificationComponent from "../Notification/NotificationComponent.vue";

export default {
  components: {
    notification: NotificationComponent,
  },

  props: {
    notifications: {
      type: Array,
      default: [],
    },
  },

  data() {
    return {};
  },
  methods: {
    hideNotification(id) {
      this.list = this.list.filter((x) => x.id != id);
    },
  },
};
</script>

<style scoped lang="less">
@import "styles.less";
</style>
