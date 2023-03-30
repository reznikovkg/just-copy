<template>
  <div class="about">
    <h1>Select</h1>
    <div style="max-width: 400px">
      <NotifyComponent 
        :notifications="getNotifications"
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
import { mapGetters, mapActions } from "vuex";
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
  computed: {
    ...mapGetters("notifications", [
      "getNotifications",
      "getNotificationsCount",
    ]),
  },
  methods: {
    ...mapActions("notifications", ["addNotification"]),
  },
};

</script>
