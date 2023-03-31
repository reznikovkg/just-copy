<template>
  <Transition name="fade">
    <div
      v-if="show"
      :class="['notification__box', 'fade-enter-active']"
      :style="{ width: width }"
    >
      <div class="notification__group">
        <h2 class="notification__title">{{ content.title }}</h2>
        <div class="notification__content">
          <p>{{ content.content }}</p>
        </div>
        <div
          class="notification__closebtn"
          @click="() => deleteNotification(this.$vnode.key)"
        >
          ✖
        </div>
      </div>
      <slot></slot>
    </div>
  </Transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: {
    content: {},
    width: {
      type: String,
      default: "350px",
    },
  },
  data() {
    return {
      show: true,
    };
  },
  methods: {
    ...mapActions("notifications",[
      "deleteNotification"
    ]),
  },
  computed:{
    ...mapGetters("notifications", [
      "getInterval"
    ]),
  },
  mounted(){
    setTimeout(() => {
      this.deleteNotification(this.$vnode.key);
    }, this.getInterval);
  }
};
</script>

<style scoped lang="less">
@import "styles.less";
</style>
