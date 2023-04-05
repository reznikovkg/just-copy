<template>
    <div class="page">
        <h2>#4 Уведомления (Крамарев Илья 61 группа)</h2>
        <input type="text" placeholder="title" v-model="title"/>
        <input type="text" placeholder="content" v-model="content">
        <input type="number" placeholder="timeout(ms)" v-model="timeout"/>
        <button type="button" @click="() => collectDataAndAddNotification()">Отобразить уведомление</button>
        <NotificationArea :position='"right"' v-if="getNotificationsCount"/>
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
    data() {
        return {
            title: undefined,
            content: undefined,
            timeout: undefined
        };
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
        collectDataAndAddNotification() {
            if (this.title && this.content) {
                this.addNotification({ title: this.title, content: this.content, timeout: this.timeout ? Number(this.timeout) : undefined });
            }
            else {
                this.addNotification({ title: "Ошибка", content: "Обязательные параметры уведомления не заданы", timeout: 3000 });
            }
        }
    }
}
</script>

<style scoped lang="less">
.page {
    padding: 10px;

    input {
        margin: 5px 0;
        display: block;
    }
}
</style>
