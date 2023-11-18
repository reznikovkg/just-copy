<template>
  <div class="notification-container" v-if="getNotifications.length > 0">
    <PetrovaNotificationItem v-for="notification in getNotifications" :notification="notification" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PetrovaNotificationItem from "./PetrovaNotificationItem.vue";

export default {
  components: { PetrovaNotificationItem },
  computed: {
    ...mapGetters("petrovaNotification", [
      "getNotifications",
    ])
  }
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
