<template>
    <button class="btn" :class="['btn--' + type, 'btn--' + size]" @click="() => actionClick()">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        type: {
            type: String,
            // default, error, warning, success
            default: 'default'
        },
        size: {
            type: String,
            // small, medium, large
            default: 'medium'
        }

    },
    methods: {
        actionClick() {
            this.$emit('click')
        }
    }
}
</script>

<style lang="less">
@import "styles/styles.less";
</style>
