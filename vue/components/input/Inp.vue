<template>
    <input v-model="str" class="inp" :placeholder="placeholder">
</template>

<script>
export default {
    name: 'Input',
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        placeholder: {
            type:  String,
            default: 'Enter...'
        },
        value: {
            type: String,
            default: ''
        }
    },
    computed: {
        str: {
            get () {
                return this.value
            },
            set (v) {
                this.$emit('change', v)
            }
        }
    }
}
</script>

<style lang="less">
    @import "styles/styles.less";
</style>
