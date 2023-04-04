<template>
    <div class="page">
        <h2>#4 Уведомления (Крамарев Илья 61 группа)</h2>
        <button type="button" @click="addNotification({})">Отобразить уведомление</button>
        <NotificationArea :position='"right"' v-if="getNotificationsCount"></NotificationArea>
    </div>
</template>

<script>
import NotificationArea from "../../../components/ikramarevNotifications/NotificationArea.vue"
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'NotificationPageKramarev',
    components: {
        NotificationArea
    },
    computed: {
        ...mapGetters("notificationsKramarev", [
            "getNotificationsCount"
        ])
    },
    methods: {
        ...mapActions("notificationsKramarev", [
            "addNotification"
        ]),
    }
}
</script>

<style>
.page {
    padding: 10px;
}
</style>
