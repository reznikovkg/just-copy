# Notify zone


## Basic usage
```vue
<template>
  <div class="about">
    <h1>Select</h1>
    <div style="max-width: 400px">
      <NotifyComponent 
        >
      </NotifyComponent>
      <button 
      @click="() => addNotification(values)"
      >
      Click
      </button>
    </div>
  </div>
</template>

<script>
import {  mapActions } from "vuex";
import NotifyComponent from "../../../components/Notify/NotifyComponent.vue";

export default {
  name: "NotificationPage",
  components: {
    NotifyComponent,
  },
  data() {
    return {
      values: {
        title: "title",
        content: "content",
      },
    };
  },
 
  methods: {
    ...mapActions("notifications", ["addNotification"]),
  },
};

</script>
```
___

