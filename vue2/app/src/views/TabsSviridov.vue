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
    ...mapGetters('tabsSviridov', [
      'getTabs',
      'getActiveDescriptions',
    ]),
    activeDescriptions(){
      return this.getActiveDescriptions
    }
  },
  methods: {
    ...mapActions('tabsSviridov', [
      'setActiveDescription'
    ]),
    tabSwitched(index, content) {
      this.setActiveDescription({index, content})
    },
  }
}
</script>
