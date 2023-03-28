<template>
    <div class="tabs-page">
        <h1>Example of using Tabs with active-tab-index parameter</h1>
        <h2>Tabs can accept html as content (tab 3)</h2>
        <Tabs :tabs="tabs1" active-tab-index="1"></Tabs>
        <h1>Another Tab with same content to show that they can be used anywhere</h1>
        <Tabs :tabs="tabs1"></Tabs>
        <h1>Also you can dynamically add new tabs</h1>
        <Tabs :tabs="tabs2" @tabChanged="tabChanged"></Tabs>
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
            tabs1: [
                { title: 'Tab 1', content: 'Tab 1 content' },
                { title: 'Tab 2', content: 'Tab 2 content' },
                { title: 'Tab 3', content: '<h1>A photo of a cute cat<h1><img src="https://image.winudf.com/v2/image/Y29tLmh3d3cyMDE0LkNhdF9zY3JlZW5zaG90c18xX2RlODExYmRi/screen-1.jpg?fakeurl=1&type=.jpg" alt="photo of a cute cat" style="width: 100%"></img>' },
            ],
            tabs2: [
                { title: 'Another Tab 1', content: 'Another Tab 1 content' },
                { title: 'Another Tab 2', content: 'Another Tab 2 content' },
                { title: 'Another Tab 3', content: 'Another Tab 3 content' },
            ],
            tabId: 0
        }
    },
    methods: {
        addTab() {
            this.tabs2.push({title: 'Generic Tab', content: 'Generic content'})
        },
        tabChanged(index) {
            this.tabId = index
        }
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