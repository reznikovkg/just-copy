<template>
    <div class="tabs-page">
        <h1>Example of using Tabs with active-tab-index parameter</h1>
        <h2>Tabs can accept html as content (tab 3)</h2>
        <Tabs :tabs="tabs[0].tabs" :active-tab-index="tabs[0].activeTab"/>
        <h1>Another Tab with same content to show that they can be used anywhere</h1>
        <Tabs :tabs="tabs[1].tabs"/>
        <h1>Also you can dynamically add new tabs</h1>
        <h2>You can use tabSwitched event to use it in Parent component</h2>
        <div v-for="(i, index) in tabs" :key="index">
            <Tabs :tabs="i.tabs" :active-tab-index="i.activeTab" @tabSwitched="(tabIndex) => tabSwitched(index, tabIndex)"/>
            <h1>Selected Tab index: {{ tabs[index].activeTab }}</h1>
            <button class="tabs-button" @click="addTabByTabsIndex(index)">Add Tab</button>
        </div>
    </div>
</template>

<script>
import Tabs from '../../../components/Tabs/Tabs.vue'
import { mapGetters, mapActions } from "vuex";

export default {
    name: "TabsPage",
    components: {
        Tabs
    },
    computed: {
        ...mapGetters('tabs', [
            'getTabs',
        ]),
        tabs() {
            return this.getTabs
        },
    },
    methods: {
        ...mapActions('tabs', [
            'addTab',
            'setActiveTab'
        ]),
        addTabByTabsIndex(index) {
            this.addTab({index, tab: {title: 'Generic Tab', content: 'Generic content'}})
        },
        tabSwitched(tabsIndex, tabIndex) {
            this.setActiveTab({tabsIndex, tabIndex})
        },
    }
}
</script>

<style lang="less">
.tabs-page{
    width: 50%;
}
.tabs-button {
  background-color: var(--accent-color);
  border: none;
  color: var(--white-color);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  &:hover {
    background-color: #38833a;
  }
}
</style>