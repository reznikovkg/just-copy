<template>
  <Transition appear name="slide-fade" @after-leave="afterLeave">
    <div class="notification notification-default-theme notification-show" v-if="show">
      <div class="notification-header">{{ notification.title }}</div>
      <div class="notification-description">{{ notification.description }}</div>
      <button class="notification-close close-button" type="button" @click="() => safeDelete()"></button>
    </div>
  </Transition>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    notification: {},
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    ...mapActions("petrovaNotification", [
      "deleteNotification"
    ]),
    safeDelete() {
      console.log("safeDelete");
      this.show = false;
    },
    afterLeave() {
      console.log("afterLeave");
      this.deleteNotification(this.notification.id);
    }
  },
  mounted() {
    setTimeout(() => {
      this.safeDelete();
    }, this.notification.interval);
  }
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
