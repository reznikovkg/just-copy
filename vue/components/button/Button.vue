<template>
    <button class="btn" @click="() => actionClick()">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
    methods: {
        actionClick () {
            this.$emit('click')
        }
    }
}
</script>

<style lang="less">
    @import "styles/styles.less";
</style>