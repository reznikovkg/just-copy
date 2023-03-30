# Notification


## Basic usage
```vue
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
    ...mapActions("notifications", ["deleteNotification"]),
    ...mapGetters("notifications", ["getInterval"]),
  },
  mounted(){
      setTimeout(() => {
        this.deleteNotification(this.$vnode.key);
      }, this.getInterval());
    }
};
</script>
```
### Notification creating

![30 03 2023_20 55 48_REC](https://user-images.githubusercontent.com/67105296/228926251-eaff47f2-ae20-4aac-a41a-1d29c0985a24.gif)

___
## Select Attributes

|Attribute|Description          | Type   | Accepted Values|  Default|
|:-------:|:-------------------:|:------:|:--------------:|:-------:|
|key  |notification id       |Number |—               |—        |
|content |content of notification|Object|—|— |
|width|width of notification |string|—|— |
___
