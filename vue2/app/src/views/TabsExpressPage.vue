<template>
    <div class="tabs-page">
        <div v-for="(i, index) in tabs" :key="index">
            <Tabs :tabs="i.tabs" :active-tab-index="i.activeTab"/>
        </div>
    </div>
</template>

<script>
import Tabs from '../../../components/Tabs/Tabs.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "TabsExpressPage",
    components: {
        Tabs
    },
    computed: {
        ...mapGetters('tabsExpress', [
            'getTabs',
        ]),
        tabs() {
            return this.getTabs
        },
    },
    methods: {
        ...mapActions('tabsExpress', [
            'loadTabs'
        ]),
    },
    mounted() {
        this.loadTabs()
    }
}
</script>

<style lang="less">
.tabs-page{
    width: 50%;
}
</style>