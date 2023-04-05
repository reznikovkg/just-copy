<template>
  <div :class="['notif__container']">
    <TransitionGroup name="animation" tag="div" class="notif__group">
      <div 
      :class="[`notif__item`, `notif__item--${notif.type}`, `notif__item--${notif.size}`]"
      v-for="notif in getNotifications" 
      :key="notif.id">
        <h2 class="notif__title">{{ notif.title }}</h2>
        <div class="notif__content">
          <p>{{ notif.content }}</p>
        </div>
        <div class="notif__close"
        @click="() => removeNotification(notif.id)">
        ✖</div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "notificationShimkin",
  computed: {
    ...mapGetters("notificationShimkin", [
      "getNotifications",
    ]),
  },
  methods: {
    ...mapActions("notificationShimkin",[
      "removeNotification"
    ]),
  },
};
</script>

<style scoped lang="less">
@import "styles/styles.less";
</style>
