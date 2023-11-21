<template>
  <Transition appear name="slide-fade" @after-leave="afterLeave">
    <div v-if="show" class="notification notification--default-theme">
      <div class="notification__header">{{ notification.title }}</div>
      <div class="notification__description">{{ notification.description }}</div>
      <button class="notification__close close-button" type="button" @click="() => safeDelete()"></button>
    </div>
  </Transition>
</template>

<script>

export default {
  name: 'PetrovaNotificationItem',
  props: {
    notification: {},
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    safeDelete() {
      console.log("safeDelete");
      this.show = false;
    },
    afterLeave() {
      console.log("afterLeave");
      this.$root.$emit('removeModal', this.notification.id);
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
