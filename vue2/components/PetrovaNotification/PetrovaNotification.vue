<template>
  <div v-if="notifications.length > 0" class="notification__container">
    <PetrovaNotificationItem v-for="notification in notifications" :notification="notification" :key="notification.id" />
  </div>
</template>

<script>
import PetrovaNotificationItem from "./PetrovaNotificationItem.vue";

export default {
  name: 'PetrovaNotification',
  components: { PetrovaNotificationItem },
  props: {
    notifications: [],
  }
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
