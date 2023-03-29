<template>
    <div class="tabs-page">
        <h1>Example of using Tabs with active-tab-index parameter</h1>
        <h2>Tabs can accept html as content (tab 3)</h2>
        <Tabs :tabs="tabs1" :active-tab-index="activeTab1"></Tabs>
        <h1>Another Tab with same content to show that they can be used anywhere</h1>
        <Tabs :tabs="tabs1"></Tabs>
        <h1>Also you can dynamically add new tabs</h1>
        <Tabs :tabs="tabs2" :active-tab-index="activeTab2" @tabChanged="tabChanged"></Tabs>
        <button class="tabs-button" @click="addTab">Add Tab</button>
        <h2>You can use tabChanged event to use it in Parent component</h2>
        <h1>Selected Tab index: {{ tabId }}</h1>
    </div>
</template>

<script>
import Tabs from '../../../components/Tabs/Tabs.vue'

export default {
    name: "TabsPage",
    components: {
        Tabs
    },
    data() {
        return {
            tabId: 0
        }
    },
    computed: {
        tabs1() {
            return this.$store.getters['tabs1/getTabs']
        },
        tabs2() {
            return this.$store.getters['tabs2/getTabs']
        },
        activeTab1() {
            return this.$store.getters['tabs1/getActiveTab']
        },
        activeTab2() {
            return this.$store.getters['tabs2/getActiveTab']
        }
    },
    methods: {
        addTab() {
            this.$store.dispatch('tabs2/addTab', {title: 'Generic Tab', content: 'Generic content'})
        },
        tabChanged(index) {
            this.tabId = index
            this.$store.dispatch('tabs2/setActiveTab', index)
        },
    }
}
</script>

<style lang="less">
.tabs-page{
    width: 50%;
}
.tabs-button {
  background-color: #4CAF50;
  border: none;
  color: white;
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