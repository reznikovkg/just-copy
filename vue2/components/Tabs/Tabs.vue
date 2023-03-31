<template>
    <div class="tabs">
        <div class="tabs__nav">
            <div 
                v-for="(tab, index) in tabs" 
                :key="index" class="tabs__tab" 
                :class="{ 'tabs__tab--active': activeTab === index }" 
                @click="changeTab(index)"
                >{{ tab.title }}
            </div>
        </div>
            <transition-group name="tabs__tab-switch" class="tabs__content">
                <div 
                v-for="(tab, index) in tabs" 
                :key="index" class="tabs__pane"
                :class="{ 'tabs__pane--active': activeTab === index }" 
                v-if="activeTab === index"
                v-html="tab.content"></div>
            </transition-group>
        </div>
</template>
  
<script>
export default {
    props: {
        tabs: {
            type: Array,
            required: true
        },
        activeTabIndex: {
            type: Number,
            required: false,
            default: 0
        }
    },
    data() {
        return {
            activeTab: this.activeTabIndex
        }
    },
    methods: {
        changeTab(index) {
            this.activeTab = index
            this.$emit('tabSwitched', this.activeTab)
        }
    }
}
</script>
  
<style scoped lang="less">
    @import "styles/styles.less";
</style>