<template>
    <div>
        <div v-for="(content, index) in tabs" :key="index">
            <Tab :content="content.content"/>
        </div>
    </div>
</template>
<script >
import Tab from "../../../components/tab/Tab.vue"
import { mapGetters } from "vuex";
export default {
    components:{
        Tab
    },
    computed: {
        ...mapGetters('tabsKiseleva', [
            'getTabs',
        ]),
        tabs() {
            return this.getTabs
        },
    },
}
</script>