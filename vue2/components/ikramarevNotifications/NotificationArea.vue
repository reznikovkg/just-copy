<template>
    <div :class="[`notification-area`, `notification-area--${position}`]">
        <NotificationCard 
            v-for="notification in getNotifications" 
            :key="notification.id" 
            :id="notification.id"
            :title="notification.title" 
            :content="notification.content" 
            :timeout="notification.timeout"
            @onNotificationDisposed="(id) => deleteNotification(id)"/>
    </div>
</template>

<script>
import NotificationCard from './NotificationCard.vue';
import { mapActions, mapGetters } from "vuex";

export default {
    name: 'NotificationArea',
    components: {
        NotificationCard
    },
    props: {
        position: {
            type: String,
            required: true,
            validator(value) {
                return ['left', 'right'].includes(value);
            }
        }
    },
    computed: {
        ...mapGetters("notificationsKramarev", [
            "getNotifications"
        ]),
    },
    methods: {
        ...mapActions("notificationsKramarev", [
            "deleteNotification"
        ]),
    },
}
</script>

<style scoped lang="less">
.notification-area {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    overflow: visible;

    &--right {
        top: 0;
        right: 0;
        bottom: 0;
    }

    &--left {
        top: 0;
        left: 0;
        bottom: 0;
    }
}

.notification-area {
    .notification:not(:last-child) {
        margin-bottom: 10px;
    }
}
</style>
