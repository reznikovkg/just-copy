# PetrovaNotifications

This is Vue.js component to show notification.

## Notification object attributes

|Property    |Description                                          | Type  |
|:----------:|:---------------------------------------------------:|:-----:|
|id          |Notification id which is used to remove notification |Number |
|title       |Notification title which is shown for user           |String |
|description |Notification description which is shown for user     |String |
|interval    |Interval before automation remove notification       |Number |

## Usage
```vue
<template>
  <div>
    <h1>Petrova Notification</h1>
    <button @click="() => addNotification(values)">Показать</button>
    <PetrovaNotification />
  </div>
</template>
  
<script>
import { mapActions } from "vuex";
import PetrovaNotification from "../../../components/PetrovaNotification/PetrovaNotification.vue";

export default {
  name: "PetrovaNotificationPage",
  components: {
    PetrovaNotification,
  },
  data() {
    return {
      values: {
        title: "Заголовок",
        description: "Описание",
        interval: 10000
      }
    };
  },
  methods: {
    ...mapActions("petrovaNotification", [
      "addNotification"
    ])
  }
}
</script>
  
```

## Example of work
![Notifications](https://ibb.co/Z29vmx4)