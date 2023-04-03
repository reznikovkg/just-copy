<template>
    <div>
        <div v-for="(content, index) in getTabs" :key="index">
            <Tab :content="content.content"/>
        </div>
    </div>
</template>

<script>
import Tab from "../../../components/tab/Tab.vue"
import { mapGetters, mapActions } from "vuex";
export default {
    components:{
        Tab
    },
    computed: {
        ...mapGetters('tabsKiselevaExp', [
            'getTabs',
        ])
    },
    methods: {
        ...mapActions('tabsKiselevaExp', [
        'loadTabs'
    ]),
    },
    mounted() {
        this.loadTabs()
    }
}
</script>