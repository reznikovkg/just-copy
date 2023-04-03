<template>
  <div>
    <div v-for="(tab, index) in getTabs" :key="index">
      <MyTabs :tabs="tab" :content="activeDescriptions[index].content" @switched="(content) => tabSwitched(index, content)"/>
    </div>
  </div>
</template>

<script>
import MyTabs from "../../../components/tabsSviridov/MyTabs.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    MyTabs
  },
  computed: {
    ...mapGetters('tabsSviridovExpress', [
      'getTabs',
      'getActiveDescriptions',
    ]),
    activeDescriptions(){
      return this.getActiveDescriptions
    }
  },
  methods: {
    ...mapActions('tabsSviridovExpress', [
      'setActiveDescription',
      'loadTabs'
    ]),
    tabSwitched(index, content) {
      this.setActiveDescription({index, content})
    },
  },
  mounted() {
    this.loadTabs()
  }
}
</script>
