<template>
  <div>
    <div v-for="(tab, index) in tabs" :key="index">
      <MyTabs :tabs="tab"/>
    </div>
  </div>
</template>

<script>
import MyTabs from "../../../components/tabsSviridov/MyTabs.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MyTabs
  },
  computed: {
        ...mapGetters('tabsSviridov', [
            'getTabs',
        ]),
        tabs() {
            console.log(this.getTabs);
            return this.getTabs
        },
    },
}
</script>
