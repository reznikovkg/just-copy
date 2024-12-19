<template>
  <ObjectDiff :newObject="newObject" :oldObject="initialObject" :excluded="excludeFields" />
</template>

<script>
import {mapState} from "vuex";
import ObjectDiff from "../../../components/objectDiff/ObjectDiff.vue";

export default {
  name: "ObjectDiffPage",
  components: {
    ObjectDiff
  },
  computed: {
    ...mapState("objectDiff", ["newObject", "initialObject", "excludeFields"]),
  },
}
</script>

<style scoped>
</style>