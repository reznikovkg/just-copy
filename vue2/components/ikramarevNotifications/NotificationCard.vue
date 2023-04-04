<template>
    <div class="notification">
        <h2 class="notification__title">{{ title }}</h2>
        <div class="notification__content">{{ content }}</div>
        <div class="notification__close-button" @click="dispose()">✖</div>
    </div>
</template>

<script>
export default {
    props: {
        id: {
            type: Number,
            default: 0
        },
        title: {
            type: String,
            default: 'Заголовок'
        },
        content: {
            type: String,
            default: 'Содержание'
        },
        timeout: {
            type: Number,
            default: 5000
        }
    },
    created() {
        setTimeout(() => this.dispose(), this.timeout);
    },
    emits: [
        'onNotificationDisposed'
    ],
    methods: {
        dispose() {
            this.$emit('onNotificationDisposed', this.id);
        }
    }
}
</script>

<style scoped lang="less">
.notification {
    position: relative;
    border-radius: 5px;
    padding: 15px 25px;
    width: 330px;
    box-shadow: -2px 2px 15px 2px rgb(0 0 0 / 10%);

    &__group {
        position: relative;
    }

    &__title {
        font-weight: 700;
        font-size: 16px;
        color: #303133;
        margin: 0;
        text-align: left;
    }

    &__content {
        font-size: 14px;
        line-height: 20px;
        margin: 6px 0;
        color: #606266;
        text-align: justify;
    }

    &__close-button {
        position: absolute;
        height: auto;
        top: 5px;
        right: 10px;
        cursor: pointer;
        user-select: none;
    }
}
</style>
