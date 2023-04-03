<template>
    <div>
      <h1>Notification</h1>
      <div style="max-width: 400px">
        <NotifyComponent/>
        <button @click="() => loadNotification(1)">
          Click 1
        </button>
        <button @click="() => loadNotification(2)">
          Click 2
        </button>
        <button @click="() => loadNotification(3)">
          Click 3
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  import NotifyComponent from "../../../components/Notify/NotifyComponent.vue";
  
  export default {
    name: "NotificationPage",
    components: {
      NotifyComponent,
    },   
    methods: {
      ...mapActions("notificationsExp", [
        "loadNotification"
      ]),
    },
  };
  </script>
  